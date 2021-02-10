import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Catalogue from './components/Catalogue/Catalogue';

function App() {
	const state = [
		{
			currentViewingNow: 2,
			title: 'Ethnic Wear November 2017',
			lastOpened: 'Last opened 2 minutes ago',
			visitors: 16,
			unreadVisitors: 6,
			inquiries: 10,
			unreadInquiries: 2,
			productUrls: 'https://www.google.com',
			productCount: 14,
		},
	];
	const [catalogueState, setCatalogueState] = useState(state);

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
