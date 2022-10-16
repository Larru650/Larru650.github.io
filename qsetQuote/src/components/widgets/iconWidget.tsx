import { HpIconTypes } from '@avantia/questionset-model';
import React from 'react';

export interface IconWidgetProps {
  icon: HpIconTypes;
  width?: number;
}

export function IconWidget({ icon, width }: IconWidgetProps): JSX.Element {
  return (
    <div className="icons-panel media-left">
      <i className={`aj aj-${icon} aj-fw aj-${width || 2}x`} aria-hidden="true" />
    </div>
  );
}
