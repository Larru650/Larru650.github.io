import React, { FocusEvent, FormEvent, MouseEvent } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { dynamicButtonClickAction, DynamicButtonClickPayload } from '../../actions/dynamicButtonClickAction';
import { fieldChangedAction, FieldChangedPayload } from '../../actions/fieldChangedAction';
import { fluentAnswerClickAction, FluentAnswerClickPayload } from '../../actions/fluentAnswerClickAction';
import { getAnswersAction, GetAnswersActionPayload } from '../../actions/getAnswersAction';
import { getQuestionSetsAction } from '../../actions/getQuestionSetsAction';
import { helpInfoClickAction, HelpInfoClickPayload } from '../../actions/helpInfoClickAction';
import { navigationChangedAction, NavigationChangedPayload } from '../../actions/navigationChangedAction';
import {
  HpClientQuestion,
  HpClientQuestionData,
  HpClientQuestionLookupItemMap,
  HpClientSection,
  HpClientSectionUI
} from '../../interfaces';
import { GlobalState } from '../../reducers/initialState';
import { determineVisibleQuestions } from '../../reducers/questionSetTools';
import { forEachSectionInOrder } from '../../tools/questionDisplayStateTools';
import { BasicDropDownListControl } from '../formControls/common/basicDropDownListControl';
import { NavigationTabControl, NavigationTabProps } from '../formControls/common/navigationTabControl';
import { createFormEvent, getQuestionFormats, HpEventDetail } from '../formControls/inputControl';
import { WelcomeMessage } from '../welcomeMessage';
import { LoadingWidget } from '../widgets';
import { InvokeScriptActionsWidget } from '../widgets/invokeScriptActionsWidget';
import { ValidationSummaryWidget } from '../widgets/validationSummaryWidget';
import { EventProcessor } from './eventProcessor';
import { FluentFieldProcessor } from './fluentFieldProcessor';
import {
  applyStylesheetsToPage,
  createQuestionControls,
  DispatchProps,
  HpPageEvents,
  needToLoadData,
  QuestionSetPageProps,
  StateProps
} from './questionSetPageFunctions';
import { StandardFieldProcessor } from './standardFieldProcessor';

const formName = 'QuestionSet';
const debugMode = true;
let SideBar: (() => JSX.Element) | undefined;

class QuestionSetPage extends React.Component<QuestionSetPageProps> implements HpPageEvents {
  private eventProcessor: EventProcessor<QuestionSetPageProps>;

  constructor(props: QuestionSetPageProps) {
    super(props);
    this.buttonClicked = this.buttonClicked.bind(this);
    this.fieldChanged = this.fieldChanged.bind(this);
    this.fieldClicked = this.fieldClicked.bind(this);
    this.eventProcessor = new EventProcessor<QuestionSetPageProps>(formName, debugMode, [
      { name: 'StandardFieldProcessor', processor: new StandardFieldProcessor() },
      { name: 'FluentFieldProcessor', processor: new FluentFieldProcessor() }
    ]);
  }

  componentDidUpdate(prevProps: QuestionSetPageProps): void {
    const { stylesheets, location, history, answersId: answersIdLoaded, displayState } = this.props;
    const questionSetsLoadedCount = displayState.availableQuestionSets.items.length;
    const { loadData, answersId, questionSetId } = needToLoadData({
      location,
      history,
      answersIdLoaded,
      questionSetsLoadedCount
    });
    if (loadData) {
      if (answersId || questionSetId) {
        this.props.getAnswers({ answersId: answersId as string, questionSetId: questionSetId as string });
      } else {
        this.props.getQuestionSets();
      }
    }

    if (stylesheets !== prevProps.stylesheets) {
      applyStylesheetsToPage(stylesheets);
    }
  }

  buttonClicked(event: MouseEvent<HTMLElement>, detail: HpEventDetail): void {
    event.preventDefault();
    this.eventProcessor.processFormEvent(event, detail || { type: undefined }, this.props);
  }

  fieldChanged(event: FormEvent<HTMLElement> | FocusEvent<HTMLElement>, detail: HpEventDetail): void {
    event.preventDefault();
    this.eventProcessor.processFormEvent(event, detail || { type: undefined }, this.props);
  }

  fieldClicked(event: MouseEvent<HTMLElement>, detail: HpEventDetail): void {
    event.preventDefault();
    this.eventProcessor.processMouseEvent(event, detail || { type: undefined }, this.props);
  }

