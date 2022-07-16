import React, { useEffect } from 'react';

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
					{cart.map((data) => (
						<div
							key={cart.indexOf(data)}
							className="flex gap-2 items-center bg-slate-300 py-1 px-4 my-1"
						>
							<div className="w-12 h-12">
								<img src={data.thumb} alt={data.model} />
							</div>
							<div className="grow">
								{data.id} - {data.brand} {data.model}
							</div>
							<div>$</div>
							<div className="ml-8 flex-none text-right p-0">
								<span>{data.price}</span>
							</div>
							<div>
								<button className="bg-sky-700 px-4 py-2 rounded-2xl">
									delete
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
			<div>
				<span>total: ${total}</span>
			</div>
		</div>
	);
}

export default Cart;
