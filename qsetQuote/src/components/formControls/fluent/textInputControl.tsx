import { createControlId, HpFluentInputTextAndStyle } from '@avantia/questionset-model';
import React from 'react';
import { Button, InputGroup } from 'react-bootstrap';
import { FluentFormGroupWidget } from '../../widgets/fluentFormGroupWidget';
import { BasicTextInputControl } from '../common/basicTextInputControl';
import { createMouseEvent, InputControlProps } from '../inputControl';
import { compileQuestion } from './utilities';

export interface TextInputControlProps extends InputControlProps {
  placeholder?: string;
}

export function TextInputControl({
  id,
  name,
  type,
  value,
  answerSource,
  placeholder,
  disabled,
  onClick,
  onChange,
  onFocus,
  onBlur,
  errors,
  data,
  ui,
  question
}: TextInputControlProps): JSX.Element {
  const errorText = errors[id];
  const hasError = !!errorText;
  const { questionText, width } = data.textAndStyle.fluent as HpFluentInputTextAndStyle;
  const isEditing = ui.isEditing;
  const editControl = (
    <InputGroup className="mb-3" style={{ display: 'inline' }}>
      <BasicTextInputControl
        id={createControlId({ questionId: id, key: 'input', options: { noPrefix: true } })}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        eventDetail={{ type: 'fluent-change', question }}
        className={`fluent-input ${isEditing ? '' : 'fluent-hidden'} ${hasError ? 'fluent-error' : ''}`}
        width={width}
      />
      <InputGroup.Append className={`fluent-input ${isEditing ? '' : 'fluent-hidden'}`}>
        <Button
          id={createControlId({ questionId: id, key: 'ok' })}
          variant="success"
          disabled={hasError}
          onClick={createMouseEvent(onClick, { type: 'fluent-ok', question })}>
          OK
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );

  const control = compileQuestion({
    questionText,
    answerText: value as string,
    id: createControlId({ questionId: id }),
    onClick: createMouseEvent(onClick, { type: 'fluent-toggle', question }),
    editControl,
    className: `fluent-input ${isEditing ? 'fluent-hidden' : ''}`
  });

  return (
    <FluentFormGroupWidget
      id={id}
      question={control}
      error={errorText}
      controlType="text-input"
      answerSource={answerSource}
    />
  );
}
