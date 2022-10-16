import React from 'react';

export function ExternalLink({ text, href }: { text?: string; href: string }): JSX.Element {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener">
      {text || href}
    </a>
  );
}
