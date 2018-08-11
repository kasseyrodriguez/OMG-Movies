import React, { Component } from 'react';
import Api from "./Api.js"
import Comedy from './Comedy';
import Romance from './Romance';
import Horror from './Horror';
import Animation from './Animation';
import Action from './Action';
import Drama from './Drama';





class Home extends Component {
  render() {
    return (
      
      <div>
        <Api />
        <Comedy />
        <Romance />
        <Horror />
        <Animation />
        <Action />
        <Drama />
      </div>
    );
  }
}

export default Home;
