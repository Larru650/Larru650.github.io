import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import errorIcon from '../assets/images/HomeProtectQuestion.png';
import { GlobalState } from '../reducers/initialState';
import { WelcomeMessage } from './welcomeMessage';

const ErrorPage: React.FC = () => {
  return (
    <div>
      <WelcomeMessage welcomeHeader="Ooops" welcomeMessage="Sorry, that page doesn't exist" />
      <Container className="rounded" style={{ backgroundColor: '#fff', marginBottom: '15px' }}>
        <Row className="justify-content-center">
          <img src={errorIcon} style={{ height: '275px' }} alt="HomeProtect question mark"></img>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state: GlobalState): any => {
  const { userInterface } = state;
  return { userInterface };
};

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ErrorPage));
