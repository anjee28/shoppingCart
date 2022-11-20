function Cart(props) {
	const cart = props.data;
	const total = props.total;

	function cartList() {
		if (cart.length === 0) {
			return <div className="text-center">Cart is Empty</div>;
		} else {
			return cart.map((data) => (
				<div key={data.id} className="cartItems">
					<div className="select">
						<input type="checkbox" name="select" id="select" />
					</div>
					<div className="product">
						<div className="h-16 py-2 px-2">
							<img
								className="h-full"
								src={data.thumb}
								alt={data.model}
							/>
						</div>
						<div>
							{data.brand} {data.model}
						</div>
					</div>
					<div className="unitPrice">
						<div>$</div>
						<div>{data.price}</div>
					</div>
					<div className="quantity">
						<div className="w-6 flex align-center justify-center">
							<button id={data.id} onClick={props.minus}>
								-
							</button>
						</div>
						<div className="flex-1 flex align-center justify-center">
							<input
								className="w-full text-center"
								type="text"
								value={data.quantity}
								readOnly
							/>
						</div>
						<div className="w-6 flex align-center justify-center">
							<button
								id={data.productId}
								onClick={() => props.add(data.productId)}
							>
								+
							</button>
						</div>
					</div>
					<div className="total">
						<div>$</div>
						<div>
							{Math.round(data.price * data.quantity * 100) / 100}
						</div>
					</div>
					<div className="remove">
						<button id={data.id} onClick={props.delete}>
							Remove
						</button>
					</div>
				</div>
			));
		}
	}

	return (
		<div className="mx-4 h-[86vh]">
			<div>
				<span>Shopping Cart</span>
			</div>
			<div>
				<div>
					<div className="flex gap-4 items-center h-16 mb-4 text-sm font-semibold border-sky-400 border border-t-0 border-x-0 border-b-2">
						<div className="select">Select</div>
						<div className="product justify-center">Product</div>
						<div className="unitPrice justify-center text-center">
							Unit Price
						</div>
						<div className="quantity">Quantity</div>
						<div className="total text-center">Total Price</div>
						<div className="remove">Remove</div>
					</div>
					{cartList()}
				</div>
			</div>
			<div className="text-right">total: ${total}</div>
		</div>
	);
}

export default Cart;
