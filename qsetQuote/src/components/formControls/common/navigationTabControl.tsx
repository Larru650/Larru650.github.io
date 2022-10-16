import { createControlId } from '@avantia/questionset-model';
import lodash from 'lodash';
import React from 'react';
import { SvgIcon, SvgIconTypes } from '../icons/SvgIcon';
import { HpEventDetail, HpNavTabEventDetail, HpOnMouseEvent } from '../inputControl';

export interface NavigationTabProps {
  name: string;
  key: string;
}

export interface NavigationTabControlProps {
  id: string;
  activeKey: string;
  highestTouchedKey: string;
  items: NavigationTabProps[];
  onClick: HpOnMouseEvent;
  eventDetail: HpEventDetail;
  hasError: boolean;
}

export function NavigationTabControl({
  id,
  activeKey,
  highestTouchedKey,
  items,
  onClick,
  eventDetail,
  hasError
}: NavigationTabControlProps): JSX.Element | null {
  const count = items.length;
  const activeIndex = lodash.findIndex(items, (i) => i.key === activeKey);
  const highestTouchedIndex = lodash.findIndex(items, (i) => i.key === highestTouchedKey);
  const completed = (100.0 / (count - 1)) * activeIndex;

  if (count <= 1) {
    return null;
  }

  return (
    <div className="av-timeline" id={createControlId({ questionId: id })}>
      <div className="av-timeline-line">
        <div className="av-timeline-line-complete" style={{ width: `${completed}%` }}></div>
        <div className="av-timeline-line-incomplete" style={{ width: `${100 - completed}%` }}></div>
      </div>
      <ul>{createTabItems(items, onClick, eventDetail, activeIndex, highestTouchedIndex, hasError)}</ul>
    </div>
  );
}

function createTabItems(
  items: NavigationTabProps[],
  onClick: HpOnMouseEvent,
  eventDetail: HpEventDetail,
  activeIndex: number,
  highestTouchedIndex: number,
  hasError: boolean
): JSX.Element[] {
  if (!items || items.length === 0) {
    return [];
  }

  return items.map((item, ix) => {
    const { key: id, name } = item;
    let className = '';
    let type: SvgIconTypes | undefined;
    if (ix < activeIndex) {
      type = 'check';
    } else if (ix === activeIndex) {
      type = 'angle-down';
      className = hasError ? 'av-active av-error' : 'av-active';
    }

    if (ix > activeIndex) {
      if (ix < highestTouchedIndex) {
        type = 'check';
        className += ' av-next-completed';
      } else if (ix === highestTouchedIndex) {
        type = 'check';
        className += ' av-highest-touched';
      }
    }

    return (
      <li
        id={createControlId({ questionId: id })}
        key={id}
        title={name}
        className={className}
        // eventKey={id}
        // disabled={hasError && activeKey !== id}
        onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>): void =>
          onClick(e, { ...eventDetail, activeKey: id } as HpNavTabEventDetail)
        }>
        <span className="av-timeline-icon">{type && <SvgIcon type={type} size="auto" />}</span>
        <label>{name}</label>
      </li>
    );
  });
}
