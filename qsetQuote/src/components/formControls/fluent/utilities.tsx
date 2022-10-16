import { createControlId } from '@avantia/questionset-model';
import React, { CSSProperties, ReactElement } from 'react';
import { HpOnMouseEvent } from '../inputControl';

export function mergeStyles(...styles: CSSProperties[]): CSSProperties {
  return Object.assign({}, ...styles);
}

export interface CompileQuestionArgs {
  id: string;
  onClick: HpOnMouseEvent;
  style?: CSSProperties;
  questionText: string;
  answerText: string;
  editControl: ReactElement;
  className: string;
}

export function compileQuestion({
  id,
  onClick,
  style,
  questionText,
  answerText,
  editControl,
  className
}: CompileQuestionArgs): string | JSX.Element {
  const re = /{{value}}/;
  const ms = re.exec(questionText);
  let before: string | undefined;
  let after: string | undefined;
  let token: string | undefined;
  let result: string | ReactElement = questionText;
  if (ms && ms.length) {
    token = ms[0];
    before = questionText.substring(0, ms.index);
    after = questionText.substring(ms.index + token.length);
    result = (
      <span>
        <span>{before}</span>
        <a
          href="#"
          id={createControlId({ questionId: id, key: 'link', options: { ignorePrefix: true } })}
          onClick={onClick as any}
          style={style}
          className={className}>
          {answerText || '<No Answer>'}
        </a>
        {editControl}
        <span>{after}</span>
      </span>
    );
  }

  return result;
}
