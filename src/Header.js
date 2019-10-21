import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <div className="App-header">
        <nav className="navbar navbar-default navbar-static-top justify-content-start">
          <ul className="nav nav-pills">
            <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/todos" activeClassName="active">ToDos</NavLink></li>
            <li><NavLink to="/comments" activeClassName="active">Comments</NavLink></li>
          </ul>
        </nav>
      </div>
    )
  }
}