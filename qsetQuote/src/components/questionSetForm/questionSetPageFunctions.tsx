import { getOrdinal, SMap } from '@avantia/client-and-server-utilities';
import { HpValidationResult } from '@avantia/form-validation';
import {
  createQuestionPanelId,
  HpAnswer,
  HpDebugFlags,
  HpQuestionFormatTypes,
  HpStandardControlTypes
} from '@avantia/questionset-model';
import $ from 'jquery';
import cookies from 'js-cookie';
import React, { FocusEvent, FormEvent, MouseEvent, ReactElement } from 'react';
import { Col, Row } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router';
import { DynamicButtonClickPayload } from '../../actions/dynamicButtonClickAction';
import { FieldChangedPayload } from '../../actions/fieldChangedAction';
import { FluentAnswerClickPayload } from '../../actions/fluentAnswerClickAction';
import { GetAnswersActionPayload } from '../../actions/getAnswersAction';
import { HelpInfoClickPayload } from '../../actions/helpInfoClickAction';
import { NavigationChangedPayload } from '../../actions/navigationChangedAction';
import { getConfig } from '../../config/configuration';
import {
  HpClientAnswerMap,
  HpClientButtonData,
  HpClientButtonTextAndStyle,
  HpClientInputTextAndStyle,
  HpClientQuestion,
  HpClientQuestionData,
  HpClientQuestionMap,
  HpClientQuestionSetState,
  HpClientQuestionUI,
  HpClientStandardButtonTextAndStyle,
  HpCustomHashLoadHandler,
  HpNeedToLoadDataResult,
  HpQuestionDisplayState,
  HpQuestionIdGroup,
  HpQuestionIdNode
} from '../../interfaces';
import { UserInterfaceState } from '../../reducers/initialState';
import { createBlankAnswer } from '../../reducers/questionSetTools';
import { getControlValue } from '../../tools/utilities';
import * as FluentControls from '../formControls/fluent/index';
import {
  CommonButtonControl,
  CommonButtonControlProps,
  HpEventDetail,
  InputControl,
  InputControlProps,
  selectControlToUse,
  ShowQuestionFormats
} from '../formControls/inputControl';
import * as StandardControls from '../formControls/standard/index';
import { SectionControlFunction } from '../formControls/standard/index';
import { templateResolver } from '../templateResolver';

export type StateProps = HpClientQuestionSetState & {
  userInterface: UserInterfaceState;
};

export interface DispatchProps {
  fieldChanged: (req: FieldChangedPayload) => void;
  dynamicButtonClick: (req: DynamicButtonClickPayload) => void;
  fluentAnswerClick: (req: FluentAnswerClickPayload) => void;
  navigationChanged: (req: NavigationChangedPayload) => void;
  helpInfoClick: (req: HelpInfoClickPayload) => void;
  getAnswers: (req: GetAnswersActionPayload) => void;
  getQuestionSets: () => void;
}

export type QuestionSetPageProps = StateProps & DispatchProps & RouteComponentProps;

export interface HpPageEvents {
  buttonClicked: (event: MouseEvent<HTMLElement>, detail: HpEventDetail) => void;
  fieldChanged: (event: FormEvent<HTMLElement> | FocusEvent<HTMLElement>, detail: HpEventDetail) => void;
  fieldClicked: (event: MouseEvent<HTMLElement>, detail: HpEventDetail) => void;
}

export interface QuestionControlResult {
  elements: ReactElement[];
  elementMap: SMap<ReactElement>;
}

const customLoadDataHandlers: HpCustomHashLoadHandler[] = [];
const { answersKey, questionSetKey } = getConfig();

