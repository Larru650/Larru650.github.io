import React from 'react';

type WelcomeMessageProps = {
  icon?: string;
  welcomeHeader: string;
  welcomeMessage: string;
};

export function WelcomeMessage({ icon, welcomeHeader, welcomeMessage }: WelcomeMessageProps): JSX.Element {
  return (
    <div className="row">
      <article className="welcome-card col-12">
        <h1>
          <i className={`aj aj-${icon} aj-fw aj-2x icon-middle`}></i>
          {welcomeHeader}
        </h1>
        <div>
          <p>
            <span className="sessioncamhidetext">{welcomeMessage}</span>
          </p>
        </div>
      </article>
    </div>
  );
}
