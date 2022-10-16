import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getAnswersAction } from '../actions/getAnswersAction';
import { getAuthenticatedUserAction } from '../actions/getAuthenticatedUserAction'; // Import index instead.
import { getFeatureToggleStateAction } from '../actions/getFeatureToggleStateAction';
import { getQuestionSetsAction } from '../actions/getQuestionSetsAction';
import QuestionSetPage, {
  registerQuestionSetPageSideBarComponent
} from '../components/questionSetForm/questionSetPage';
import { getConfig } from '../config/configuration';
import { FeatureToggleEnum, HpClientQuestionSetState } from '../interfaces';
import { GlobalState, UserInterfaceState } from '../reducers/initialState';
import ErrorPage from './errorPage';
import { Footer } from './footer';
import { Header } from './header';
import ProfilePage from './profilePage';
import { SideBar } from './sideBar';

declare const process: any;
const websiteEndpoint = getConfig().websiteEndpoint;

registerQuestionSetPageSideBarComponent(SideBar);

export interface AppProps {
  getFeatureToggleState: Function;
  getAuthenticatedUser: Function;
  getAnswers: Function;
  getQuestionSets: Function;
  featureToggles: Map<FeatureToggleEnum, boolean>;
  userInterface: UserInterfaceState;
  questionSet: HpClientQuestionSetState;
}

function App({ getFeatureToggleState, getAuthenticatedUser }: AppProps): JSX.Element {
  useEffect(() => {
    getFeatureToggleState({
      featureName: FeatureToggleEnum.ShowFooter
    });
    getAuthenticatedUser();
    // getQuestionSets();
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <main className="container">
          <Switch>
            <Route exact path={`${websiteEndpoint}/`} component={QuestionSetPage} />
            <Route exact path={`${websiteEndpoint}/questionset`} component={QuestionSetPage} />
            <Route exact path={`${websiteEndpoint}/profile`} component={ProfilePage} />
            <Route component={ErrorPage} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapStateToProps = (state: GlobalState) => {
  const { userInterface, featureToggles, questionSet } = state;
  return { userInterface, featureToggles, questionSet };
};

const mapDispatchToProps = {
  // By passing the mapDispatchToProps as an object redux will wrap the properties with dispatch.
  getFeatureToggleState: getFeatureToggleStateAction,
  getAuthenticatedUser: getAuthenticatedUserAction,
  getAnswers: getAnswersAction,
  getQuestionSets: getQuestionSetsAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
