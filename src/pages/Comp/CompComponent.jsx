import React from 'react';
import Card from './Card';

function CompComponent(props) {
	return (
		<React.Fragment>
			<div className="flex gap-12">
				<div className="sideNav">
					<h1>Components</h1>
					<ul>
						{props.comps.map((data) => (
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
					<div className="grow grid grid-cols-5 gap-4">
						{props.data.data.map((data) => (
							<Card key={data.id} data={data} />
						))}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default CompComponent;
