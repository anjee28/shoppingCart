import React from 'react';

function Card(props) {
	return (
		<div className=" bg-white p-2 flex flex-col w-52 h-[21rem] hover:shadow-lg hover:border">
			<div className="grow">
				<a href={props.data.url}>
					<div className="">
						<img src={props.data.thumb} alt={props.data.model} />
					</div>
					<div className="mt-1 text-left font-semibold">
						{props.data.brand} {props.data.model}
					</div>
				</a>
			</div>
			<div>
				<div className="text-left text-xl mb-2">
					${props.data.price}
				</div>
			</div>
			<div
				className="bg-sky-500 text-white py-2 w-full hover:bg-sky-300 cursor-pointer"
				onClick={() => props.addToCart(props.data.id)}
			>
				Add to Cart
			</div>
		</div>
	);
}

export default Card;
