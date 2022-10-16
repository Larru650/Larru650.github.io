import { SMap } from '@avantia/client-and-server-utilities';
import { HpButtonTypes, HpQuestionDataTypes, HpQuestionFormatTypes } from '@avantia/questionset-model';
import React, { FocusEvent, FormEvent, KeyboardEvent, MouseEvent, ReactElement } from 'react';
import {
  AnswerSource,
  ControlValueTypes,
  HpClientAnswer,
  HpClientAnswerMap,
  HpClientButtonData,
  HpClientQuestion,
  HpClientQuestionData,
  HpClientQuestionMap,
  HpClientQuestionUI,
  HpClientQuestionUiMap,
  HpEventTypes
} from '../../interfaces';

export type EventDetailTypes =
  | 'standard'
  | 'questionset'
  | 'button-action'
  | 'fluent-toggle'
  | 'fluent-ok'
  | 'fluent-click'
  | 'fluent-change'
  | 'nav-bar'
  | 'date-drop-down'
  | 'help-icon';

export interface HpEventDetail {
  type: EventDetailTypes;
  question: HpClientQuestion;
  unformat?: (input: ControlValueTypes, eventType: HpEventTypes) => string;
}

export interface HpNavTabEventDetail extends HpEventDetail {
  activeKey: string;
}

export interface HpDateDropDownEventDetail extends HpEventDetail {
  fullDate: string;
  dateDropDownId: string;
}

export type HpOnFocusEvent = (event: FocusEvent<HTMLElement>, detail: HpEventDetail) => void;
export type HpOnMouseEvent = (event: MouseEvent<HTMLElement>, detail: HpEventDetail) => void;
export type HpOnFormEvent = (event: FormEvent<HTMLElement>, detail: HpEventDetail) => void;
export type HpOnKeyboardEvent = (event: KeyboardEvent<HTMLElement>, detail: HpEventDetail) => void;

export type HpOnBlurEvent = HpOnFocusEvent;
export type HpOnClickEvent = HpOnMouseEvent;
export type HpOnChangeEvent = HpOnFormEvent;
export type HpOnMouseOverEvent = HpOnMouseEvent;
export type HpOnMouseEnterEvent = HpOnMouseEvent;
export type HpOnMouseLeaveEvent = HpOnMouseEvent;
export type HpOnKeyDownEvent = HpOnKeyboardEvent;

export function createFocusEvent(
  event: HpOnFocusEvent | undefined,
  detail: HpEventDetail,
  fallbackEvent: HpOnFormEvent
): (event: React.FocusEvent<HTMLElement>) => void {
  if (event) {
    return (e): void => event(e, detail);
  }

  return fallbackEvent as any;
}

// 'Standard' as in not 'Fluent'.
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createStandardMouseEvent(event: HpOnMouseEvent | undefined, question: HpClientQuestion) {
  return createMouseEvent(event, { type: 'standard', question });
}

export function createMouseEvent(
  event: HpOnMouseEvent | undefined,
  detail: HpEventDetail
): (event: MouseEvent<HTMLElement>) => void {
  return event ? (e): void => event(e, detail) : IgnoreClickEvent;
}

// 'Standard' as in not 'Fluent'.
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createStandardFormEvent(event: HpOnFormEvent, question: HpClientQuestion) {
  return createFormEvent(event, { type: 'standard', question });
}

export function createFormEvent(event: HpOnFormEvent, detail: HpEventDetail): (event: FormEvent<HTMLElement>) => void {
  return (e): void => event(e, detail);
}

export function createKeyboardEvent(
  event: HpOnKeyboardEvent,
  detail: HpEventDetail
): (event: KeyboardEvent<HTMLElement>) => void {
  return (e): void => event(e, detail);
}

export function IgnoreBlurEvent(event: FocusEvent<HTMLElement>): void {
  event.preventDefault();
}

export function IgnoreClickEvent(event: MouseEvent<HTMLElement>): void {
  event.preventDefault();
}

