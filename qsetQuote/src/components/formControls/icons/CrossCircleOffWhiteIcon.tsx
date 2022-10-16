import React, { CSSProperties } from 'react';

export function CrossCircleOffWhiteIcon({
  className,
  style
}: {
  className?: string;
  style?: CSSProperties;
}): JSX.Element {
  const idPrefix = Math.floor(Math.random() * 9999);
  return (
    <svg className={className} style={style} viewBox="0 0 512 512">
      <defs>
        <mask id={`${idPrefix}-clip-cross`}>
          <rect x="0" y="0" height="512" width="512" fill="white" />
          <line x1="256" y1="256" x2="356" y2="356" strokeLinecap="round" stroke="black" strokeWidth="50" />
          <line x1="256" y1="256" x2="156" y2="356" strokeLinecap="round" stroke="black" strokeWidth="50" />
          <line x1="256" y1="256" x2="156" y2="156" strokeLinecap="round" stroke="black" strokeWidth="50" />
          <line x1="256" y1="256" x2="356" y2="156" strokeLinecap="round" stroke="black" strokeWidth="50" />
        </mask>
      </defs>
      <g>
        <circle cx="256" cy="256" r="256" mask={`url(#${idPrefix}-clip-cross)`} fill="rgb(240, 240, 218)" />
      </g>
    </svg>
  );
}
