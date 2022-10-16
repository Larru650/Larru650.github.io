import { createControlId } from '@avantia/questionset-model';
import React from 'react';
import { CommonButtonControlProps, createMouseEvent } from '../inputControl';

export function BasicButtonControl({
  id,
  name,
  onClick,
  disabled,
  data,
  question
}: CommonButtonControlProps): JSX.Element {
  const { buttonStyle, buttonText, type, style } = data.textAndStyle.standard;
  return (
    <button
      id={createControlId({ questionId: id })}
      name={name || id}
      onClick={createMouseEvent(onClick, { type: 'button-action', question })}
      disabled={disabled === true}
      type={type || 'button'}
      style={style}
      className={`btn btn-${buttonStyle || 'primary'} animated`}>
      {buttonText || '<No Text>'}
    </button>
  );
}
