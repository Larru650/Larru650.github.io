import { createControlId, HpButtonStyles } from '@avantia/questionset-model';
import React, { CSSProperties } from 'react';
import { firstDefined } from '../../../tools/utilities';
import { StandardFormGroupWidget } from '../../widgets/standardFormGroupWidget';
import { createEqualityComparer, iterateLookupMap } from '../controlUtilities';
import { createStandardMouseEvent, InputControlProps } from '../inputControl';

export interface ButtonListControlProps extends InputControlProps {
  dataOn?: string;
  dataOff?: string;
}

export function ButtonListControl({
  id,
  name,
  value,
  answerSource,
  data,
  onClick,
  onChange,
  disabled,
  dataType,
  errors,
  question,
  ui
}: ButtonListControlProps): JSX.Element {
  const { isMultiSelect } = question;
  const { lookup } = data;
  const textAndStyle = data.textAndStyle.standard;
  const error = errors ? errors[id] : undefined;
  const options: JSX.Element[] = [];
  const { questionText, layout } = textAndStyle;
  const isSelected = createEqualityComparer(dataType, isMultiSelect, id);
  let style: CSSProperties;

  if (lookup) {
    iterateLookupMap(lookup, ui, (option, key) => {
      const optionText = firstDefined(option ? option.text : null, key);
      const itemKey = createControlId({ questionId: id, key });
      const buttonStyle: HpButtonStyles = isSelected(key, value) ? 'primary' : 'outline-primary';
      const className = `animated btn btn-${buttonStyle} animated pulse`;
      const button = (
        <button
          key={itemKey}
          id={itemKey}
          name={name || key}
          onClick={createStandardMouseEvent(onClick, question)}
          disabled={disabled === true}
          type="button"
          style={style}
          className={className}>
          {optionText}
        </button>
      );

      options.push(button);
    });
  }

  let groupClassName: string;
  switch (layout) {
    case 'vertical':
      groupClassName = 'btn-group-vertical';
      break;
    case 'float':
      groupClassName = 'hp-float';
      break;
    default:
      groupClassName = 'btn-toolbar';
      break;
  }

  return (
    <StandardFormGroupWidget
      id={id}
      labelText={questionText}
      control={
        <div className={groupClassName} role="group">
          {options}
        </div>
      }
      error={error}
      answerSource={answerSource}
      controlType="radio-button-list"
      helpInfo={question.data.helpInfo}
      onClick={onChange}
      helpInfoVisibility={ui.helpInfoVisibility}
    />
  );
}
