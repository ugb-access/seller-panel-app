import React, { Component } from 'react';
import Layout from './Layouts/index';
import Dashboard from './pages/Dashboard';
import './scss/global.scss';
import './scss/backgrounds.scss';


class Application extends Component {

	render() {
		return(
			<div className="application">
				<Layout>
					<Dashboard />
				</Layout>
			</div>
		)
	}
}

export default Application;
