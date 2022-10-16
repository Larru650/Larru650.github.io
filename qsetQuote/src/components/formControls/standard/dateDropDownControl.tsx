import { HpDateValidator } from '@avantia/form-validation';
import { createControlId } from '@avantia/questionset-model';
import dayjs from 'dayjs';
import lodash from 'lodash';
import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import { getMonthDays, monthArray } from '../../../tools/dateTools';
import { StandardFormGroupWidget } from '../../widgets/standardFormGroupWidget';
import { getMinMaxDateValuesFromValidator } from '../controlUtilities';
import { HpDateDropDownEventDetail, HpOnMouseEvent, InputControlProps } from '../inputControl';
import { DatePart } from './datePickerControl';

export interface DateDropDownControlProps extends InputControlProps {
  placeholder?: string;
  title?: string;
  dayMonthYearKey: string;
  onClick: HpOnMouseEvent;
}

export interface HpDateDropDownState {
  dirty: boolean;
  value?: string;
}

export function DateDropDownControl({
  id,
  value: answerValue,
  answerSource,
  data,
  onClick,
  onChange,
  errors,
  onBlur,
  question,
  ui
}: DateDropDownControlProps): JSX.Element {
  const error = errors ? errors[id] : undefined;
  const { textAndStyle: dataTextAndStyle, validation } = data;
  const textAndStyle = dataTextAndStyle.standard;
  const { questionText } = textAndStyle;
  const value = answerValue as string;
  const [year = '', month = '', day = ''] = getDatePartsValues();
  const fullDate: string | undefined = tryGetFullDate();
  const dateFormat = 'YYYY-MM-DD';

  // Dropdowns state.
  const dayId: string = createControlId({ questionId: id, key: 'day' });
  const monthId: string = createControlId({ questionId: id, key: 'month' });
  const yearId: string = createControlId({ questionId: id, key: 'year' });

  // Validator.
  const dateValidator = validation.filter(v => v.getType() === 'date')[0] as HpDateValidator;
  const { minValue, maxValue } = getMinMaxDateValuesFromValidator(dateValidator);

  const days: JSX.Element[] = [];
  const months: JSX.Element[] = [];
  const years: JSX.Element[] = [];

  lodash
    .range(
      1,
      getMonthDays(
        fullDate
          ? new Date(fullDate)
          : new Date(
              parseInt(year.length ? year : '2000'),
              parseInt(month.length ? month : '0'),
              parseInt(day.length ? day : '10')
            )
      ) + 1
    )
    .forEach(day => {
      const item = createDatePartInput('day', day);
      days.push(item);
    });

  monthArray.forEach(month => {
    const item = createDatePartInput('month', month.key, month.name);
    months.push(item);
  });

  const yearRange: { start: number | undefined; end: number | undefined } = {
    start: minValue?.getFullYear(),
    end: maxValue?.getFullYear()
  };

  lodash.range(yearRange.start || 1890, (yearRange.end || new Date().getFullYear()) + 1).forEach(year => {
    const item = createDatePartInput('year', year);
    years.unshift(item);
  });

  const datePartsInputs = (
    <div role="group">
      <DropdownButton
        id={dayId}
        key={dayId}
        title={getTitle('D', day, 'Day')}
        className="d-inline"
        onBlur={handleBlur(dayId)}
        onSelect={handleSelect('day')}>
        {days}
      </DropdownButton>
      <DropdownButton
        id={monthId}
        key={monthId}
        title={getTitle('MMMM', month, 'Month')}
        className="d-inline"
        onBlur={handleBlur(monthId)}
        onSelect={handleSelect('month')}>
        {months}
      </DropdownButton>
      <DropdownButton
        id={yearId}
        key={yearId}
        title={getTitle('YYYY', year, 'Year')}
        className="d-inline"
        onBlur={handleBlur(yearId)}
        onSelect={handleSelect('year')}>
        {years}
      </DropdownButton>
    </div>
  );

  return (
    <>
      <StandardFormGroupWidget
        id={id}
        labelText={questionText}
        control={datePartsInputs}
        error={error}
        answerSource={answerSource}
        controlType="date-drop-down"
        helpInfo={question.data.helpInfo}
        onClick={onChange}
        helpInfoVisibility={ui.helpInfoVisibility}
      />
    </>
  );

  function handleBlur(id: string): ((event: React.FocusEvent<HTMLElement>) => void) | undefined {
    return ((e: any) => {
      e.currentTarget.id = id;
      onBlur(e, { type: 'date-drop-down', fullDate: value, question } as HpDateDropDownEventDetail);
    }) as any;
  }

  function handleSelect(datePart: DatePart): (eventKey: string | null, e: React.SyntheticEvent<unknown>) => void {
    return ((key: string, e: any) => {
      const updatedDate = buildDateFromDropDownValue(datePart, key);
      onClick(e, { type: 'date-drop-down', fullDate: updatedDate, question } as HpDateDropDownEventDetail);
    }) as any;
  }

  function createDatePartInput(
    datePartKey: DatePart,
    datePartValue: string | number,
    datePartTitle?: string | number
  ): JSX.Element {
    const itemKey = createControlId({ questionId: id, key: datePartValue.toString() });
    return (
      <Dropdown.Item
        value={datePartValue}
        as="button"
        id={createControlId({ questionId: id, key: `${datePartKey}${datePartValue.toString()}` })}
        onMouseDown={(e => e.preventDefault()) as (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void}
        key={itemKey}
        eventKey={datePartValue.toString()}>
        {datePartTitle || datePartValue}
      </Dropdown.Item>
    );
  }

  function buildDateFromDropDownValue(datePart: DatePart, key: string): string {
    let updatedDate: string | Date;
    const datePartToUpdate = datePart === 'day' ? 'date' : datePart;
    if (fullDate) {
      updatedDate = dayjs(fullDate)
        .set(datePartToUpdate, parseInt(key))
        .format(dateFormat);
      return updatedDate;
    }
    const prevAnswer = value.toString();
    let [prevAnswerYear = '', prevAnswerMonth = '', prevAnswerDay = ''] = prevAnswer.split('-');
    switch (datePart) {
      case 'day':
        prevAnswerDay = key;
        break;
      case 'month':
        prevAnswerMonth = key;
        break;
      case 'year':
        prevAnswerYear = key;
        break;
      default:
        break;
    }
    if (prevAnswerMonth.length) {
      const daysInMonth = getMonthDays(
        new Date(parseInt(prevAnswerYear.length ? prevAnswerYear : '2000'), parseInt(prevAnswerMonth), 1)
      );
      if (parseInt(prevAnswerDay) >= daysInMonth) {
        prevAnswerDay = daysInMonth.toString();
      }
    }
    updatedDate = `${prevAnswerYear}-${prevAnswerMonth}-${prevAnswerDay}`;
    return tryBuildFullDate(updatedDate) || updatedDate;
  }

  function getTitle(format: string, datePartValue: string, placeHolder: string): string {
    if (fullDate) {
      return dayjs(fullDate).format(format);
    } else if (!datePartValue.length) {
      return placeHolder;
    }
    return format === 'MMMM'
      ? (monthArray.find(month => month.key === parseInt(datePartValue))?.name as string)
      : datePartValue;
  }

  function tryBuildFullDate(answer: string): string | undefined {
    const [year = '', month = '', day = ''] = answer.split('-');
    const isFullAnswer = year?.length && month?.length && day?.length; // Can't check if date is valid as 12-01- is a valid date.
    if (isFullAnswer) {
      const fullDate = new Date(parseInt(year), parseInt(month), parseInt(day));
      return dayjs(fullDate).format(dateFormat);
    }
  }

  function getDatePartsValues(): string[] {
    const [year = '', month = '', day = ''] = value.split('-');
    if (year.length && month.length && day.length) {
      const parsedMonth = (parseInt(month) - 1).toString();
      return [year, parsedMonth, day];
    }
    return [year, month, day];
  }

  function tryGetFullDate(): string | undefined {
    return year.length && month.length && day.length ? value : tryBuildFullDate(value);
  }
}
