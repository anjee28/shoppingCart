import { data } from 'autoprefixer';
import React from 'react';

function Card(props) {
	return (
		<div className="border bg-slate-200 p-2 flex flex-col justify-between w-52 h-80">
			<div>
				<a href={props.data.url}>
					<div className="">
						<img src={props.data.thumb} alt={props.data.model} />
					</div>
					<h4>
						{props.data.brand} {props.data.model}
					</h4>
				</a>
				<h4>${props.data.price}</h4>
			</div>
			<div
				id={props.data.id}
				className="bg-slate-700 text-white py-2 w-full"
				onClick={props.addToCart}
			>
				Add to Cart
			</div>
		</div>
	);
}

export default Card;
