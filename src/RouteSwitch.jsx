import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Cart from './components/Cart';
import Shop from './components/Shop';
import Home from './components/Home';

function RouteSwitch() {
	return (
		<Router>
			<Routes>
				<Route path="/about" element={<Cart />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="./" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default RouteSwitch;
