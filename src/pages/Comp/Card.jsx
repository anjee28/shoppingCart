import { data } from 'autoprefixer';
import React from 'react';

function Card(props) {
	return (
		<div className="border bg-slate-200 p-2">
			<a href={props.data.url}>
				<div className="">
					<img src={props.data.thumb} alt={props.data.model} />
				</div>
				<h4>{props.data.model}</h4>
			</a>
			<h4>${props.data.price}</h4>
			<div className="rounded-full bg-slate-700 mx-8 text-white my-2 py-2">
				Add to Cart
			</div>
		</div>
	);
}

export default Card;
