import { HpStringLengthValidator } from '@avantia/form-validation';
import React from 'react';
import { ControlValueTypes, HpEventTypes } from '../../../interfaces';
import { StandardFormGroupWidget } from '../../widgets/standardFormGroupWidget';
import { BasicTextInputControl } from '../common/basicTextInputControl';
import { InputControlProps } from '../inputControl';

export interface TextInputControlProps extends InputControlProps {
  placeholder?: string;
  prefixText?: string;
  suffixText?: string;
  formatter?: {
    do?: (input: ControlValueTypes) => string;
    undo?: (input: ControlValueTypes, eventType: HpEventTypes) => string;
  };
}

export function TextInputControl({
  id,
  name,
  type,
  value,
  answerSource,
  onChange,
  onFocus,
  onBlur,
  disabled,
  errors,
  data,
  question,
  prefixText,
  suffixText,
  formatter,
  ui
}: TextInputControlProps): JSX.Element {
  const error = errors ? errors[id] : undefined;
  const { textAndStyle: dataTextAndStyle, validation } = data;
  const stringLengthValidator = validation.filter((v) => v.getType() === 'string-length')[0] as
    | HpStringLengthValidator
    | undefined;
  let maxLength: number | undefined;
  if (stringLengthValidator) {
    maxLength = stringLengthValidator.getProps().maxLength;
  }

  const textAndStyle = dataTextAndStyle.standard;
  const { questionText, width, placeholder } = textAndStyle;
  const { do: format, undo: unformat } = formatter || {};
  const control = (
    <BasicTextInputControl
      id={id}
      name={name}
      type={type}
      value={format ? format(value) : value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      placeholder={placeholder}
      eventDetail={{ type: 'standard', question, unformat }}
      maxLength={maxLength}
      width={width}
      prefixText={prefixText}
      suffixText={suffixText}
    />
  );

  return (
    <StandardFormGroupWidget
      id={id}
      labelText={questionText}
      control={control}
      error={error}
      controlType="text-input"
      answerSource={answerSource}
      helpInfo={question.data.helpInfo}
      onClick={onChange}
      helpInfoVisibility={ui.helpInfoVisibility}
    />
  );
}