  public render(): JSX.Element {
    const {
      friendlyName,
      questions,
      answers,
      displayState,
      questionFormats,
      validationResult,
      userInterface
    } = this.props;
    const showFormats = getQuestionFormats(questionFormats);
    const {
      visibleQuestionIds,
      availableQuestionSets,
      showValidationSummary,
      highestSectionStartedPosition
    } = displayState;
    const { ajaxCallsInProgress } = userInterface;

    const { elements: questionControls } = createQuestionControls(
      visibleQuestionIds,
      this,
      questions,
      answers,
      showFormats,
      validationResult,
      displayState,
      0
    );

    let questionSetCount = 0;
    const availableQuestionSetOptions: HpClientQuestionLookupItemMap = {};
    availableQuestionSets.items.forEach((item) => {
      questionSetCount++;
      availableQuestionSetOptions[item.questionSetId] = {
        text: `${item.friendlyName || item.questionSetId}`
      };
    });

    const qsData: HpClientQuestionData = {
      lookup: availableQuestionSetOptions,
      validation: [],
      textAndStyle: {
        standard: {
          questionText: 'Question set:',
          controlType: 'DropDownList'
        }
      }
    };

    let activeNavigationKey = '';
    let highestTouchedNavigationKey = '';
    const navigationSections: NavigationTabProps[] = [];
    forEachSectionInOrder({
      displayState,
      options: { iterate: 'sections-only' },
      worker: (section: HpClientSection, sectionUI: HpClientSectionUI, sectionId: string, isActive: boolean) => {
        if (sectionUI.isVisible) {
          const visibleQuestionIds = determineVisibleQuestions({
            questions,
            questionsUI: displayState.questionsUI,
            activeSectionId: sectionId
          });
          if (visibleQuestionIds.length) {
            navigationSections.push({ key: sectionId, name: section.title });
            if (isActive) {
              activeNavigationKey = sectionId;
            }

            if (highestSectionStartedPosition === section.position) {
              highestTouchedNavigationKey = sectionId;
            }
          }
        }
      }
    });

    // This is a blank question for non-question based controls,
    const question: HpClientQuestion = { data: {} } as any;

    return (
      <>
        <WelcomeMessage
          welcomeHeader={friendlyName || 'Questions'}
          welcomeMessage={visibleQuestionIds.length ? '' : 'Our list of questions will appear shortly'}
        />
        <Container className="rounded" style={{ marginBottom: '25px', backgroundColor: '#fff' }}>
          {questionSetCount > 1 && (
            <Row>
              <Col>
                <BasicDropDownListControl
                  id="questionSetId"
                  name=""
                  value={availableQuestionSets.selected || ''}
                  onClick={createFormEvent(this.fieldChanged, { type: 'questionset', question })}
                  data={qsData.lookup}
                  eventDetail={{ type: 'standard', question }}
                  sortItemsBy={undefined}
                />
              </Col>
            </Row>
          )}
          <Row>
            <Col>
              <NavigationTabControl
                id="mainNavBar"
                activeKey={activeNavigationKey}
                highestTouchedKey={highestTouchedNavigationKey}
                items={navigationSections}
                onClick={this.buttonClicked}
                hasError={validationResult.count > 0}
                eventDetail={{ type: 'nav-bar', question }}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={9}>
              <div className="av-card">
                {showValidationSummary && validationResult.count > 0 && (
                  <ValidationSummaryWidget validationResult={validationResult} />
                )}
                {questionControls}
              </div>
            </Col>
            {renderSideBar()}
          </Row>
        </Container>
        <InvokeScriptActionsWidget scriptActions={this.props.displayState.scriptActions} />
        {ajaxCallsInProgress > 0 && <LoadingWidget />}
      </>
    );
  }
}

function renderSideBar(): JSX.Element | null {
  if (SideBar) {
    return (
      SideBar && (
        <Col xs={3}>
          <SideBar />
        </Col>
      )
    );
  }

  return null;
}

const mapStateToProps = (state: GlobalState): StateProps => {
  const { questionSet, userInterface } = state;
  return { ...questionSet, userInterface };
};

const mapDispatchToProps = (dispatch: (payload: any) => any): DispatchProps => {
  return {
    fieldChanged: (payload: FieldChangedPayload): void => dispatch(fieldChangedAction(payload)),
    dynamicButtonClick: (payload: DynamicButtonClickPayload): void => dispatch(dynamicButtonClickAction(payload)),
    fluentAnswerClick: (payload: FluentAnswerClickPayload): void => dispatch(fluentAnswerClickAction(payload)),
    navigationChanged: (payload: NavigationChangedPayload): void => dispatch(navigationChangedAction(payload)),
    helpInfoClick: (payload: HelpInfoClickPayload): void => dispatch(helpInfoClickAction(payload)),
    getAnswers: (payload: GetAnswersActionPayload): void => dispatch(getAnswersAction(payload)),
    getQuestionSets: (): void => dispatch(getQuestionSetsAction())
  };
};

export function registerQuestionSetPageSideBarComponent(sideBar: () => JSX.Element): void {
  SideBar = sideBar;
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionSetPage));
