import React from 'react';
import { CommonGroupControlProps } from '../inputControl';

export type SectionControlFunction = (props: CommonGroupControlProps) => JSX.Element;

export function SectionControl({ id, label, controls, index }: CommonGroupControlProps): JSX.Element {
  return (
    <div id={id} className={`av-card av-card-child hp-section${index !== undefined ? ` hp-group-${index}` : ''}`}>
      <h3>{label}</h3>
      <div>{controls}</div>
    </div>
  );
}
