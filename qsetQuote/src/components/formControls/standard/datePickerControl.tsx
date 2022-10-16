import { HpDateValidator } from '@avantia/form-validation';
import { createControlId, HpDebugFlags, logInfo } from '@avantia/questionset-model';
import dayjs from 'dayjs';
import $ from 'jquery';
import React, { BaseSyntheticEvent } from 'react';
import { FormControl } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { HpClientQuestion } from '../../../interfaces';
import { ImageWidget } from '../../widgets';
import { StandardFormGroupWidget } from '../../widgets/standardFormGroupWidget';
import { getMinMaxDateValuesFromValidator } from '../controlUtilities';
import { HpOnFocusEvent, HpOnMouseEvent, InputControlProps } from '../inputControl';

export interface DatePickerControlProps extends InputControlProps {
  placeholder?: string;
}

export type DatePart = 'day' | 'month' | 'year' | 'date';

export function DatePickerControl({
  id,
  type,
  value: answerValue,
  answerSource,
  data,
  onChange,
  errors,
  question,
  ui
}: DatePickerControlProps): JSX.Element {
  const error = errors ? errors[id] : undefined;
  const { textAndStyle: dataTextAndStyle, validation } = data;
  const dateValidator = validation.filter(v => v.getType() === 'date')[0] as HpDateValidator;
  const { minValue, maxValue } = getMinMaxDateValuesFromValidator(dateValidator);
  const textAndStyle = dataTextAndStyle.standard;
  const { questionText } = textAndStyle;

  const value = answerValue ? new Date(answerValue as string) : undefined;
  let date: Date;

  // Datepicker options.
  const monthsShown = 3;
  const smartphoneMode = false;
  const groupClassName = 'date-input-group';

  const dateChangeHandler = createCustomHandler(onChange, 'slideUp', question, createChangeEventPrelude());
  const focusHandler = createCustomHandler(undefined, 'slideDown', question);

  const dateParts: DatePart[] = ['day', 'month', 'year'];
  const calendarSrc: any = 'datePickerCalendars/date-picker-icon.png';

  const calendarIcon = (
    onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
  ): JSX.Element => (
    <button id={createControlId({ questionId: id, key: 'calendar' })} onFocus={focusHandler} onClick={onClick}>
      <ImageWidget image={calendarSrc} altText="Calendar" />
    </button>
  );

  // ref is not used, but will throw a console error if we omit it.
  const DateInput = (
    props: React.HTMLProps<HTMLInputElement | HTMLButtonElement>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: React.Ref<HTMLInputElement>
  ): JSX.Element => {
    const { onClick } = props;
    return (
      <div className={groupClassName} role="group">
        {createDateInputs(onClick)}
        {calendarIcon(onClick)}
      </div>
    );
  };

  const calendar = (
    <DatePicker
      key={id}
      id={id}
      onChange={(d: Date, e: React.SyntheticEvent<BaseSyntheticEvent, any>): void => {
        logInfo('changing date', HpDebugFlags.DeveloperTemporary);
        date = d;
        dateChangeHandler(e as BaseSyntheticEvent);
      }}
      dateFormat="dd/MM/yyyy"
      selected={value}
      monthsShown={smartphoneMode ? 1 : monthsShown}
      //showYearPicker={selectedInput === 'year'}
      //showMonthDropdown={selectedInput === 'month'}
      //showYearDropdown={selectedInput === 'year'}
      showYearDropdown={true}
      withPortal={smartphoneMode}
      minDate={minValue}
      maxDate={maxValue}
      showDisabledMonthNavigation
      disabledKeyboardNavigation
      dayClassName={(date: Date): string => `date${dayjs(date).format('YYYYMMDD')}`}
      customInput={React.createElement(React.forwardRef(DateInput))}
    />
  );

  return (
    <>
      <StandardFormGroupWidget
        id={id}
        labelText={questionText}
        control={calendar}
        error={error}
        answerSource={answerSource}
        controlType="date-picker"
        helpInfo={question.data.helpInfo}
        onClick={onChange}
        helpInfoVisibility={ui.helpInfoVisibility}
      />
    </>
  );

  function createChangeEventPrelude(): () => string {
    return (): string => {
      return dayjs(date).format('YYYY-MM-DD');
    };
  }

  function createCustomHandler<HandlerInT extends HpOnMouseEvent | HpOnFocusEvent>(
    handler: HandlerInT | undefined,
    action: 'slideUp' | 'slideDown',
    question: HpClientQuestion,
    preludeAction?: (e: BaseSyntheticEvent) => string
  ): (e: BaseSyntheticEvent) => void {
    const customHandler: (e: BaseSyntheticEvent) => void = e => {
      if (preludeAction) {
        e.target.value = preludeAction(e);
        e.target.id = createControlId({ questionId: id });
      }

      if (handler) {
        handler(e as any, { type: 'standard', question });
      }

      toggleDatePickerPopup(e, action);
    };

    return customHandler;
  }

  function toggleDatePickerPopup(e: React.BaseSyntheticEvent<object, any, any>, action: string): void {
    const datePicker = $(e.target)
      .closest('.hp-date-picker')
      .next()
      .find('.react-datepicker');
    if (datePicker.length === 1) {
      if (action === 'slideUp') {
        $(datePicker).slideUp();
      } else {
        $(datePicker).slideDown();
      }
    }
  }

  function createInputOnClickHandler(
    datePart: DatePart,
    onClickHandler: ((event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void) | undefined,
    onClick: ((event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void) | undefined
  ): ((event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void) | undefined {
    onClickHandler = (e: React.MouseEvent<HTMLInputElement, MouseEvent>): void => {
      //setSelectedInput(datePart);
      if (onClick) {
        onClick(e);
      }
    };
    return onClickHandler;
  }

  // Remove if we decide to use just one input. This only creates read-only inputs, onChange needs to be implemented and the dateParts recalculated if we wanted them to be editable.
  function createDateInputs(
    onClick: ((event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void) | undefined
  ): JSX.Element[] {
    let datePartValue: string | number | undefined = '';
    const onClickHandler = onClick;
    return dateParts.map(datePart => {
      switch (datePart) {
        case 'day':
          datePartValue = value ? dayjs(value).format('DD') : undefined;
          break;
        case 'month':
          datePartValue = value ? dayjs(value).format('MMMM') : undefined;
          break;
        case 'year':
          datePartValue = value ? dayjs(value).format('YYYY') : undefined;
          break;
        default:
          break;
      }
      return (
        <FormControl
          key={createControlId({ questionId: id, key: datePart })}
          id={createControlId({ questionId: id, key: datePart })}
          name={datePart}
          type={type || 'text'}
          readOnly
          onClick={createInputOnClickHandler(datePart, onClickHandler, onClick)}
          value={datePartValue}
        />
      );
    });
  }
}
