import React from 'react';
import { StandardFormGroupWidget } from '../../widgets/standardFormGroupWidget';
import { BasicDropDownListControl } from '../common/basicDropDownListControl';
import { InputControlProps } from '../inputControl';

export function DropDownListControl({
  id,
  name,
  value,
  answerSource,
  data,
  onClick,
  onChange,
  errors,
  question,
  ui
}: InputControlProps): JSX.Element {
  const textAndStyle = data.textAndStyle.standard;
  const error = errors ? errors[id] : undefined;
  const { questionText, sortItemsBy, placeholder } = textAndStyle;
  const control = (
    <BasicDropDownListControl
      id={id}
      name={name}
      data={data.lookup}
      value={value as string}
      onClick={onClick}
      eventDetail={{ type: 'standard', question }}
      placeholder={placeholder}
      sortItemsBy={sortItemsBy}
    />
  );

  return (
    <StandardFormGroupWidget
      id={id}
      labelText={questionText}
      error={error}
      control={control}
      answerSource={answerSource}
      controlType="dropdown"
      helpInfo={question.data.helpInfo}
      onClick={onChange}
      helpInfoVisibility={ui.helpInfoVisibility}
    />
  );
}
