import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layouts/index';
import AddProductsPage from './pages/AddProducts';
import ProdcutsInventoryPage from './pages/ProdcutsInventoryPage';
import GoBack from './components/GoBack/GoBack';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import './scss/global.scss';
import './scss/backgrounds.scss';
import './scss/utils/flex.scss';
import './scss/utils/sizing.scss';
import './scss/containers.scss';
import './scss/utils/border.scss';
import './scss/text-colors.scss';
import './scss/utils/spacing.scss';
import './scss/input-fields.scss';

class Application extends Component {

	render() {
		return(
			<div className="application">
				<Router>
					<Layout>
						<GoBack title="products" />
						<Switch>
							<Route path="/add-product" component={AddProductsPage} />
							<Route path="/inventory" component={ProdcutsInventoryPage} />
						</Switch>
					</Layout>
				</Router>
			</div>
		)
	}
}

ReactDOM.render(
	<React.StrictMode>
	  <Application />
	</React.StrictMode>,
	document.getElementById('root')
);

export default Application;
