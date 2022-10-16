import { createControlId } from '@avantia/questionset-model';
import React from 'react';
import { ControlValueTypes } from '../../../interfaces';

export interface BasicReadOnlyTextControlProps {
  id: string;
  value: ControlValueTypes;
}

export function BasicReadOnlyTextControl({ id, value }: BasicReadOnlyTextControlProps): JSX.Element {
  return <span id={createControlId({ questionId: id })}>{value as string}</span>;
}
