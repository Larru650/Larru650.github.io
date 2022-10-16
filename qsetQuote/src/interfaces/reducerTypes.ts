import { HpActionPropTypes } from '@avantia/questionset-model';
import { HpClientQuestion, HpClientQuestionSetState } from '.';

export interface AddressLookupButtonClickActionProps {
  currState: HpClientQuestionSetState;
  state: HpClientQuestionSetState;
  question: HpClientQuestion;
  props: HpActionPropTypes;
}
