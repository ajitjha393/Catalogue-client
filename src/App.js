import React, { useState } from 'react';

import './App.css';
import Catalogue from './components/Catalogue/Catalogue';

function App() {
	const state = {
		currentViewingNow: 3,
		title: 'Ethnic Wear November 2017',
		lastOpened: 'Last opened 2 mins ago',
		visitors: 16,
		unreadVisitors: 6,
		inquiries: 10,
		unreadInquiries: 2,
		productUrls: 'https://www.google.com',
		productCount: 14,
	};

	const [catalogueProps, setCatalogueProp] = useState(state);

	return (
		<div className="App">
			<Catalogue {...catalogueProps} />
		</div>
	);
}

export default App;
