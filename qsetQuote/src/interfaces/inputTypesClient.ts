import {
  HpCommonInputTextAndStyle,
  HpCommonStandardInputTextAndStyle,
  HpCommonTextAndStyle
} from '@avantia/questionset-model';
import { CSSProperties } from 'react';

export interface HpClientInputTextAndStyle {
  standard: HpClientStandardInputTextAndStyle;
  fluent?: HpClientFluentInputTextAndStyle;
}

export interface HpClientFluentInputTextAndStyle extends HpCommonInputTextAndStyle, HpCommonTextAndStyle {
  style?: CSSProperties;
}

export interface HpClientStandardInputTextAndStyle extends HpCommonStandardInputTextAndStyle {
  style?: CSSProperties;
}
