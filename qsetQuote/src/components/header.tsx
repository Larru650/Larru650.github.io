import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import './header.scss';

export function Header(): JSX.Element {
  return (
    <Switch>
      <Route component={HeaderComp} />
    </Switch>
  );
}

function HeaderComp(): JSX.Element {
  return (
    <header className="hp-header container">
      <NavLink to="/">
        <div className="hp-logo"></div>
      </NavLink>
    </header>
  );
}
