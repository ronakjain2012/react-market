import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DynamicImport from "./components/utils/DynamicImport";
import ComponentLoad from "./components/utils/ComponentLoad";	

const IndexPage = (props) => (
	<DynamicImport load={() => import("./views/pages/Index")}>
		{(Component) =>
			Component === null ? <ComponentLoad /> : <Component {...props} />
		}
	</DynamicImport>
);

const Routes = (props) => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={IndexPage} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;