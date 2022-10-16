import React from 'react';
import { ExternalLink } from './externalLink';

export function TrustBox(): JSX.Element {
  // Create a reference to the <div> element which will represent the TrustBox
  const ref = React.useRef(null);

  React.useEffect(() => {
    // If window.Trustpilot is available it means that we need to load the TrustBox from our ref.
    // If it's not, it means the script you pasted into <head /> isn't loaded just yet.
    // When it is, it will automatically load the TrustBox.
    const trustpilot = (window as any).Trustpilot;
    const element = ref.current;
    if (trustpilot && element) {
      trustpilot.loadFromElement(element, true);
    }
  }, []);

  return (
    <div
      ref={ref}
      id="trustbox"
      className="trustpilot-widget"
      data-locale="en-GB"
      data-template-id="53aa8912dec7e10d38f59f36"
      data-businessunit-id="4f1349ff000064000512477e"
      data-style-height="140px"
      data-style-width="100%"
      data-theme="dark"
      data-stars="4,5">
      <ExternalLink href="https://www.trustpilot.com/review/homeprotect.co.uk" text="Trustpilot" />
    </div>
  );
}
