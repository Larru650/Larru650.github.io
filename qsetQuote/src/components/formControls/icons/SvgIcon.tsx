import { ReactComponent as AngleDoubleLeftIcon } from '@fortawesome/fontawesome-free/svgs/solid/angle-double-left.svg';
import { ReactComponent as AngleDoubleRightIcon } from '@fortawesome/fontawesome-free/svgs/solid/angle-double-right.svg';
import { ReactComponent as AngleDownIcon } from '@fortawesome/fontawesome-free/svgs/solid/angle-down.svg';
import { ReactComponent as AngleLeftIcon } from '@fortawesome/fontawesome-free/svgs/solid/angle-left.svg';
import { ReactComponent as AngleRightIcon } from '@fortawesome/fontawesome-free/svgs/solid/angle-right.svg';
import { ReactComponent as CheckIcon } from '@fortawesome/fontawesome-free/svgs/solid/check.svg';
import { ReactComponent as CrossIcon } from '@fortawesome/fontawesome-free/svgs/solid/times.svg';
import lodash from 'lodash';
import React, { CSSProperties, FunctionComponent, SVGProps } from 'react';
import { ImportantIcon } from './ImportantIcon';
import { TooltipIcon } from './TooltipIcon';

export type SvgIconTypes =
  | 'angle-left'
  | 'angle-right'
  | 'angle-down'
  | 'angle-double-left'
  | 'angle-double-right'
  | 'check'
  | 'cross'
  | 'important'
  | 'tooltip';

export type IconSizes =
  | 'extra-large'
  | 'large'
  | 'medium'
  | 'medium-small'
  | 'small'
  | 'very-small'
  | 'semi-tiny'
  | 'tiny'
  | 'very-tiny'
  | 'auto';

export function SvgIcon({ type, size, className, style }: SvgIconProps): JSX.Element {
  let Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  switch (type) {
    case 'angle-left':
      Icon = AngleLeftIcon;
      break;
    case 'angle-right':
      Icon = AngleRightIcon;
      break;
    case 'angle-down':
      Icon = AngleDownIcon;
      break;
    case 'angle-double-left':
      Icon = AngleDoubleLeftIcon;
      break;
    case 'angle-double-right':
      Icon = AngleDoubleRightIcon;
      break;
    case 'check':
      Icon = CheckIcon;
      break;
    case 'cross':
      Icon = CrossIcon;
      break;
    case 'important':
      Icon = ImportantIcon;
      break;
    case 'tooltip':
      Icon = TooltipIcon;
      break;
  }

  const iconCls = 'av-icon av-icon-' + type;
  className = className ? className + ' ' + iconCls : iconCls;
  if (lodash.isString(size)) {
    if (size !== 'auto') {
      if (size === undefined) {
        size = 'medium';
      }

      className = className + ' av-icon-' + size;
    }
  } else if (size) {
    const sizeMap: IconSizeMap = size;
    for (const sizeKey in sizeMap) {
      switch (sizeKey as IconSizeKey) {
        case '':
        case 'phone':
          {
            const size: IconSizes = sizeMap[sizeKey];
            const sizeStr = ` av-icon-${sizeKey ? `${sizeKey}-` : ''}${size}`;
            className = className + sizeStr;
          }
          break;
        default:
          throw new Error(`The key "${sizeKey}" is not one of the defined keys.`);
      }
    }
  }

  return <Icon className={className} style={style} />;
}

export function ToolTipIcon({ className, size }: ToolTipIconProps): JSX.Element {
  if (size) {
    return <SvgIcon type="tooltip" size={size} className={className} />;
  } else {
    return <SvgIcon type="tooltip" size="auto" className={className} />;
  }
}

export interface ToolTipIconProps {
  className?: string;
  size?: IconSizes;
}

export type IconSizeKey = 'phone' | '';

export type IconSizeMap = { [size: string]: IconSizes };

export interface SvgIconProps {
  type: SvgIconTypes;
  size?: IconSizes | IconSizeMap;
  style?: CSSProperties;
  className?: string;
}
