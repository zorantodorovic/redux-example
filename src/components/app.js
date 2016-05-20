import React from 'react';
import { Component } from 'react';

import ArsFuturaTeam from '../containers/arsfutura_team';

export default class App extends Component {
  render() {
    return (
    	<div style={{marginTop: 20}}>
      		<div style={{paddingBottom: 20}}>Ars Futura in Redux</div>
      		<ArsFuturaTeam/>
      	</div>
    );
  }
}
