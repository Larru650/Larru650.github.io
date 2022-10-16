import { SMap } from '@avantia/client-and-server-utilities';
import { HpCommonSection } from '@avantia/questionset-model';
import { HpClientConditionFunction } from '.';

export type HpClientSectionMap = SMap<HpClientSection>;

export interface HpClientSection extends HpCommonSection {
  prerequisites: HpClientConditionFunction[];
  isGroup: boolean; // if isTemplate is true, this won't be rendered, otherwise it can be used to group e.g. buttons together.
  questionIds?: string[]; // only when isGroup is true.
}
