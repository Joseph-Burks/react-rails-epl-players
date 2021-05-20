import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const PlayerCard = ({player, addLike}) => {

    const handleLike = () => {
        addLike(player)
    }

	return (
		<Card>
			<Image src={player.image} wrapped ui={false} />
			<Card.Content>
				<Card.Header>{player.name}</Card.Header>
				<Card.Meta>
					<span>{player.position}</span>
				</Card.Meta>
				<Card.Description>{player.team.name}</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<p>
					<Icon name='thumbs up outline' onClick={handleLike} />
					{player.likes} Likes
				</p>
			</Card.Content>
		</Card>
	);
};

export default PlayerCard;
