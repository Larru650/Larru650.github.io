import React from 'react';
import { StandardFormGroupWidget } from '../../widgets/standardFormGroupWidget';
import { BasicSwitchControl } from '../common/basicSwitchControl';
import { InputControlProps } from '../inputControl';

export type SwitchControlProps = InputControlProps;

export function SwitchControl({
  id,
  value,
  answerSource,
  data,
  onClick,
  onChange,
  errors,
  question,
  ui
}: SwitchControlProps): JSX.Element {
  const textAndStyle = data.textAndStyle.standard;
  const error = errors ? errors[id] : undefined;
  const questionText = textAndStyle.questionText;

  const switchControl = (
    <BasicSwitchControl
      id={id}
      data={data.lookup}
      value={value as string}
      onClick={onClick}
      eventDetail={{ type: 'standard', question }}
    />
  );

  return (
    <StandardFormGroupWidget
      id={id}
      labelText={questionText}
      error={error}
      control={switchControl}
      answerSource={answerSource}
      controlType="switch"
      helpInfo={question.data.helpInfo}
      onClick={onChange}
      helpInfoVisibility={ui.helpInfoVisibility}
    />
  );
}
