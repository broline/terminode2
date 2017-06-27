import reactDom from "react-dom";
import React from "react";
import Container from "./components/Container";
import { Provider } from "react-redux";
import createStore from "./create-store";

const store = createStore();
reactDom.render(
	(
		<Provider store={store}>
			<Container />
		</Provider>
	), document.getElementById("app"));