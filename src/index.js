import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Redux
import store from "./redux/store";
import { Provider } from "react-redux";

// Components
import Home from "./components/Home";

ReactDOM.render(
	<Provider store={store}>
		<Home />
	</Provider>,
	document.getElementById("root")
);
