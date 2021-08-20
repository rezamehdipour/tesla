import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Redux
import store from './redux/store';
import { Provider } from 'react-redux';

// Components
import Home from './components/Home';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Home />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
