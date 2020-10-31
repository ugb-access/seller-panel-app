import './index.css';
import * as serviceWorker from './serviceWorker';

const jQuery = require('jquery')
window.jQuery = jQuery;

require('./Application')

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
