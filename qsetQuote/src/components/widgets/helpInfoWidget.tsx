import { createControlId, HpHelpInfo } from '@avantia/questionset-model';
import React from 'react';
import { HpClientQuestion } from '../../interfaces';
import { SvgIcon } from '../formControls/icons/SvgIcon';
import { createMouseEvent, HpOnClickEvent } from '../formControls/inputControl';

export interface HelpInfoIconProps {
  onClick: HpOnClickEvent;
  id: string;
}

export interface HelpInfoWidgetProps {
  helpInfo: HpHelpInfo;
  helpInfoVisibility: boolean;
}

export function HelpInfoIcon({ onClick, id }: HelpInfoIconProps): JSX.Element {
  return (
    <span
      className="hp-help-text-icon"
      id={createControlId({ questionId: id })}
      onClick={createMouseEvent(onClick, {
        type: 'help-icon',
        question: ({ questionId: id } as unknown) as HpClientQuestion
      })}>
      <SvgIcon type="tooltip" size="auto" />
    </span>
  );
}

export function HelpInfoWidget({ helpInfo, helpInfoVisibility }: HelpInfoWidgetProps): JSX.Element {
  const { helpText, infoText } = helpInfo;
  return (
    <>
      {helpText && helpInfoVisibility && (
        <div className="hp-help-text" dangerouslySetInnerHTML={{ __html: helpText }}></div>
      )}
      {infoText && (
        <>
          <div className="hp-info-text-container">
            <SvgIcon type="tooltip" size="small" style={{ margin: '0 !important' }} />
            <div className="hp-info-text" dangerouslySetInnerHTML={{ __html: infoText }}></div>
          </div>
        </>
      )}
    </>
  );
}
