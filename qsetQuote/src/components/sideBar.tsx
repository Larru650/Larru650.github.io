import jquery from 'jquery';
import React, { BaseSyntheticEvent } from 'react';
import { ExternalLink } from './formControls/common/externalLink';
import './sideBar.scss';

export function SideBar(): JSX.Element {
  const whyChooseUs: ListItem[] = [
    {
      text: 'Rated Excellent on TrustPilot',
      detail: (
        <>
          HomeProtect has been rated <strong>Excellent</strong> on Trustpilot from over 5,000 reviews. Checkout some of
          our latest reviews at the bottom of this page.
        </>
      )
    },
    {
      text: 'Trusted 24/7 claims service',
      detail: (
        <>
          Our claims team is managed by leading insurers, such as AXA or Ageas. So you can feel assured you will get the
          support you need when you need it the most.
        </>
      )
    },
    {
      text: 'Friendly staff, ready to help',
      detail: (
        <>
          24/7 claims helpline
          <br />
          24/7 home emergency helpline
          <br />
          24/7 legal advice helpline
        </>
      )
    },
    {
      text: '24/7 emergency helpline',
      detail: (
        <>
          Our home emergency helpline is there when you need it the most. Up to £500 per call-out for parts, materials
          and labour included as standard. Upgrade available.
        </>
      )
    },
    {
      text: '24/7 legal helpline',
      detail: (
        <>
          Our legal advice helpline can help with legal issues affecting your immediate family (including tax advice).
          Up to £50,000 for legal fees relating to your property or contract disputes included as standard. Upgrade
          available.
        </>
      )
    }
  ];

  const haveQuestions: ListItem[] = [
    {
      text: 'Call us',
      className: 'phone-us',
      detail: (
        <>
          <h3>0330 660 1000</h3> Mon-Fri 9am-8pm &amp; Sat 9am-1pm (Costs the same to call as a normal landline, even
          from mobiles)
        </>
      )
    }
  ];

  return (
    <div className="sidebar">
      <div className="av-card av-card-child">
        <h3>Why choose us...</h3>
        <ul className="av-list-check">{whyChooseUs.map(createListItem)}</ul>
        <div style={{ textAlign: 'right', width: '100%' }}>
          <img src="/assets/svg/trustpilot-small.svg" alt="TrustPilot score" />
        </div>
      </div>
      <div className="av-card av-card-child">
        <h3>Have a question?</h3>
        <ul className="av-list-check">
          <li className="faq">
            <ExternalLink href="https://www.homeprotect.co.uk/faqs" text="Browse our FAQs" />
          </li>
          <li className="policy-wording">
            <ExternalLink href="https://www.homeprotect.co.uk/policy-booklet" text="Home Insurance policy wording" />
          </li>
          {haveQuestions.map(createListItem)}
        </ul>
      </div>
    </div>
  );
}

function createListItem({ text, detail, className }: ListItem, index: number): JSX.Element[] {
  const toggle = (e: BaseSyntheticEvent): void => {
    const div = jquery(e.target)
      .closest('li')
      .next('div');
    div.css({ display: jquery(div).is(':visible') ? 'none' : 'block' });
  };

  return [
    <li key={'li-' + index} onClick={toggle} className={className}>
      <span>{text}</span>
    </li>,
    <div key={'li-detail-' + index} className="av-card">
      {detail}
    </div>
  ];
}

interface ListItem {
  text: string;
  className?: string;
  detail: JSX.Element;
}
