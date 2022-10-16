import React from 'react';
import { CommonGroupControlProps } from '../inputControl';

export function ButtonGroupControl({ id, controls }: CommonGroupControlProps): JSX.Element {
  return (
    <div id={`${id}-section`} className="btn-group">
      {controls}
    </div>
  );
}