export function IgnoreChangeEvent(event: FormEvent<HTMLElement>): void {
  event.preventDefault();
}

export function IgnoreOnKeyDownEvent(event: FormEvent<HTMLElement>): void {
  event.preventDefault();
}

export interface CommonControlProps {
  id: string;
  name?: string;
  disabled?: boolean;
  question: HpClientQuestion;
  errors: SMap<string>;
}

export interface InputControlProps extends CommonControlProps {
  type?: string;
  value: ControlValueTypes;
  answerSource: AnswerSource;
  answer: HpClientAnswer;
  children?: React.ReactNode;
  data: HpClientQuestionData;
  dataType: HpQuestionDataTypes;
  ui: HpClientQuestionUI;

  onChange: HpOnChangeEvent;
  onFocus: HpOnBlurEvent;
  onBlur: HpOnBlurEvent;
  onClick: HpOnClickEvent;
  onMouseOver?: HpOnMouseOverEvent;
  onMouseEnter?: HpOnMouseEnterEvent;
  onMouseLeave?: HpOnMouseLeaveEvent;
  onKeyDown?: HpOnKeyDownEvent;
}

export interface CommonButtonControlProps extends CommonControlProps {
  type?: HpButtonTypes;
  children?: React.ReactNode;
  data: HpClientButtonData;

  onClick: HpOnClickEvent;
}

export type InputControl<PropsT extends InputControlProps> = React.FC<PropsT>;

export type CommonButtonControl<PropsT extends CommonButtonControlProps> = React.FC<PropsT>;

export interface CommonGroupControlProps {
  id: string;
  label: string;
  controls: ReactElement[];
  controlMap: SMap<ReactElement>;
  questions: HpClientQuestionMap;
  questionsUiMap: HpClientQuestionUiMap;
  answers: HpClientAnswerMap;
  index: number | undefined;
  errors: SMap<string>;
}

export type CommonGroupControl<PropsT extends CommonGroupControlProps> = React.FC<PropsT>;

export interface ShowQuestionFormats {
  showFluent: boolean;
  showStandard: boolean;
  onlyFluent: boolean;
  onlyStandard: boolean;
  preferFluent: boolean;
  preferStandard: boolean;
}

export function getQuestionFormats(questionFormat: HpQuestionFormatTypes[]): ShowQuestionFormats {
  const standardIndex = questionFormat.indexOf('standard');
  const fluentIndex = questionFormat.indexOf('fluent');
  const showFormats: ShowQuestionFormats = {
    showStandard: standardIndex >= 0,
    showFluent: fluentIndex >= 0,
    onlyStandard: fluentIndex === -1,
    onlyFluent: standardIndex === -1,
    preferFluent: fluentIndex >= 0 && (fluentIndex < standardIndex || standardIndex < 0),
    preferStandard: standardIndex >= 0 && (standardIndex < fluentIndex || fluentIndex < 0)
  };
  return showFormats;
}

export function selectControlToUse(
  formats: ShowQuestionFormats,
  controls: Map<HpQuestionFormatTypes, InputControl<InputControlProps> | undefined>
): InputControl<InputControlProps> | undefined {
  const { showFluent, showStandard, preferFluent, preferStandard, onlyFluent, onlyStandard } = formats;
  let standard: InputControl<InputControlProps> | undefined;
  let fluent: InputControl<InputControlProps> | undefined;

  if (showStandard) {
    standard = controls.get('standard');
  }

  if (showFluent) {
    fluent = controls.get('fluent');
  }

  if (onlyStandard || (preferStandard && standard)) {
    return standard;
  }

  if (onlyFluent || (preferFluent && fluent)) {
    return fluent;
  }

  if (showStandard && preferFluent && standard && !fluent) {
    return standard;
  }

  if (showFluent && preferStandard && !standard && fluent) {
    return fluent;
  }

  return undefined;
}
