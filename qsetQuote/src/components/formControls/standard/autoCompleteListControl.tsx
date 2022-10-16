import { createControlId } from '@avantia/questionset-model';
import $ from 'jquery';
import React, { BaseSyntheticEvent } from 'react';
import { FormControl } from 'react-bootstrap';
import { HpClientQuestion, HpClientQuestionLookupItemMap } from '../../../interfaces';
import { findLookupKeyFromText, SearchTermSuggestionResult } from '../../../tools/listSearchUtility';
import { StandardFormGroupWidget } from '../../widgets/standardFormGroupWidget';
import { HpOnFocusEvent, HpOnMouseEvent, InputControlProps } from '../inputControl';

export function AutoCompleteListControl({
  id,
  name,
  type,
  value: answerValue,
  answerSource,
  onChange,
  onClick,
  onFocus,
  onBlur,
  disabled,
  errors,
  data,
  question,
  answer,
  ui
}: InputControlProps): JSX.Element {
  const value = answerValue as string;
  const { lookup, textAndStyle: inputTextAndStyle } = data;
  const changeHandler = createCustomHandler(question, onChange, 'slideDown');
  const focusHandler = createCustomHandler(question, onFocus, 'slideDown');
  const clickHandler = createCustomHandler(question, onClick, 'slideUp');
  const blurHandler = createCustomHandler(question, onBlur, 'slideUp', createChangeEventPrelude(lookup));
  const error = errors ? errors[id] : undefined;
  const { questionText, placeholder, noItemsMatchText = 'No matching items' } = inputTextAndStyle.standard;

  let suggestionList: JSX.Element[] = [];
  if (answer.partial) {
    const { suggestions, minTermLength } = answer.partial as SearchTermSuggestionResult;
    if (suggestions.length) {
      suggestionList = suggestions.map(({ key: suggKey, value: suggVal }) => {
        return (
          <li className="list-group-item" key={suggKey} onClick={clickHandler as any} id={suggKey}>
            {suggVal}
          </li>
        );
      });
    } else if (value.length >= minTermLength) {
      suggestionList = [
        <li key="no-matches" className="list-group-item hp-no-matches">
          {noItemsMatchText}
        </li>
      ];
    }
  }

  const control = (
    <FormControl
      id={createControlId({ questionId: id })}
      key={id}
      name={name || id}
      onChange={changeHandler as any}
      onBlur={(blurHandler || changeHandler) as any}
      onFocus={focusHandler as any}
      disabled={disabled}
      type={type || 'text'}
      value={value as string}
      placeholder={placeholder}
      className="animated block"
    />
  );

  const controls = [control];
  if (suggestionList.length > 0) {
    controls.push(
      <ul key={`list-${id}`} className="list-group animated hp-autocomplete-list">
        {suggestionList}
      </ul>
    );
  }

  return (
    <StandardFormGroupWidget
      id={id}
      labelText={questionText}
      error={error}
      control={controls}
      answerSource={answerSource}
      controlType="auto-complete"
      helpInfo={question.data.helpInfo}
      onClick={onChange}
      helpInfoVisibility={ui.helpInfoVisibility}
    />
  );
}

function createChangeEventPrelude(lookup: HpClientQuestionLookupItemMap) {
  return (e: BaseSyntheticEvent): string => {
    const { type: eventType, target } = e;
    const value = target.value;
    if (eventType !== 'blur') {
      return value;
    }

    return findLookupKeyFromText(lookup, value, { ignoreCase: true }) || value;
  };
}

function createCustomHandler<HandlerInT extends HpOnMouseEvent | HpOnFocusEvent>(
  question: HpClientQuestion,
  handler: HandlerInT | undefined,
  action: 'slideUp' | 'slideDown',
  preludeAction?: (e: BaseSyntheticEvent) => string
): (e: BaseSyntheticEvent) => void {
  const customHandler: (e: BaseSyntheticEvent) => void = e => {
    if (preludeAction) {
      e.target.value = preludeAction(e);
    }

    if (handler) {
      handler(e as any, { type: 'standard', question });
    }

    const target = $(e.target);
    const list = $('ul', target.closest('.hp-auto-complete'));
    if (list.length === 1) {
      if (action === 'slideUp') {
        $(list).slideUp();
      } else {
        $(list).slideDown();
      }
    }
  };

  return customHandler;
}
