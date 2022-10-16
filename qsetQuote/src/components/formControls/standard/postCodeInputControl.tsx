import { formatPostCode } from '../../../tools/utilities';
import { TextInputControl, TextInputControlProps } from './textInputControl';

export type PostCodeInputControlProps = TextInputControlProps;

export function PostCodeInputControl(props: PostCodeInputControlProps): JSX.Element {
  const currProps = { ...props };
  currProps.formatter = {
    undo: (val, eventType): string => {
      return eventType === 'blur' ? formatPostCode(val as string) : (val as string);
    }
  };
  return TextInputControl(currProps);
}
