import { createControlId } from '@avantia/questionset-model';
import lodash from 'lodash';
import React, { BaseSyntheticEvent } from 'react';
import { HpClientQuestionLookupItemMap } from '../../../interfaces';
import { HpEventDetail, HpOnClickEvent } from '../inputControl';

export interface BasicSwitchControlProps {
  id: string;
  data: HpClientQuestionLookupItemMap;
  value: string;
  onClick: HpOnClickEvent;
  disabled?: boolean;
  eventDetail: HpEventDetail;
}

export function BasicSwitchControl({
  id,
  data,
  onClick,
  value,
  disabled,
  eventDetail
}: BasicSwitchControlProps): JSX.Element {
  const options: JSX.Element[] = [];
  lodash.forOwn(data, (option, key) => {
    const text = (option ? option.text : undefined) || key;
    const isChecked = value === key;
    if (options.length > 2) {
      console.warn(`Ignoring option "${key}" of ${id}: only 2 values are permitted for switches`);
      return false;
    } else if (key !== 'false' && key !== 'true') {
      console.warn(`Ignoring option "${key}" of ${id}: only 'true' and 'false' are permitted.`);
      return true;
    }

    const clickHandler = (e: BaseSyntheticEvent): void => onClick(e as any, eventDetail);
    options.push(
      <label
        key={key}
        id={createControlId({ questionId: id, key, options: { customPrefix: 'L' } })}
        className={`btn btn-${isChecked ? 'primary' : 'outline-primary'}`}>
        <input
          id={createControlId({ questionId: id, key })}
          name={id}
          type="radio"
          autoComplete="off"
          value={key}
          onClick={clickHandler}
          onChange={clickHandler}
          disabled={disabled || false}
          checked={isChecked}
        />
        <span className="av-label-text">{text}</span>
      </label>
    );
  });

  return (
    <div id={createControlId({ questionId: id })} role="group" className="btn-group">
      {options}
    </div>
  );
}
