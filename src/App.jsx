import React, { useState, useEffect } from 'react';
//import RouteSwitch from './RouteSwitch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import CompComponent from './pages/Comp/CompComponent';
//Assets
import { i3_10100, r3_3100 } from './assets';

function App() {
	const [cart, setCart] = useState([]);

	const [cpu, setCpu] = useState([
		{
			id: 0,
			brand: 'Intel',
			model: 'Core™ i3-10100',
			price: 110.99,
			scoket: '1200',
			architecture: 'Comet Lake',
			cores: 4,
			threads: 8,
			operatingFreq: 3.7,
			turboFreq: 4.4,
			L3Cache: '6MB',
			thumb: i3_10100,
			url: `./product-i3_10100`,
		},
		{
			id: 1,
			brand: 'AMD',
			model: 'Ryzen™ 3 3100',
			price: 133.95,
			scoket: 'AM4',
			architecture: 'Zen',
			cores: 4,
			threads: 8,
			operatingFreq: 3.6,
			turboFreq: 3.9,
			L3Cache: '16MB',
			thumb: r3_3100,
			url: `./product-cpu-r3_3100`,
		},
	]);

	const [comps, setComps] = useState([
		{ id: 0, name: 'Processors', url: '/components-cpu', data: cpu },
		{
			id: 1,
			name: 'Motherbaords',
			url: '/components-motheboard',
			data: [],
		},
		{ id: 2, name: 'RAM', url: '/components-ram', data: [] },
		{ id: 3, name: 'PSU', url: '/components-psu', data: [] },
		{ id: 4, name: 'Storage', url: '/components-storage', data: [] },
		{ id: 5, name: 'Graphics Card', url: '/components-gpu', data: [] },
		{ id: 6, name: 'Chassis', url: '/components-chassis', data: [] },
	]);

	return (
		<React.Fragment>
			<div>
				<Router>
					<nav>
						<a href="./">Home</a>
						<ul className="navList">
							<li>
								<a href="./components-cpu">Components</a>
							</li>
							<li>
								<a href="./about">Cart</a>
							</li>
						</ul>
					</nav>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<Cart />} />
						{comps.map((data) => (
							<Route
								key={data.id}
								path={data.url}
								element={
									<CompComponent data={data} comps={comps} />
								}
							/>
						))}
						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</Router>
			</div>
		</React.Fragment>
	);
}

export default App;
