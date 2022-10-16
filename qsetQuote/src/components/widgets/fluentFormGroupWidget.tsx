import { createQuestionPanelId, ensureIdDoesNotStartWithPrefix } from '@avantia/questionset-model';
import React from 'react';
import { AnswerSource } from '../../interfaces';
import { ErrorWidget } from './errorWidget';
import { FormGroupClassTypes } from './standardFormGroupWidget';

export interface FluentFormGroupProps {
  id: string;
  question: string | JSX.Element;
  error: string | undefined;
  controlType: FormGroupClassTypes;
  answerSource: AnswerSource;
}

export function FluentFormGroupWidget({
  id,
  question,
  error,
  controlType,
  answerSource
}: FluentFormGroupProps): JSX.Element {
  ensureIdDoesNotStartWithPrefix(id);

  return (
    <div
      id={createQuestionPanelId(id)}
      className={`hp-fluent hp-${controlType} hp-answer-${answerSource} ${error ? 'av-input-error' : ''}`}>
      <ErrorWidget error={error} />
      <div className="av-field-section">{question}</div>
    </div>
  );
}
