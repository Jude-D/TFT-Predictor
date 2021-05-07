import './App.css';
import { Button } from 'reactstrap';
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
			<div className="Units col-9">
				<ul className="ListOfChamps">
					{championData.map((champion, id) => {
						const { name, championId, cost, traits } = champion;
						return (
							<div className="Card">
								<li key={id}>
									<div>
										<p>{name}</p>
										<img src={Images[championId]} alt="" />
										<p>{cost}</p>
										<p>{traits}</p>
									</div>
								</li>
							</div>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default App;
