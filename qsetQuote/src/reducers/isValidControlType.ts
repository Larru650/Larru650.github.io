import * as FluentControls from '../components/formControls/fluent/index';
import * as StandardControls from '../components/formControls/standard/index';

/*
 * This needs to be in its own file because it references controls that we don't want to be used in any server-side features.
 */
export function isValidControlType(controlType: string): boolean {
  return !!StandardControls[controlType] || !!FluentControls[controlType];
}
