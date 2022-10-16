import { numberPrefixedStringSorter } from '@avantia/client-and-server-utilities';
import { createControlId } from '@avantia/questionset-model';
import lodash from 'lodash';
import React, { CSSProperties } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { HpClientQuestionLookupItemMap } from '../../../interfaces';
import { createMouseEvent, HpEventDetail, HpOnMouseEvent } from '../inputControl';

export interface BasicDropDownListControlProps {
  id: string;
  name: string | undefined;
  className?: string;
  value: string;
  data: HpClientQuestionLookupItemMap;
  placeholder?: string;
  onClick: HpOnMouseEvent;
  title?: string;
  eventDetail: HpEventDetail;
  style?: CSSProperties;
  textProperty?: string;
  sortItemsBy: string | undefined;
}

export function BasicDropDownListControl({
  id,
  name,
  value,
  data,
  placeholder,
  onClick,
  title,
  eventDetail,
  className,
  style,
  textProperty,
  sortItemsBy
}: BasicDropDownListControlProps): JSX.Element {
  if (!data) {
    throw new Error(`There is no lookup data for question ${id}.`);
  }

  let items: HpOption[] = [];
  lodash.keys(data).forEach(key => {
    const option = data[key];
    const optionText = option === null ? key : (textProperty ? option[textProperty] : undefined) || option.text || key;
    if (key === value) {
      title = optionText;
    }

    const itemKey = createControlId({ questionId: id, key });
    items.push({ itemKey, optionText });
  });

  if (sortItemsBy === 'numberPrefixedStringSorter') {
    items = items.sort((a, b) => numberPrefixedStringSorter(a.optionText, b.optionText));
  }

  const options = items.map(({ itemKey, optionText }) => {
    return (
      <Dropdown.Item key={itemKey} as="button" id={itemKey} onClick={createMouseEvent(onClick, eventDetail) as any}>
        {optionText}
      </Dropdown.Item>
    );
  });

  return (
    <DropdownButton
      id={createControlId({ questionId: id })}
      {...{ name: name || id }}
      title={title || placeholder || 'Select a value'}
      style={style}
      className={className}>
      {options}
    </DropdownButton>
  );
}

interface HpOption {
  itemKey: string;
  optionText: string;
}
