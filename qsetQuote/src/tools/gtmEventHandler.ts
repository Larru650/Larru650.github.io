import { HpDebugFlags, logInfo } from '@avantia/questionset-model';
import jQuery from 'jquery';
import { TriggerFieldEventProps } from '../actions/eventActions';

export interface GtmData {
  virtualPage?: string;
  event?: string;
  qinteractiontype?: string;
  qdatalocator?: string;
  qvalue?: string;
}

declare global {
  interface Window {
    dataLayer: GtmData[];
    [key: string]: any;
  }
}

function pushDataToGtm(gtmData: GtmData): void {
  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  window.dataLayer.push(gtmData);
}

class GtmEventHandler {
  private active: boolean;
  constructor() {
    this.active = false;
    jQuery(window).on('hp-field-change' as any, (event: Event, data: TriggerFieldEventProps) => {
      if (this.active) {
        pushDataToGtm({
          event: 'qinteraction',
          qinteractiontype: data.eventType,
          qdatalocator: data.question.gtmTag,
          qvalue: data.value || ''
        });

        // This is here to show how the events can be used.
        // It should not be here in production.
        logInfo('input event: ' + JSON.stringify({ timeStamp: event.timeStamp, ...data }, null, 2), HpDebugFlags.Gtm);
      }
    });
    jQuery(window).on('hp-navigation-change' as any, (event: Event, nextSection: string) => {
      if (this.active) {
        pushDataToGtm({
          event: 'virtualpageview',
          virtualPage: nextSection
        });

        // This is here to show how the events can be used.
        // It should not be here in production.
        logInfo(
          'input event: ' + JSON.stringify({ timeStamp: event.timeStamp, nextSection }, null, 2),
          HpDebugFlags.Gtm
        );
      }
    });
  }

  public start(): void {
    this.active = true;
  }
}

export function startGtmEventHandler(): void {
  new GtmEventHandler().start();
}
