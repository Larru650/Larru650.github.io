import { createControlId } from '@avantia/questionset-model';
import lodash from 'lodash';
import React from 'react';
import { getDisplayTextFromLookupItem } from '../../../tools/listSearchUtility';
import { IconWidget, ImageWidget } from '../../widgets/index';
import { FormGroupClassTypes, StandardFormGroupWidget } from '../../widgets/standardFormGroupWidget';
import { createStandardFormEvent, createStandardMouseEvent, InputControlProps } from '../inputControl';

export interface CommonImageButtonListControlProps extends InputControlProps {
  title?: string;
  listType: 'CheckBox' | 'Radio';
}

export function CommonImageButtonListControl({
  id,
  listType,
  value,
  answerSource,
  question,
  data,
  title,
  onChange,
  onMouseOver,
  onMouseEnter,
  onMouseLeave,
  errors,
  ui
}: CommonImageButtonListControlProps): JSX.Element {
  const { lookup } = data;
  const listTypeLower = listType.toLowerCase();
  const textAndStyle = data.textAndStyle.standard;
  const error = errors ? errors[id] : undefined;
  const options: JSX.Element[] = [];
  const { questionText } = textAndStyle;
  const mouseOverEvent = createStandardMouseEvent(onMouseOver, question);
  const mouseEnterEvent = createStandardMouseEvent(onMouseEnter, question);
  const mouseLeaveEvent = createStandardMouseEvent(onMouseLeave, question);
  const changeEvent = createStandardFormEvent(onChange, question);

  title = title || 'Select a value';
  const values = lodash.isArray(value) ? (value as string[]) : [value];

  if (lookup) {
    lodash.forOwn(lookup, (option, key) => {
      const { image, icon, iconWidth } = option || {};
      const itemKey = createControlId({ questionId: id, key });
      const checked = values.indexOf(key) >= 0;
      const optionText = getDisplayTextFromLookupItem(option, key);
      if (key === value) {
        title = optionText;
      }

      let imageWidget: JSX.Element | undefined;
      if (image) {
        imageWidget = <ImageWidget image={image} altText={optionText || key} />;
      } else if (icon) {
        imageWidget = <IconWidget icon={icon} width={iconWidth || 3} />;
      } else {
        console.warn(
          `The Image${listType}ButtonListControl with id ${id} has no specified image or icon for its "${key}" option.`
        );
      }

      const item = (
        <label
          key={itemKey}
          id={itemKey}
          className={checked ? 'hp-checked' : undefined}
          onMouseOver={mouseOverEvent}
          onMouseEnter={mouseEnterEvent}
          onMouseLeave={mouseLeaveEvent}>
          <input
            type={listTypeLower}
            name={optionText}
            title={title}
            value={key}
            id={createControlId({ questionId: id })}
            checked={checked}
            onChange={changeEvent}
          />
          {imageWidget}
          <span>{optionText}</span>
        </label>
      );
      options.push(item);
    });
  }

  return (
    <StandardFormGroupWidget
      id={id}
      labelText={questionText}
      control={options}
      error={error}
      controlType={`image-${listTypeLower}-button-list` as FormGroupClassTypes}
      answerSource={answerSource}
      helpInfo={question.data.helpInfo}
      onClick={onChange}
      helpInfoVisibility={ui.helpInfoVisibility}
    />
  );
}
