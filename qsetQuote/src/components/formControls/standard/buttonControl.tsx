import React from 'react';
import { StandardFormGroupWidget } from '../../widgets/standardFormGroupWidget';
import { BasicButtonControl } from '../common/basicButtonControl';
import { CommonButtonControlProps } from '../inputControl';

export function ButtonControl({
  id,
  name,
  onClick,
  disabled,
  data,
  question,
  errors
}: CommonButtonControlProps): JSX.Element {
  return (
    <StandardFormGroupWidget
      id={id}
      control={
        <BasicButtonControl
          id={id}
          name={name}
          onClick={onClick}
          disabled={disabled}
          data={data}
          question={question}
          errors={errors}
        />
      }
      controlType="button"
      error={errors[id]}
      labelText={undefined}
      answerSource="default"
      errorPosition="bottom"
    />
  );
}
