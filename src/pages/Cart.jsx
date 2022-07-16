import React, { useEffect, useState } from 'react';

function Cart(props) {
	const cart = props.data;
	const total = props.total;

	return (
		<div className="mx-4">
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
						<div className="total">Total Price</div>
						<div className="remove">Remove</div>
					</div>
					{cart.map((data) => (
						<div key={data.id} className="cartItems">
							<div className="select">
								<input
									type="checkbox"
									name="select"
									id="select"
								/>
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
									<button id={data.id}>-</button>
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
									<button id={data.id} onClick={props.add}>
										+
									</button>
								</div>
							</div>
							<div className="total">Total Price</div>
							<div className="remove">
								<button>Remove</button>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="text-right">total: ${total}</div>
		</div>
	);
}

export default Cart;
