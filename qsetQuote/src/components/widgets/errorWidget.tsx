import React from 'react';

export interface ErrorWidgetProps {
  error: string | undefined;
}

export function ErrorWidget({ error }: ErrorWidgetProps): JSX.Element | null {
  if (error) {
    return (
      <div className="av-field-messages">
        <div className="av-error-message">{error}</div>
      </div>
    );
  }

  return null;
}