export function createQuestionControls(
  questionIdNodes: HpQuestionIdNode[],
  page: HpPageEvents,
  allQuestions: HpClientQuestionMap,
  allAnswers: HpClientAnswerMap,
  showFormats: ShowQuestionFormats,
  validationResult: HpValidationResult,
  displayState: HpQuestionDisplayState,
  level: number
): QuestionControlResult {
  const elements: ReactElement[] = [];
  const elementMap: SMap<ReactElement> = {};
  const { questionsUI } = displayState;
  for (let index = 0; index < questionIdNodes.length; index++) {
    const questionIdNode = questionIdNodes[index];
    const isGroup = typeof questionIdNode === 'object';
    if (!isGroup) {
      const key = questionIdNode as string;
      const questionUI = questionsUI[key];
      const question: HpClientQuestion = allQuestions[key];
      const { data } = question;
      const { textAndStyle } = data;
      const { buttonText, controlType: standardControlType } = (textAndStyle as HpClientButtonTextAndStyle).standard;
      const fluentInputTextAndStyle = (textAndStyle as HpClientInputTextAndStyle).fluent;
      const fluentControlType = fluentInputTextAndStyle ? fluentInputTextAndStyle.controlType : undefined;
      const controlMap = new Map<HpQuestionFormatTypes, InputControl<InputControlProps> | undefined>();
      controlMap.set('standard', StandardControls[standardControlType + 'Control']);
      controlMap.set('fluent', FluentControls[fluentControlType + 'Control']);
      let element: ReactElement | undefined;
      if (buttonText) {
        if (showFormats.showStandard) {
          element = createButtonControl(
            page,
            question,
            standardControlType,
            key,
            textAndStyle.standard as HpClientStandardButtonTextAndStyle,
            questionUI,
            validationResult
          );
        }
      } else {
        element = createInputControl(
          page,
          question,
          key,
          allAnswers,
          validationResult,
          showFormats,
          controlMap,
          questionUI
        );
      }

      if (element) {
        elements.push(element);
        elementMap[question.questionId] = element;
      }
    } else {
      if (showFormats.showStandard) {
        const groupControl = createStandardGroupControl(
          page,
          allQuestions,
          allAnswers,
          questionIdNode as HpQuestionIdGroup,
          validationResult,
          displayState,
          showFormats,
          level,
          elementMap
        );

        if (groupControl) {
          elements.push(groupControl);
        }
      }
    }
  }

  return { elements, elementMap };
}

export function applyStylesheetsToPage(stylesheets: string[]): void {
  const pathPrefix = '/dynamic-';
  const allStylesheets = $('head > link[rel=stylesheet]').toArray() as HTMLLinkElement[];
  const dynamicSheets = allStylesheets.filter((sheet) => sheet.href.indexOf(pathPrefix) >= 0);
  if (dynamicSheets.length > 0) {
    $(dynamicSheets).remove();
  }

  for (const sheet of stylesheets) {
    $('head').append(`<link rel="stylesheet" href="${pathPrefix}${sheet}.css" />`);
  }
}

export interface NeedToLoadDataProps {
  answersIdLoaded: string;
  questionSetsLoadedCount: number;
  location: { search: string; hash: string };
  history: { push: (url: string) => void };
}

export function needToLoadData({
  location,
  history,
  answersIdLoaded,
  questionSetsLoadedCount
}: NeedToLoadDataProps): HpNeedToLoadDataResult {
  const hashLoading = '#loading';
  const hashClear = '#clear';
  const { search, hash } = location;
  const hasHashLoading = hash === hashLoading;
  const hasHashClear = hash === hashClear;
  const query = new URLSearchParams(search);
  const ansId = !hasHashClear ? query.get(answersKey) || cookies.get(answersKey) : undefined;
  const qsetId = !hasHashClear ? query.get(questionSetKey) || cookies.get(questionSetKey) : undefined;
  const isLoaded = (ansId && qsetId && ansId === answersIdLoaded) || questionSetsLoadedCount > 0;
  if (hasHashClear) {
    cookies.set(answersKey, '');
    cookies.set(questionSetKey, '');
    cookies.remove('coverType');
  }

  for (const { willHandleHash: canHandleHash, needToLoadData } of customLoadDataHandlers) {
    if (canHandleHash(hash)) {
      return needToLoadData(hash, history);
    }
  }

  if ((!isLoaded && !hasHashLoading) || hasHashClear) {
    history.push(hashLoading);
    return { loadData: true, answersId: ansId, questionSetId: qsetId };
  } else if (isLoaded && (hasHashLoading || hasHashClear)) {
    history.push('/');
  }

  return { loadData: false };
}

