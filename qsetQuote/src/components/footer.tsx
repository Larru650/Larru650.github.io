import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import { getConfig } from '../config/configuration';
import './footer.scss';
import { ExternalLink } from './formControls/common/externalLink';
import { TrustBox } from './formControls/common/trustBox';

const releaseVersion = getConfig().releaseVersion;

export function Footer(): JSX.Element {
  return (
    <Switch>
      <Route component={FooterComp} />
    </Switch>
  );
}

function FooterComp(): JSX.Element {
  const spacer = <>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</>;
  return (
    <footer className="hp-footer container">
      <Row>
        <Col xs={12} className="trustpilot">
          <TrustBox />
        </Col>
      </Row>
      <Row>
        <Col xs={9} className="footer-text">
          <p>
            HomeProtect is a registered trademark and trading style of Avantia Insurance Ltd which is authorised and
            regulated by the Financial Conduct Authority (FS Register Number 304432). Home Insurance is underwritten by
            AXA Insurance.
          </p>
          <p>
            Copyright &copy; Avantia Insurance Ltd {new Date().getFullYear()}
            {spacer}
            <ExternalLink href="https://www.avantiagroup.co.uk" />
            {spacer}
            {releaseVersion}
          </p>
          <ul className="hp-footer-links">
            {[
              { text: 'Legal', url: 'legal-terms-of-use' },
              { text: 'Privacy policy', url: 'security-privacy' },
              { text: 'Cookie policy', url: 'cookie-policy' }
            ].map(({ text, url }, ix) => {
              return (
                <li key={text}>
                  {ix > 0 ? spacer : null}
                  <ExternalLink href={`https://www.homeprotect.co.uk/${url}`} text={text} />
                </li>
              );
            })}
          </ul>
        </Col>
        <Col xs={3} className="safe-hands text-right">
          <h3>You&apos;re in safe hands</h3>
          <div className="safe-hands-logo">
            <div id="DigiCertClickID_GdvjsEKx" data-language="en">
              <a href="https://www.digicert.com/ev-multi-domain-ssl.htm"></a>
            </div>
          </div>
        </Col>
      </Row>
    </footer>
  );
}
