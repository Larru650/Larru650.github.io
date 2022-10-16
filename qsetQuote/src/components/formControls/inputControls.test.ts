import { HpQuestionFormatTypes } from '@avantia/questionset-model';
import { TextInputControl as FluentControl } from '../formControls/fluent/textInputControl';
import {
  getQuestionFormats,
  InputControl,
  InputControlProps,
  selectControlToUse,
  ShowQuestionFormats
} from './inputControl';
import { DropDownListControl as StandardControl } from './standard/dropDownListControl';

function createFormats(formats: Partial<ShowQuestionFormats>): ShowQuestionFormats {
  return Object.assign(
    {
      onlyFluent: false,
      onlyStandard: false,
      preferFluent: false,
      preferStandard: false,
      showFluent: false,
      showStandard: false
    },
    formats
  );
}

function createMap(
  hasStandard: boolean,
  hasFluent: boolean
): Map<HpQuestionFormatTypes, InputControl<InputControlProps> | undefined> {
  const map = new Map<HpQuestionFormatTypes, InputControl<InputControlProps> | undefined>();
  map.set('fluent', hasFluent ? FluentControl : undefined);
  map.set('standard', hasStandard ? StandardControl : undefined);
  return map;
}

describe('getQuestionFormats', () => {
  it('returns expected values for ["fluent"]', () => {
    const formats = getQuestionFormats(['fluent']);
    const expected = createFormats({
      onlyFluent: true,
      preferFluent: true,
      showFluent: true
    });
    expect(formats).toEqual(expected);
  });

  it('returns expected values for ["standard"]', () => {
    const formats = getQuestionFormats(['standard']);
    const expected = createFormats({
      onlyStandard: true,
      preferStandard: true,
      showStandard: true
    });
    expect(formats).toEqual(expected);
  });

  it('returns expected values for ["standard", "fluent"]', () => {
    const formats = getQuestionFormats(['standard', 'fluent']);
    const expected = createFormats({
      preferStandard: true,
      showFluent: true,
      showStandard: true
    });
    expect(formats).toEqual(expected);
  });

  it('returns expected values for ["fluent", "standard"]', () => {
    const formats = getQuestionFormats(['fluent', 'standard']);
    const expected = createFormats({
      preferFluent: true,
      showFluent: true,
      showStandard: true
    });
    expect(formats).toEqual(expected);
  });
});

describe('selectControlToUse', () => {
  it('selects correct control when only fluent allowed and standard, fluent present.', () => {
    const result = selectControlToUse(
      createFormats({ showFluent: true, preferFluent: true, onlyFluent: true }),
      createMap(true, true)
    );
    expect(result).toBe(FluentControl);
  });

  it('selects correct control when only standard allowed and standard, fluent present.', () => {
    const result = selectControlToUse(
      createFormats({ showStandard: true, preferStandard: true, onlyStandard: true }),
      createMap(true, true)
    );
    expect(result).toBe(StandardControl);
  });

  it('selects correct control when standard preferred and standard, fluent present.', () => {
    const result = selectControlToUse(
      createFormats({ showStandard: true, preferStandard: true, showFluent: true }),
      createMap(true, true)
    );
    expect(result).toBe(StandardControl);
  });

  it('selects correct control when fluent preferred and standard, fluent present.', () => {
    const result = selectControlToUse(
      createFormats({ showStandard: true, preferFluent: true, showFluent: true }),
      createMap(true, true)
    );
    expect(result).toBe(FluentControl);
  });

  it('selects correct control when standard preferred and fluent present.', () => {
    const result = selectControlToUse(
      createFormats({ showStandard: true, preferStandard: true, showFluent: true }),
      createMap(false, true)
    );
    expect(result).toBe(FluentControl);
  });

  it('selects correct control when fluent preferred and standard present.', () => {
    const result = selectControlToUse(
      createFormats({ showStandard: true, preferFluent: true, showFluent: true }),
      createMap(true, false)
    );
    expect(result).toBe(StandardControl);
  });

  it('selects no control when showStandard and not showFluent and only fluent present.', () => {
    const result = selectControlToUse(
      createFormats({ showStandard: true, preferStandard: true }),
      createMap(false, true)
    );
    expect(result).toBeUndefined();
  });

  it('selects no control when showFluent and not showStandard and only standard present.', () => {
    const result = selectControlToUse(createFormats({ preferFluent: true, showFluent: true }), createMap(true, false));
    expect(result).toBeUndefined();
  });
});
