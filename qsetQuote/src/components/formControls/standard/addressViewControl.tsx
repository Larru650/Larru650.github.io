import { SMap } from '@avantia/client-and-server-utilities';
import React from 'react';
import { getAnswerValue, getQuestionStandardTextAndStyle } from '../../../tools/utilities';
import { createAddressSummary } from './addressLookupControl';
import { TextInputControlProps } from './textInputControl';

export function AddressViewControl({ answer, question }: TextInputControlProps): JSX.Element | null {
  const { answerValue } = getAnswerValue(answer, question, 'control');
  const answers = answerValue as string[];
  const map: SMap<string> = {};

  if (answers && answers.length) {
    // The answers are expected to be of the form: [key0, answer0, key1, answer1, ..., keyN, answerN]
    // Example: ['postcode', 'KT1 4BU']
    for (let i = 0; i < answers.length; i += 2) {
      const key = answers[i];
      const value = answers[i + 1];
      map[key] = value;
    }
  }

  // The map.addressLine1 is a simple check to see if the address is valid.
  // We may well need a better condition at some point, but it's okay for now.
  if (map.addressLine1) {
    const { questionText } = getQuestionStandardTextAndStyle(question);
    const summary = createAddressSummary(name => map[name], true);
    return (
      <div className="av-card av-card-child">
        {questionText && <h3>{questionText}</h3>}
        {summary}
      </div>
    );
  }

  return null;
}
