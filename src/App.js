import React, { Component } from 'react';
import CatComponent	from './CatComponent.js';
//why does one component have to be in brackets and the other does not?
import {GraceHopperQuoteComponent} from './GraceHopperQuoteComponent.js'
import MouseComponent from './MouseComponent.js'
// import React, { CatComponent } from 'react';
// import React, { GraceHopperQuoteComponent } from 'react';

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseComponent />
				{/* one more component missing */}
			</div>
		);
	}
}

export default App;
