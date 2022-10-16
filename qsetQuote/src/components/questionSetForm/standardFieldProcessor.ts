import { createControlId, destructureControlId, DestructuredControlIdResult } from '@avantia/questionset-model';
import { FormName } from '../../actions/actionTypes';
import { HpClientQuestion, HpEventTypes } from '../../interfaces';
import {
  EventDetailTypes,
  HpDateDropDownEventDetail,
  HpEventDetail,
  HpNavTabEventDetail
} from '../formControls/inputControl';
import { EventTypeProcessor, HandleFormEventProps, HandleMouseEventProps } from './eventProcessor';
import { QuestionSetPageProps } from './questionSetPageFunctions';

export class StandardFieldProcessor implements EventTypeProcessor<QuestionSetPageProps> {
  canHandle(detailType: EventDetailTypes): boolean {
    return (
      detailType === 'standard' ||
      detailType === 'nav-bar' ||
      detailType === 'questionset' ||
      detailType === 'button-action' ||
      detailType === 'date-drop-down' ||
      detailType === 'help-icon'
    );
  }

  handleFocusEvent(): void {
    throw new Error('Method not implemented.');
  }

  handleMouseEvent({ event, detail, pageProps, formName }: HandleMouseEventProps<QuestionSetPageProps>): void {
    const { currentTarget: target, type: eventTypeString, timeStamp } = event;
    const eventType = eventTypeString as HpEventTypes;
    const { type: detailType, question } = detail;
    const { questionId, groupNumber } = destructureControlId(target.id);
    let { key } = destructureControlId(target.id);
    if (detailType === 'button-action') {
      pageProps.dynamicButtonClick({ eventType, questionId, key, groupNumber, formName, pageProps, question });
    } else if (detail.type === 'date-drop-down' && key) {
      const { fullDate } = detail as HpDateDropDownEventDetail;
      key = fullDate;
    }
    this.fieldChangedCommon({
      eventType,
      target,
      pageProps,
      formName,
      questionId,
      key,
      groupNumber,
      question,
      detail,
      timeStamp
    });
  }

  handleFormEvent({ event, detail, pageProps, formName }: HandleFormEventProps<QuestionSetPageProps>): void {
    const { currentTarget: target, type: eventTypeString, timeStamp } = event;
    const eventType = eventTypeString as HpEventTypes;
    const { type: detailType, question } = detail;
    const targetId = target.id;
    const { questionId, key, groupNumber } = destructureControlId(targetId);
    if (detailType === 'nav-bar') {
      const { activeKey } = detail as HpNavTabEventDetail;
      pageProps.navigationChanged({ eventType: eventType, activeKey, formName });
    } else if (detailType === 'help-icon') {
      pageProps.helpInfoClick({ eventType: eventType, question: question });
    } else if (detailType === 'button-action') {
      pageProps.dynamicButtonClick({
        eventType: eventType,
        questionId,
        key,
        groupNumber,
        formName,
        pageProps,
        question
      });
    } else if (detailType === 'date-drop-down') {
      const { fullDate } = detail as HpDateDropDownEventDetail;
      const eventDetail = { ...detail, fullDate: key, dateDropDownId: targetId } as HpDateDropDownEventDetail;
      pageProps.fieldChanged({
        eventType: eventType,
        key: targetId,
        value: fullDate,
        formName,
        error: '',
        question,
        detail: eventDetail,
        timeStamp
      });
    } else if (detailType === 'questionset') {
      pageProps.fieldChanged({
        eventType: eventType,
        key: 'questionSetId',
        value: key as string,
        formName,
        error: '',
        question,
        detail,
        timeStamp
      });
    } else {
      this.fieldChangedCommon({
        eventType,
        target,
        pageProps,
        formName,
        questionId,
        key,
        groupNumber,
        question,
        detail,
        timeStamp
      });
    }
  }

  handleKeyboardEvent(): void {
    throw new Error('Method not implemented.');
  }

  private fieldChangedCommon({
    eventType,
    target,
    pageProps,
    formName,
    questionId,
    groupNumber,
    key,
    question,
    detail,
    timeStamp
  }: FieldChangedCommonProps): void {
    const { validationResult } = pageProps;
    const input = target as HTMLInputElement;
    // eslint-disable-next-line prefer-const
    let { value } = input;
    if (key) {
      value = key as string;
    }

    if (groupNumber !== undefined) {
      questionId = createControlId({ questionId, groupNumber });
    }

    const error = validationResult.errors[questionId];
    pageProps.fieldChanged({
      key: questionId,
      value,
      error,
      eventType,
      formName,
      question,
      detail,
      timeStamp
    });
  }
}

interface FieldChangedCommonProps extends DestructuredControlIdResult {
  eventType: HpEventTypes;
  target: HTMLElement & EventTarget;
  pageProps: QuestionSetPageProps;
  formName: FormName;
  question: HpClientQuestion;
  timeStamp: number;
  detail: HpEventDetail;
}
