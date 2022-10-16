import { HpControlWidth, HpExplicitControlWidth } from '@avantia/questionset-model';
import lodash from 'lodash';

export const fullWidthControlWidth: HpExplicitControlWidth = {
  xs: 12,
  sm: 12,
  md: 12
};

export const largeControlWidth: HpExplicitControlWidth = {
  xs: 12,
  sm: 8,
  md: 6
};

export const mediumControlWidth: HpExplicitControlWidth = {
  xs: 8,
  sm: 6,
  md: 4
};

export const smallControlWidth: HpExplicitControlWidth = {
  xs: 4,
  sm: 3,
  md: 2
};

export const extraSmallControlWidth: HpExplicitControlWidth = {
  xs: 2,
  sm: 2,
  md: 1
};

export function createClassFromControlWidth(width?: HpControlWidth): string {
  if (lodash.isArray(width)) {
    width = { xs: width[0], sm: width[1], md: width[2], lg: width[3] };
  } else {
    switch (width) {
      case 'full-width':
        width = fullWidthControlWidth;
        break;
      case undefined:
      case 'large':
        width = largeControlWidth;
        break;
      case 'medium':
        width = mediumControlWidth;
        break;
      case 'small':
        width = smallControlWidth;
        break;
      case 'x-small':
        width = extraSmallControlWidth;
        break;
    }
  }

  const { xs, sm, md, lg } = width;
  return `col-xs-${xs} col-sm-${sm} col-md-${md}${lg === undefined ? '' : ` col-lg-${lg}`}`;
}

export function createClassFromControlOffset(width: HpExplicitControlWidth): string {
  const { xs, sm, md, lg } = width;
  return `col-xs-offset-${xs} col-sm-offset-${sm} col-md-offset-${md}${lg === undefined ? '' : ` col-lg-offset-${lg}`}`;
}
