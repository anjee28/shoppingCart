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
				return product.category === 'cpu';
			}),
		},
		{
			id: 2,
			name: 'Motherbaords',
			url: '/components-motheboard',
			data: products.filter(function (product) {
				return product.category === 'mboard';
			}),
		},
		{
			id: 3,
			name: 'RAM',
			url: '/components-ram',
			data: products.filter(function (product) {
				return product.category === 'ram';
			}),
		},
		/*{ id: 3, name: 'PSU', url: '/components-psu', data: [] },
		{ id: 4, name: 'Storage', url: '/components-storage', data: [] },
		{ id: 5, name: 'Graphics Card', url: '/components-gpu', data: [] },
		{ id: 6, name: 'Chassis', url: '/components-chassis', data: [] }, */
	]);

	//Add to cart Function
	const addToCart = (id) => {
		const cartTemp = [...cart];

		const indexCart = cartTemp.findIndex((object) => {
			return object.productId === parseInt(id);
		});

		//find the index of the product from products data using id
		const indexItem = products.findIndex((object) => {
			return object.id === parseInt(id);
		});

		//item is the product that matches the id
		const item = products[indexItem];
		console.log(id);

		if (cartTemp[indexCart] === undefined) {
			//creats new entry to the cart
			const newItem = {
				id: uniqid(),
				productId: item.id,
				brand: item.brand,
				model: item.model,
				price: item.price,
				thumb: item.thumb,
				quantity: 1,
			};

			cartTemp.push(newItem); //adds the new entry to the cart
			setCart(cartTemp);
			sessionStorage.setItem('cart', JSON.stringify(cartTemp));

			cartSum(cartTemp); //computes the total amount of the cart
		} else {
			addQuantity(id);
		}
	};

	const cartSum = (cartTemp) => {
		const itemPrices = [];
		let finalTotal;
		cartTemp.forEach((prices) => {
			itemPrices.push(prices.price * prices.quantity);
		});

		let sum = (...numbers) => {
			return numbers.reduce((prev, current) => prev + current);
		};

		if (itemPrices.length === 0) {
			finalTotal = 0;
		} else {
			finalTotal = Math.round(sum(...itemPrices) * 100) / 100;
		}

		setCartTotal(parseFloat(finalTotal));
		sessionStorage.setItem('total', finalTotal);
	};

	const addQuantity = (id) => {
		const cartTemp = [...cart];
		const productId = id;
		console.log(cartTemp);
		console.log(productId);
		const index = cartTemp.findIndex((object) => {
			return object.productId === parseInt(productId);
		});
		cartTemp[index].quantity++;
		setCart(cartTemp);
		sessionStorage.setItem('cart', JSON.stringify(cartTemp));
		cartSum(cartTemp);
	};

	const subtractQuantity = (e) => {
		const cartTemp = [...cart];
		const id = e.target.id;
		const index = cartTemp.findIndex((object) => {
			return object.id === id;
		});
		if (cartTemp[index].quantity === 1) {
			deleteEntry(e);
		} else {
			cartTemp[index].quantity--;
			setCart(cartTemp);
			sessionStorage.setItem('cart', JSON.stringify(cartTemp));
			cartSum(cartTemp);
		}
	};

	const deleteEntry = (e) => {
		const cartTemp = [...cart];
		const id = e.target.id;
		const index = cartTemp.findIndex((object) => {
			return object.id === id;
		});
		cartTemp.splice(index, 1);
		setCart(cartTemp);
		sessionStorage.setItem('cart', JSON.stringify(cartTemp));
		cartSum(cartTemp);
	};

	return (
		<React.Fragment>
			<Router>
				<nav>
					<div className="logo">
						<div
							className="home"
							onClick={(event) => (window.location.href = './')}
						>
							<svg idth="32px" height="32px" viewBox="0 0 24 24">
								<path
									fill="currentColor"
									d="M6,2C4.89,2 4,2.89 4,4V12C4,13.11 4.89,14 6,14H18C19.11,14 20,13.11 20,12V4C20,2.89 19.11,2 18,2H6M6,4H18V12H6V4M4,15C2.89,15 2,15.89 2,17V20C2,21.11 2.89,22 4,22H20C21.11,22 22,21.11 22,20V17C22,15.89 21.11,15 20,15H4M8,17H20V20H8V17M9,17.75V19.25H13V17.75H9M15,17.75V19.25H19V17.75H15Z"
								/>
							</svg>
							<span>ezPC</span>
						</div>
					</div>
					<div className="navs">
						<div className="navLinks">
							<div
								className="components"
								onClick={(event) =>
									(window.location.href = './components')
								}
							>
								<span>Components</span>
							</div>
							<div
								className="components"
								onClick={(event) =>
									(window.location.href = './components')
								}
							>
								<span>Peripherals</span>
							</div>
							<div
								className="components"
								onClick={(event) =>
									(window.location.href = './components')
								}
							>
								<span>Accessories</span>
							</div>
						</div>
						<div
							className="cart"
							onClick={(event) =>
								(window.location.href = './cart')
							}
						>
							<span>Cart - {cart.length}</span>
						</div>
					</div>
				</nav>
				<div className="mainBody">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/cart"
							element={
								<Cart
									data={cart}
									total={cartTotal}
									add={addQuantity}
									minus={subtractQuantity}
									delete={deleteEntry}
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
										addToCart={addToCart}
									/>
								}
							/>
						))}
						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</div>
				<div className="bg-sky-500 h-[6vh]"></div>
			</Router>
		</React.Fragment>
	);
}

export default App;
