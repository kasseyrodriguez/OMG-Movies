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
      <div class="ui vertical buttons">
    <button class="ui button" role="button"onClick={e => this.props.history.push("/")}>Home</button>
    <button class="ui button" role="button"onClick={e => this.props.history.push("/testing")}>Testing</button>
         </div>
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
