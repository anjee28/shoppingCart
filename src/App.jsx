import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import uniqid from 'uniqid';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import CompComponent from './pages/Comp/CompComponent';
//data
import { products } from './data';

function App() {
	const [cart, setCart] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);
	useEffect(() => {
		if (sessionStorage.length !== 0) {
			const cartSession = JSON.parse(sessionStorage.cart);
			setCart(cartSession);
			setCartTotal(sessionStorage.total);
		}
	}, []);

	const [category, setCategory] = useState([
		{
			id: 0,
			name: 'All Products',
			url: '/components',
			data: products,
		},
		{
			id: 1,
			name: 'Processors',
			url: '/components-cpu',
			data: products.filter(function (product) {
				return product.category == 'cpu';
			}),
		},
		{
			id: 2,
			name: 'Motherbaords',
			url: '/components-motheboard',
			data: products.filter(function (product) {
				return product.category == 'mboard';
			}),
		},
		{
			id: 3,
			name: 'RAM',
			url: '/components-ram',
			data: products.filter(function (product) {
				return product.category == 'ram';
			}),
		},
		/*{ id: 3, name: 'PSU', url: '/components-psu', data: [] },
		{ id: 4, name: 'Storage', url: '/components-storage', data: [] },
		{ id: 5, name: 'Graphics Card', url: '/components-gpu', data: [] },
		{ id: 6, name: 'Chassis', url: '/components-chassis', data: [] }, */
	]);

	//Add to cart Function
	const addToCart = (e) => {
		const cartTemp = [...cart];
		//find the index of the product from products data using id
		const index = products.findIndex((object) => {
			return object.id === parseInt(e.target.id);
		});

		//item is the product that matches the id
		const item = products[index];

		const newItem = {
			id: uniqid(),
			brand: item.brand,
			model: item.model,
			price: item.price,
			thumb: item.thumb,
			quantity: 1,
		};

		cartTemp.push(newItem);
		console.log(newItem);
		setCart(cartTemp);
		sessionStorage.setItem('cart', JSON.stringify(cartTemp));
		cartSum(cartTemp);
	};

	const cartSum = (cartTemp) => {
		const itemPrices = [];
		cartTemp.forEach((prices) => {
			itemPrices.push(prices.price * prices.quantity);
		});
		console.log(itemPrices);

		let sum = (...numbers) => {
			return numbers.reduce((prev, current) => prev + current);
		};
		const finalTotal = Math.round(sum(...itemPrices) * 100) / 100;
		console.log(finalTotal);
		setCartTotal(parseFloat(finalTotal));
		sessionStorage.setItem('total', finalTotal);
	};

	const addQuantity = (e) => {
		const cartTemp = [...cart];
		const id = e.target.id;
		const index = cartTemp.findIndex((object) => {
			return object.id === id;
		});
		cartTemp[index].quantity++;
		setCart(cartTemp);
		sessionStorage.setItem('cart', JSON.stringify(cartTemp));
		cartSum(cartTemp);
	};

	return (
		<React.Fragment>
			<div>
				<Router>
					<nav>
						<a href="./">Home</a>
						<ul className="navList">
							<li>
								<a href="./components">Components</a>
							</li>
							<li>
								<a href="./cart">Cart - {cart.length}</a>
							</li>
						</ul>
					</nav>

					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/cart"
							element={
								<Cart
									data={cart}
									total={cartTotal}
									add={addQuantity}
								/>
							}
						/>
						{category.map((data) => (
							<Route
								key={data.id}
								path={data.url}
								element={
									<CompComponent
										data={data}
										category={category}
										addToCart={(e) => addToCart(e)}
									/>
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
