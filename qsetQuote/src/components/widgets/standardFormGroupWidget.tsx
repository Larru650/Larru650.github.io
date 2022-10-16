import { createQuestionPanelId, ensureIdDoesNotStartWithPrefix, HpHelpInfo } from '@avantia/questionset-model';
import React from 'react';
import { Form } from 'react-bootstrap';
import { ErrorWidget } from '.';
import { AnswerSource } from '../../interfaces';
import { HpOnClickEvent } from '../formControls/inputControl';
import { HelpInfoIcon, HelpInfoWidget } from './helpInfoWidget';

export type FormGroupClassTypes =
  | 'button'
  | 'dropdown'
  | 'image-checkbox-button-list'
  | 'image-radio-button-list'
  | 'radio-button-list'
  | 'switch'
  | 'text-input'
  | 'auto-complete'
  | 'date-picker'
  | 'date-drop-down'
  | 'read-only-text';

export interface HpFormGroupProps {
  id: string;
  labelText: string | undefined;
  error: string | undefined;
  control: JSX.Element | JSX.Element[];
  controlType: FormGroupClassTypes;
  answerSource: AnswerSource;
  errorPosition?: 'bottom' | 'top' | undefined;
  helpInfo?: HpHelpInfo;
  onClick?: HpOnClickEvent;
  helpInfoVisibility?: boolean;
}

export function StandardFormGroupWidget({
  id,
  labelText,
  error,
  control,
  controlType,
  answerSource,
  errorPosition,
  helpInfo,
  onClick,
  helpInfoVisibility
}: HpFormGroupProps): JSX.Element {
  ensureIdDoesNotStartWithPrefix(id);
  const { helpText } = helpInfo || {};

  return (
    <Form.Group
      id={createQuestionPanelId(id)}
      className={`hp-standard hp-${controlType} hp-answer-${answerSource} ${error ? 'av-input-error' : ''}`}>
      {errorPosition !== 'bottom' && <ErrorWidget error={error} />}
      {labelText && (
        <Form.Label>
          {labelText} {onClick && helpText && <HelpInfoIcon onClick={onClick} id={id}></HelpInfoIcon>}
        </Form.Label>
      )}
      <div className="av-field-section">{control}</div>
      {errorPosition === 'bottom' && <ErrorWidget error={error} />}
      {helpInfo && <HelpInfoWidget helpInfo={helpInfo} helpInfoVisibility={!!helpInfoVisibility}></HelpInfoWidget>}
    </Form.Group>
  );
}
