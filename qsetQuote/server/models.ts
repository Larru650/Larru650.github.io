import { FetchAndQueryOptions } from '@avantia/server-base';

export interface ProcessRequestOptions {
  minTimeMs: number;
  successCallback?: (data: string | object) => 'reponse-sent' | void;
  requireSessionAuth: boolean;
}

export interface ServerErrorModel {
  referenceId?: string;
  userAgent: string | undefined;
  errors: {
    count: number;
    isValid: boolean;
    errors: {
      propertyName?: string;
      error?: string;
      message: string;
    }[];
  };
  success: boolean;
}

export interface QSPRequestData {
  uri: string;
  options: FetchAndQueryOptions;
}
