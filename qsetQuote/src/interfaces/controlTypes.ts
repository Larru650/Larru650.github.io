import { HpAnswerSource } from '@avantia/questionset-model';

export type ControlValueTypes = string | string[] | undefined;

export type AnswerSource = keyof HpAnswerSource<string> | 'unanswered';
