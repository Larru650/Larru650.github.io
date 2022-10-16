import React, { ReactElement } from 'react';

export interface SpacerWidgetProps {
  height?: number;
}

export function SpacerWidget({ height }: SpacerWidgetProps): ReactElement {
  return (
    <div
      style={{
        paddingTop: `${height || 0.5}rem`,
        boxSizing: 'content-box'
      }}></div>
  );
}
