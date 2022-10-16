import { HpValidationResult } from '@avantia/form-validation';
import { createQuestionPanelId } from '@avantia/questionset-model';
import lodash from 'lodash';
import React, { ReactElement } from 'react';

export function ValidationSummaryWidget({
  validationResult
}: {
  validationResult: HpValidationResult;
}): ReactElement | null {
  const errors: ReactElement[] = [];
  lodash.forOwn(validationResult.errors, (message, questionId) => {
    if (message) {
      errors.push(
        <li key={questionId}>
          <a id={`ERR${questionId}`} href={`#${createQuestionPanelId(questionId)}`}>
            {message}
          </a>
        </li>
      );
    }
  });

  if (errors.length === 0) {
    return null;
  }

  return (
    <div className="av-card av-card-child av-card-error-summary">
      <h3>You haven&lsquo;t answered all the questions</h3>
      <ul>{errors}</ul>
    </div>
  );
}
