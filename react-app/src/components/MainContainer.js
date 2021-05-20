import React from 'react';
import CardContainer from './CardContainer';
import AddForm from './AddForm';

export default class MainContainer extends React.Component {
	state = {
		players: [],
	};

	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<h1>Premeir League Players</h1>
				<CardContainer players={this.state.players} />
				<AddForm />
			</div>
		);
	}
}
