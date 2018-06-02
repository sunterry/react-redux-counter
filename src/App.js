import React, { Component } from 'react';
import PropTypes from 'prop-types';
class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
         <div className="container">
           <h1 className="jumbotron-heading text-center">
	           {this.props.value.counter}
           </h1>
           <p className="text-center">
             <button className="btn btn-primary mr-2" onClick={this.props.onincrement}>
               increment
             </button>
	           <button className="btn btn-danger mr-2" onClick={this.props.ondecrement}>
		           decrement
	           </button>
           </p>
         </div>
      </div>
    );
  }
}
App.propTypes = {
	value: PropTypes.object.isRequired,
	onincrement: PropTypes.func.isRequired,
	ondecrement: PropTypes.func.isRequired
}
export default App;
