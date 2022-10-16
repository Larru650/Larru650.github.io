import { HpDebugFlags, logInfo, recordElapsedTime } from '@avantia/questionset-model';
import { BaseSyntheticEvent, FocusEvent, FormEvent, KeyboardEvent, MouseEvent } from 'react';
import { FormName } from '../../actions/actionTypes';
import { EventDetailTypes, HpEventDetail } from '../formControls/inputControl';

export interface EventHandlerProps<
  EventT extends FormEvent<HTMLElement> | KeyboardEvent<HTMLInputElement>,
  PagePropsT
> {
  event: EventT;
  detail: HpEventDetail;
  pageProps: PagePropsT;
  formName: FormName;
}

export type HandleFocusEventProps<PagePropsT> = EventHandlerProps<FocusEvent<HTMLElement>, PagePropsT>;
export type HandleMouseEventProps<PagePropsT> = EventHandlerProps<MouseEvent<HTMLElement>, PagePropsT>;
export type HandleFormEventProps<PagePropsT> = EventHandlerProps<FormEvent<HTMLElement>, PagePropsT>;
export type HandleKeyboardEventProps<PagePropsT> = EventHandlerProps<KeyboardEvent<HTMLInputElement>, PagePropsT>;

export interface EventTypeProcessor<PagePropsT> {
  canHandle(detailType: EventDetailTypes): boolean;
  handleFocusEvent(props: HandleFocusEventProps<PagePropsT>): void;
  handleMouseEvent(props: HandleMouseEventProps<PagePropsT>): void;
  handleFormEvent(props: HandleFormEventProps<PagePropsT>): void;
  handleKeyboardEvent(props: HandleKeyboardEventProps<PagePropsT>): void;
}

export interface EventTypeProcessorItem<PropsT> {
  name: string;
  processor: EventTypeProcessor<PropsT>;
}

export class EventProcessor<PropsT> {
  private formName: FormName;
  private debugMode: boolean;
  private processors: EventTypeProcessorItem<PropsT>[];

  constructor(formName: FormName, debugMode: boolean, processors: EventTypeProcessorItem<PropsT>[]) {
    this.formName = formName;
    this.debugMode = debugMode;
    this.processors = processors;
  }

  processFocusEvent(event: FocusEvent<HTMLElement>, detail: HpEventDetail, pageProps: PropsT): void {
    this.process(event, (p, d) => p.handleFocusEvent({ event, detail: d, pageProps, formName: this.formName }), detail);
  }

  processMouseEvent(event: MouseEvent<HTMLElement>, detail: HpEventDetail, pageProps: PropsT): void {
    this.process(event, (p, d) => p.handleMouseEvent({ event, detail: d, pageProps, formName: this.formName }), detail);
  }

  processFormEvent(event: FormEvent<HTMLElement>, detail: HpEventDetail, pageProps: PropsT): void {
    this.process(event, (p, d) => p.handleFormEvent({ event, detail: d, pageProps, formName: this.formName }), detail);
  }

  processKeyboardEvent(event: KeyboardEvent<HTMLInputElement>, detail: HpEventDetail, pageProps: PropsT): void {
    this.process(
      event,
      (p, d) => p.handleKeyboardEvent({ event, detail: d, pageProps, formName: this.formName }),
      detail
    );
  }

  private process(
    event: BaseSyntheticEvent,
    action: (p: EventTypeProcessor<PropsT>, detail: HpEventDetail) => void,
    detail: HpEventDetail
  ): void {
    recordElapsedTime(`Processing of "${event.type}" event`, () => {
      for (const { name, processor } of this.processors) {
        if (processor.canHandle(detail.type)) {
          recordElapsedTime(`${name} [${event.type}, ${detail.type}]`, () => action(processor, detail));
          break;
        }
      }

      if (this.debugMode) {
        logInfo(`Nobody is handling the '${detail.type}' event :-(`, HpDebugFlags.EventProcessor);
      }
    });
  }
}
