import { createControlId, HpControlWidth } from '@avantia/questionset-model';
import React, { CSSProperties } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { ControlValueTypes } from '../../../interfaces';
import { createFocusEvent, createFormEvent, HpEventDetail, HpOnFocusEvent, HpOnFormEvent } from '../inputControl';

export interface BasicTextInputControlProps {
  id: string;
  name: string | undefined;
  type: string | undefined;
  value: ControlValueTypes;
  placeholder: string | undefined;
  disabled: boolean | undefined;
  onChange: HpOnFormEvent;
  onFocus: HpOnFocusEvent;
  onBlur: HpOnFocusEvent;
  eventDetail: HpEventDetail;
  className?: string;
  maxLength?: number;
  style?: CSSProperties;
  width: HpControlWidth | undefined;
  prefixText?: string;
  suffixText?: string;
}

export function BasicTextInputControl({
  id,
  name,
  type,
  value,
  placeholder,
  disabled,
  onChange,
  onFocus,
  onBlur,
  eventDetail,
  className,
  maxLength,
  style,
  prefixText,
  suffixText
}: BasicTextInputControlProps): JSX.Element {
  const widthClass = ''; // createClassFromControlWidth(width);
  const changeEvent = createFormEvent(onChange, eventDetail);
  let textControl = (
    <FormControl
      id={createControlId({ questionId: id })}
      name={name || id}
      onChange={changeEvent}
      onBlur={createFocusEvent(onBlur, eventDetail, changeEvent)}
      onFocus={createFocusEvent(onFocus, eventDetail, changeEvent)}
      disabled={disabled}
      type={type || 'text'}
      value={value as string}
      placeholder={placeholder}
      maxLength={maxLength}
      style={style}
      className={`${className || ''} animated ${widthClass}`.trimLeft()}
    />
  );

  if (prefixText || suffixText) {
    textControl = (
      <InputGroup className="mb-3">
        {prefixText && (
          <InputGroup.Prepend>
            <InputGroup.Text>{prefixText}</InputGroup.Text>
          </InputGroup.Prepend>
        )}
        {textControl}
        {suffixText && (
          <InputGroup.Append>
            <InputGroup.Text>{suffixText}</InputGroup.Text>
          </InputGroup.Append>
        )}
      </InputGroup>
    );
  }

  return textControl;
}
