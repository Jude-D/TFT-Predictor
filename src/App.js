import './App.css';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import React from 'react';
import championData from './set 5/champions.json';
import Images from './Images';

function App() {
	console.log(championData);
	return (
		<div className="Background container-fluid py-5">
			<h1 className="Title d-flex justify-content-center">
				Team Fight Tactics Composition Predictor
			</h1>
			<div className="BoardAndTraits">
				<div className="SynergyAndClass col-3"></div>
				<div className="Board col-9"></div>
			</div>
			<div className="Suggestion"></div>
			<div className="Units d-flex justify-content-center">
				<ul className="ListOfChamps">
					{championData.map((champion, id) => {
						const { name, championId, cost, traits } = champion;
						return (
							<Card className="Champion Cards">
								<li key={id}>
									<div>
										<CardTitle>{name}</CardTitle>
										<img src={Images[championId]} alt="" />
										<p>{cost}</p>
										<p>{traits[0]}</p>
										<p>{traits[1]}</p>
										<p>{traits[2]}</p>
									</div>
								</li>
							</Card>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default App;
