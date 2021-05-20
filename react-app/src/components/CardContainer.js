import React from 'react';
import PlayerCard from './PlayerCard';
import { Card } from 'semantic-ui-react';

const CardContainer = ({players, addLike}) => {
	return (
		<Card.Group>
			{players.map(player => {
				return <PlayerCard key={player.id} player={player} addLike={addLike} />;
			})}
		</Card.Group>
	);
};

export default CardContainer;
