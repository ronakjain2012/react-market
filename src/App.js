import React from "react";
import "./assets/style/scss/App.scss";
import { Provider } from "react-redux";
import store from "./store/index";

import Index from "./views/Index";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Index />
			</div>
		</Provider>
	);
}

export default App;
