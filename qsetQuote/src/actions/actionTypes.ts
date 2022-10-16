export type ActionTypes =
  | 'AJAX_CALL_STARTED'
  | 'AJAX_CALL_COMPLETED'
  | 'FETCH_ERROR_OCCURRED'
  | 'RETRIEVED_FEATURE_TOGGLE_STATE'
  | 'RECEIVE_AUTHENTICATED_USER'
  | 'CLEAR_ALL_FORM_DATA'
  | 'FIELD_CHANGED'
  | 'FIELD_BLURRED'
  | 'DELAYED_FIELD_VALIDATION'
  | 'FIELDS_FAILED_VALIDATION'
  | 'FIELDS_PASSED_VALIDATION'
  | 'QUESTIONSET_RETRIEVED'
  | 'QUESTIONSETS_RETRIEVED'
  | 'DYNAMIC_BUTTON_CLICK'
  | 'FLUENT_ANSWER_CLICK'
  | 'NAVIGATION_CHANGED'
  | 'ANSWERS_POSTED'
  | 'ANSWERS_RETRIEVED'
  | 'ADDRESS_LOOKUP_CALL_STARTED'
  | 'ADDRESS_ITEM_RETRIEVED'
  | 'ADDRESS_ITEM_FAILED'
  | 'ADDRESS_LOOKUP_RETRIEVED'
  | 'ADDRESS_LOOKUP_FAILED'
  | 'HELP_INFO_CLICK';

export type FormName = 'QuestionSet';

export type HpDispatchFunction<PayloadT> = (action: HpAction<PayloadT>) => any;

export interface HpAction<PayloadT> {
  type: ActionTypes;
  payload?: PayloadT;
  fetchError?: FetchError | string;
  reason?: any;
}

export interface FetchError {
  error: string;
  message: string;
  timestamp: Date;
}
