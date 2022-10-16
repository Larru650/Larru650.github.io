import {
  getIpAddressFromRequest,
  getUserNameFromRequest,
  logDebug,
  logError,
  logWarning,
  processRequest as processRequestServer,
  RequestData,
  setStandardValuesFromRequest,
  ThenActionFunction
} from '@avantia/server-base';
import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import { ServerConfiguration } from './configuration';
import { ProcessRequestOptions, QSPRequestData } from './models';

export const defaultRequestOptions: ProcessRequestOptions = { minTimeMs: 0, requireSessionAuth: false };

export function checkIfAuthorised(
  req: Request,
  data: RequestData,
  res: Response,
  options: ProcessRequestOptions
): boolean {
  options = options || defaultRequestOptions;
  if (options.requireSessionAuth) {
    const msg = { error: true, message: 'You are not authorised to perform this action.' };
    logWarning({ ...msg, data });
    res.status(401).send(msg);
    return false;
  }
  return true;
}

export function processRequest(
  req: Request,
  cpdata: QSPRequestData,
  res: Response,
  options?: ProcessRequestOptions
): void {
  const startAt = new Date().getTime();
  options = options || defaultRequestOptions;
  const minTimeMs = options.minTimeMs;
  const data = setStandardValuesFromRequest(req, cpdata) as RequestData;
  if (!checkIfAuthorised(req, data, res, options)) {
    return;
  }

  const thenAction: ThenActionFunction = (respData: string | object) => {
    addResponseHeaders(undefined, res);
    const elapsedMs = new Date().getTime() - startAt;
    const successAction = (): void => {
      if (options && options.successCallback) {
        if (options.successCallback(respData) === 'reponse-sent') {
          return;
        }
      }

      // we need to translate a 400 into a 200.
      res.status(200).send(respData);
    };

    if (minTimeMs && minTimeMs > elapsedMs) {
      setTimeout(successAction, minTimeMs - elapsedMs);
    } else {
      successAction();
    }
  };
  processRequestServer(data, res, thenAction);
}

export function clearSessionData(req: Request, callback: Function): void {
  if (!req.session) {
    callback();
  } else {
    req.session.destroy(err => {
      if (err) {
        logWarning('Failed to destroy the session: ' + err);
      }

      callback();
    });
  }
}

export function addResponseHeaders(req: Request | undefined, res: Response): void {
  const authName = req ? getUserNameFromRequest(req) : undefined;
  res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.setHeader('Expires', '-1');
  res.setHeader('Pragma', 'no-cache');
  if (authName) {
    logDebug({ authName });
    res.setHeader('Avantia-Authenticated-User', authName);
  }
}

export interface AddHeadersAndCookiesProps {
  cookieName: string;
  cookieValueOverride: string | undefined;
  maxCookieAgeMs: number;
  isCookieHttpOnly: boolean;
}

export function addHeadersAndCookies(req: Request, res: Response, props: AddHeadersAndCookiesProps): string {
  const { cookieName, cookieValueOverride, maxCookieAgeMs, isCookieHttpOnly } = props;

  // add headers
  res.setHeader('Avantia-User-IP', getIpAddressFromRequest(req));
  const authName = getUserNameFromRequest(req);
  if (authName) {
    res.setHeader('Avantia-Authenticated-User', authName);
  }

  // add cookie
  let cookieValue = req.cookies[cookieName];
  if (!cookieValue || cookieValueOverride) {
    cookieValue = cookieValueOverride || uuid();
    res.cookie(cookieName, cookieValue, { maxAge: maxCookieAgeMs, httpOnly: isCookieHttpOnly });
    logDebug({ created: true, cookie: null });
  } else {
    logDebug({ exists: true, cookie: cookieValue });
  }

  return cookieValue;
}

export function createErrorHandler(res: Response, message: string) {
  return (error: any): void => {
    logError(`${message}: ${error}`);
    res.status(400).send({ success: false, message, error });
  };
}

export function setHeadersAndCookies(
  config: ServerConfiguration,
  req: Request,
  res: Response,
  cookieValueOverride: string | undefined
): string {
  // add headers
  res.setHeader('Avantia-User-IP', getIpAddressFromRequest(req));
  const authName = getUserNameFromRequest(req);
  if (authName) {
    res.setHeader('Avantia-Authenticated-User', authName);
  }

  // add cookie
  let cookieValue = req.cookies[config.cookieName];
  if (!cookieValue || cookieValueOverride) {
    cookieValue = cookieValueOverride || uuid();
    res.cookie(config.cookieName, cookieValue, {
      maxAge: config.maxCookieAgeMs,
      httpOnly: !config.developerModeEnabled
    });
    logDebug({ created: true, cookie: null });
  } else {
    logDebug({ exists: true, cookie: cookieValue });
  }

  return cookieValue;
}

export function getNameOfFunction(fn: Function): string {
  if (!fn || typeof fn !== 'function') {
    throw new Error(`The getNameOfFunction must have a function provided as parameter.`);
  }

  const fnText = 'function ';
  const name = fn.toString();
  const fnIndex = name.indexOf(fnText);
  const parenIndex = name.indexOf('(', fnIndex + 1);
  if (fnIndex >= 0 && parenIndex > fnIndex) {
    return name.substring(fnIndex + fnText.length, parenIndex);
  }

  throw new Error(`Unable to get name from function - the function may not be well-formed.`);
}
