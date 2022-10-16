import jQuery from 'jquery';
import { HpClientQuestion, HpEventTypes } from '../interfaces';

export interface TriggerFieldEventProps {
  key: string;
  question: HpClientQuestion;
  eventType: HpEventTypes;
  value: string | null;
}

export function triggerFieldChangeEvent({ key, eventType, value, question }: TriggerFieldEventProps): void {
  jQuery(window).trigger('hp-field-change', { key, eventType, value, question });
}

export function triggerNavigationChangeEvent(sectionName: string): void {
  jQuery(window).trigger('hp-navigation-change', sectionName);
}
