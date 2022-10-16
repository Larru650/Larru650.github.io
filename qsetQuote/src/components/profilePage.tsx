import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { GlobalState } from '../reducers/initialState';

const ProfilePage = (): JSX.Element => {
  return <p>Profile page - add your content here</p>;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapStateToProps = (state: GlobalState) => {
  const { userInterface } = state;
  return { userInterface };
};

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePage));
