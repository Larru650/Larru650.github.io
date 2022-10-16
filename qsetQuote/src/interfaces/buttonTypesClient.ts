import { HpValidator } from '@avantia/form-validation';
import {
  HpCommonButtonTextAndStyle,
  HpCommonStandardButtonTextAndStyles,
  HpHelpInfo
} from '@avantia/questionset-model';
import { CSSProperties } from 'react';
import { HpClientDependentAction } from '.';

export interface HpClientButtonData {
  textAndStyle: HpClientButtonTextAndStyle;
  dependentActions?: HpClientDependentAction[];
  validation?: HpValidator<unknown>[];
  helpInfo?: HpHelpInfo;
}

export interface HpClientButtonTextAndStyle {
  standard: HpClientStandardButtonTextAndStyle;
  fluent?: HpClientFluentButtonTextAndStyle;
}

export interface HpClientStandardButtonTextAndStyle
  extends HpCommonStandardButtonTextAndStyles,
    HpCommonButtonTextAndStyle {
  style?: CSSProperties;
}

export interface HpClientFluentButtonTextAndStyle extends HpCommonButtonTextAndStyle {
  style?: CSSProperties;
}
