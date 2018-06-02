import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './redux/reducers'
import {createStore} from 'redux';
import App from './App';

const store = createStore(rootReducer)
// store.subscribe(() => console.log(store.getState()));

const render = () => {
	ReactDOM.render(
		<App
			onincrement={() => store.dispatch({type: 'INCREMENT'})}
			ondecrement={() => store.dispatch({type: 'DECREMENT'})}
			value={store.getState()}
		/>,
		document.getElementById('root')
	)
};
render();
store.subscribe(render);

registerServiceWorker();
