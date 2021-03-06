import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
//import Catalogue from './components/Catalogue/Catalogue';
import Catalogue from 'catalogue-qs';


function App() {
	const [catalogueState, setCatalogueState] = useState([{}]);

	useEffect(() => {
		axios
			.get('http://localhost:8080/catalogue/list')
			.then(res => {
				console.log(res.data.catalogueList);
				setCatalogueState(res.data.catalogueList);
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<div className="App">
			{catalogueState.map(catalogueProps => {
				return (
					<Catalogue
						key={Math.random() + new Date().toISOString()}
						{...catalogueProps}
					/>
				);
			})}
		</div>
	);
}

export default App;
