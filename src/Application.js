import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layouts/index';
import AddProductsPage from './pages/AddProducts';
import GoBack from './components/GoBack/GoBack';

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
				<Layout>
					<GoBack title="products" />
					<AddProductsPage />
				</Layout>
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
