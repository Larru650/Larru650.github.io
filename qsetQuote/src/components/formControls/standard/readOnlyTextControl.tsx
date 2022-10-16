import React from 'react';
import { StandardFormGroupWidget } from '../../widgets/standardFormGroupWidget';
import { BasicReadOnlyTextControl } from '../common/readOnlyTextControl';
import { InputControlProps } from '../inputControl';

export function ReadOnlyTextControl({ id, value, data, answerSource }: InputControlProps): JSX.Element {
  const textAndStyle = data.textAndStyle.standard;
  const { questionText } = textAndStyle;
  const control = <BasicReadOnlyTextControl id={id} value={value} />;
  return (
    <StandardFormGroupWidget
      id={id}
      labelText={questionText}
      control={control}
      error={undefined}
      answerSource={answerSource}
      controlType="read-only-text"
    />
  );
}
