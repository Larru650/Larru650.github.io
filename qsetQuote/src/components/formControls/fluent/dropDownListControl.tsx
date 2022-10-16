import { hasOwnProperty } from '@avantia/client-and-server-utilities';
import { HpFluentInputTextAndStyle } from '@avantia/questionset-model';
import React from 'react';
import { firstDefined } from '../../../tools/utilities';
import { FluentFormGroupWidget } from '../../widgets/fluentFormGroupWidget';
import { BasicDropDownListControl } from '../common/basicDropDownListControl';
import { createMouseEvent, InputControlProps } from '../inputControl';
import { compileQuestion } from './utilities';

export function DropDownListControl({
  id,
  name,
  value: answerValue,
  answerSource,
  data,
  onClick,
  errors,
  ui,
  question
}: InputControlProps): JSX.Element {
  const value = answerValue as string;
  const errorText = errors[id];
  const hasError = !!errorText;
  const { textAndStyle: dataTextAndStyle, lookup } = data;
  const { questionText } = dataTextAndStyle.fluent as HpFluentInputTextAndStyle;
  const isEditing = ui ? ui.isEditing : false;
  const classAnswer = `fluent-input ${isEditing ? 'fluent-hidden' : ''}`;
  const classEditor = `fluent-input ${isEditing ? '' : 'fluent-hidden'}`;
  const classError = hasError ? ' fluent-error' : '';

  const editControl = (
    <BasicDropDownListControl
      id={id}
      name={name}
      data={lookup}
      value={value}
      onClick={onClick}
      eventDetail={{ type: 'fluent-click', question }}
      className={classEditor + classError}
      textProperty="fluentText"
      sortItemsBy={undefined}
    />
  );

  const item = lookup[value];
  if (!item && value && !hasOwnProperty(lookup, value)) {
    console.error(`There is no lookup for value "${value}" for question "${id}".`);
  }

  const answerText = item ? firstDefined(item.fluentText, item.text, value) : value;
  const control = compileQuestion({
    id,
    questionText,
    answerText: answerText || '',
    onClick: createMouseEvent(onClick, { type: 'fluent-toggle', question }),
    className: classAnswer,
    editControl
  });

  return (
    <FluentFormGroupWidget
      id={id}
      question={control}
      error={errorText}
      controlType="dropdown"
      answerSource={answerSource}
    />
  );
}