function createInputControl(
  page: HpPageEvents,
  question: HpClientQuestion,
  key: string,
  riskAnswers: HpClientAnswerMap,
  validationResult: HpValidationResult,
  showFormats: ShowQuestionFormats,
  controlMap: Map<HpQuestionFormatTypes, InputControl<InputControlProps> | undefined>,
  ui: HpClientQuestionUI
): ReactElement | undefined {
  const { errors } = validationResult;
  let answer: HpAnswer = riskAnswers[key];
  if (!answer) {
    answer = createBlankAnswer(HpDebugFlags.Controls);
  }

  const Control = selectControlToUse(showFormats, controlMap);

  const { questionId, data, isMultiSelect } = question;
  if (Control) {
    const { answerSource, answerValue } = getControlValue(answer, question);
    const attributes: HpClientQuestion & InputControlProps = Object.assign({}, question, {
      id: questionId,
      key: questionId,
      isMultiSelect,
      value: answerValue,
      answerSource,
      data: data as HpClientQuestionData,
      onChange: page.fieldChanged,
      onFocus: page.fieldChanged,
      onBlur: page.fieldChanged,
      onClick: page.fieldClicked,
      question,
      answer,
      errors,
      ui
    });

    return <Control {...attributes} />;
  }

  throw new Error(`The control specified by question "${question.questionId}" is not valid.`);
}

function createButtonControl(
  page: HpPageEvents,
  question: HpClientQuestion,
  controlType: HpStandardControlTypes,
  key: string,
  textAndStyle: HpClientStandardButtonTextAndStyle,
  ui: HpClientQuestionUI,
  validationResult: HpValidationResult
): ReactElement | undefined {
  const { questionId, data } = question;
  const attributes: Partial<CommonButtonControlProps> = {
    id: questionId,
    type: textAndStyle.type,
    data: data as HpClientButtonData,
    question,
    errors: validationResult.errors
  };

  const Control: CommonButtonControl<CommonButtonControlProps> | undefined = StandardControls[controlType + 'Control'];

  if (Control) {
    return (
      <Row key={createQuestionPanelId(key)}>
        <Col>
          <Control
            key={questionId}
            {...(attributes as CommonButtonControlProps)}
            onClick={(e): void => page.buttonClicked(e, { type: 'button-action', question })}
          />
        </Col>
      </Row>
    );
  }
}

function createStandardGroupControl(
  page: HpPageEvents,
  allQuestions: HpClientQuestionMap,
  allAnswers: HpClientAnswerMap,
  questionIdGroup: HpQuestionIdGroup,
  validationResult: HpValidationResult,
  displayState: HpQuestionDisplayState,
  showFormats: ShowQuestionFormats,
  level: number,
  elementMap: SMap<ReactElement>
): ReactElement | null {
  const { number, questions: questionIds, groupId } = questionIdGroup;
  const { elements: controls, elementMap: childMap } = createQuestionControls(
    questionIds,
    page,
    allQuestions,
    allAnswers,
    showFormats,
    validationResult,
    displayState,
    level + 1
  );

  Object.assign(elementMap, childMap);
  const { sections, sectionsUI, questionsUI } = displayState;
  const sectionUI = sectionsUI[groupId];
  const section = sections[groupId];
  if (!section) {
    throw new Error(`There is no Section with ID "${groupId}".`);
  }

  const { title, controlType } = section;
  if (sectionUI.isVisible) {
    const SectionControl: SectionControlFunction = controlType
      ? StandardControls[controlType + 'Control']
      : StandardControls.SectionControl;

    if (!SectionControl) {
      throw new Error(`There is no controlType ${controlType} for Section with ID "${groupId}".`);
    }

    const id = number !== undefined ? `${groupId}-${number}` : groupId;
    return (
      <SectionControl
        key={id}
        id={id}
        label={createSectionTitle(title, number)}
        controls={controls}
        controlMap={childMap}
        questions={allQuestions}
        questionsUiMap={questionsUI}
        answers={allAnswers}
        index={number}
        errors={validationResult.errors}
      />
    );
  }

  return null;
}

function createSectionTitle(title: string, number: number | undefined): string {
  if (number !== undefined) {
    const ordinal = getOrdinal(number, { lowerCase: false });
    return templateResolver(`${title}`, { ordinal: ordinal.toLowerCase(), Ordinal: ordinal, index: number });
  }

  return title;
}
