import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Lienzo from './Lienzo';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route } from 'react-router-dom';

const RouterDelLienzo = (
		<BrowserRouter>
			<Route path="/" component={Lienzo}/>
		</BrowserRouter>
	); 

ReactDOM.render(RouterDelLienzo, document.getElementById('root'));
