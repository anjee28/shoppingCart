import React from 'react';
import Card from './Card';

function CompComponent(props) {
	return (
		<React.Fragment>
			<div className="flex gap-12">
				<div className="sideNav">
					<h1>Components</h1>
					<ul>
						{props.category.map((data) => (
							<li key={data.id} id={data.id}>
								<a href={data.url}>{data.name}</a>
							</li>
						))}
					</ul>
				</div>
				<div className="grow flex flex-col text-center">
					<div className="flex-none">
						<h1 className="uppercase">{props.data.name}</h1>
					</div>
					<div className="grow flex flex-wrap gap-4 mr-8">
						{props.data.data.map((data) => (
							<Card
								key={data.id}
								data={data}
								addToCart={props.addToCart}
							/>
						))}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default CompComponent;
