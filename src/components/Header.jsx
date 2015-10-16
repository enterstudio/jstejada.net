
import React from 'react';
import Nav from './Nav';
import 'styles/Header';

export default class Header extends React.Component {

  render() {
    return (
      <div className="Header">
        <Nav />
      </div>
    );
  }
}
