import React, { CSSProperties } from 'react';

export interface ImageWidgetProps {
  image: string;
  altText: string;
  className?: string;
  style?: CSSProperties;
}

export function ImageWidget({ image, altText, style, className }: ImageWidgetProps): JSX.Element {
  const imageSource = image ? require(`../../assets/images/${image}`) : '';
  return (
    <img
      className={`hp-image ${className || 'hp-img-thumbnail'}`}
      style={style}
      src={imageSource}
      alt={altText}
      title={altText}
    />
  );
}
