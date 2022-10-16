import React from 'react';
import { CommonImageButtonListControl } from '../common/commonImageButtonListControl';
import { InputControlProps } from '../inputControl';

export interface ImageButtonListControlProps extends InputControlProps {
  title?: string;
  isMultiSelect: boolean;
}

export function ImageButtonListControl(props: ImageButtonListControlProps): JSX.Element {
  return <CommonImageButtonListControl listType={props.isMultiSelect ? 'CheckBox' : 'Radio'} {...props} />;
}
