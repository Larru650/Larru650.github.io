import { isDefined } from '@avantia/form-validation';
import { ControlValueTypes, HpClientQuestionData } from '../../../interfaces';
import { TextInputControl, TextInputControlProps } from './textInputControl';

export type CurrencyInputControlProps = TextInputControlProps;

export function CurrencyInputControl(props: CurrencyInputControlProps): JSX.Element {
  const { data } = props;
  const { textAndStyle } = data as HpClientQuestionData;
  const { prefixText, suffixText } = textAndStyle.standard;
  const currProps = { ...props };
  currProps.prefixText = !isDefined(prefixText) ? '£' : prefixText;
  currProps.suffixText = suffixText;
  currProps.formatter = {
    do: (val: ControlValueTypes): string => {
      const num = parseInt(val as string);
      return !isNaN(num) ? num.toLocaleString('en-GB') : '';
    },
    undo: (val: ControlValueTypes): string => {
      return (val as string).replace(/\D/g, '').replace(/,/g, '');
    }
  };
  return TextInputControl(currProps);
}
