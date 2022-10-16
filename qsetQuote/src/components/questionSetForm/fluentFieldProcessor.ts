import { destructureControlId } from '@avantia/questionset-model';
import { FormName } from '../../actions/actionTypes';
import { HpClientQuestionUI, HpEventTypes } from '../../interfaces';
import { EventDetailTypes, HpEventDetail } from '../formControls/inputControl';
import { EventTypeProcessor, HandleFormEventProps, HandleMouseEventProps } from './eventProcessor';
import { QuestionSetPageProps } from './questionSetPageFunctions';

export class FluentFieldProcessor implements EventTypeProcessor<QuestionSetPageProps> {
  canHandle(detailType: EventDetailTypes): boolean {
    return detailType && detailType.startsWith('fluent-');
  }

  handleFocusEvent(): void {
    throw new Error('Method not implemented.');
  }

  handleMouseEvent({ event, detail, pageProps, formName }: HandleMouseEventProps<QuestionSetPageProps>): void {
    this.fieldChangedCommon(
      event.type as HpEventTypes,
      detail,
      event.currentTarget,
      pageProps,
      formName,
      event.timeStamp
    );
  }

  handleFormEvent({ event, detail, pageProps, formName }: HandleFormEventProps<QuestionSetPageProps>): void {
    this.fieldChangedCommon(
      event.type as HpEventTypes,
      detail,
      event.currentTarget,
      pageProps,
      formName,
      event.timeStamp
    );
  }

  handleKeyboardEvent(): void {
    throw new Error('Method not implemented.');
  }

  private fieldChangedCommon(
    eventType: HpEventTypes,
    detail: HpEventDetail,
    target: EventTarget & HTMLElement,
    props: QuestionSetPageProps,
    formName: FormName,
    timeStamp: number
  ): void {
    const { type: detailType, question } = detail;
    const { questionId: targetId, key } = destructureControlId(target.id);
    if (detailType === 'fluent-change' || detailType === 'fluent-click') {
      let value = (target as HTMLInputElement).value;
      const { validationResult } = props;
      const error = validationResult.errors[targetId];
      let ui: Partial<HpClientQuestionUI> = {};
      if (detailType === 'fluent-click') {
        value = key as string;
        ui = { isEditing: false };
      }

      props.fieldChanged({ key: targetId, value, error, eventType, formName, ui, question, detail, timeStamp });
    } else if (detailType === 'fluent-ok' || detailType === 'fluent-toggle') {
      props.fluentAnswerClick({
        eventType,
        targetId,
        formName,
        fluentAction: detailType === 'fluent-ok' ? 'ok' : 'open'
      });
    } else {
      throw new Error(`Unhandled type "${detailType}".`);
    }
  }
}
