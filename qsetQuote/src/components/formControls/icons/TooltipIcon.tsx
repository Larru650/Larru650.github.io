import React, { CSSProperties } from 'react';

export function TooltipIcon({ className, style }: { className?: string; style?: CSSProperties }): JSX.Element {
  const idPrefix = Math.floor(Math.random() * 9999);
  return (
    <svg className={className} style={style} viewBox="0 0 48 48">
      <defs>
        <filter id={`${idPrefix}-shadow`} x="0" y="0" width="58" height="58" filterUnits="userSpaceOnUse">
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feFlood floodOpacity="0.161" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <clipPath id={`${idPrefix}-clip-left`}>
          <rect x="0" y="0" width="19" height="38" />
        </clipPath>
        <clipPath id={`${idPrefix}-clip-right`}>
          <rect x="20" y="0" width="19" height="38" />
        </clipPath>
      </defs>
      <g id={`${idPrefix}-icon-tooltip`} transform="translate(4 0)">
        <g transform="matrix(1, 0, 0, 1, -9, -6)" filter={`url(#${idPrefix}-shadow)`}>
          <g id={`${idPrefix}-badge`} transform="translate(9 6)" fill="#36a549" stroke="#fff" strokeWidth="2">
            <circle cx="20" cy="20" r="20" stroke="none" />
            <circle cx="20" cy="20" r="19" fill="none" />
          </g>
        </g>
        <circle
          className="av-dark-lhs"
          cx="20"
          cy="20"
          r="18"
          clipPath={`url(#${idPrefix}-clip-left)`}
          fill="#297435"
        />
        <circle
          className="av-dark-rhs"
          cx="20"
          cy="20"
          r="18"
          clipPath={`url(#${idPrefix}-clip-right)`}
          fill="#297435"
        />
        <text
          id={`${idPrefix}-text`}
          data-name="?"
          transform="translate(13 31)"
          fill="#fff"
          fontSize="30"
          fontFamily="Roboto-Black">
          <tspan x="0" y="0">
            ?
          </tspan>
        </text>
      </g>
    </svg>
  );
}
