import React from 'react';
import { Segment, Form, Input, Button } from 'semantic-ui-react';

export default class AddForm extends React.Component {
	state = {
		name: '',
		position: '',
		team_id: '',
		image: '',
		likes: 0,
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleAdd = (e) => {
		let player = {...this.state}
		this.props.addNewPlayer(player)
		e.target.reset()
	};

	render() {
		return (
			<Segment
				style={{
					marginTop: '10vh',
					marginLeft: '30vw',
					marginRight: '30vw',
					paddingLeft: '10vw',
					paddingRight: '10vw',
					textAlign: 'center',
				}}
			>
				<h1>Add Player</h1>
				<Form onSubmit={this.handleAdd} onChange={this.handleChange} >
					<Form.Field>
						<Input label='Name' name='name' />
					</Form.Field>
					<Form.Field>
						<Input label='Position' name='position' />
					</Form.Field>
					<Form.Field>
						<Input label='Team Name' name='team_id' />
					</Form.Field>
					<Form.Field>
						<Input label='Image URL' name='image' />
					</Form.Field>
					<Button primary>Add</Button>
				</Form>
			</Segment>
		);
	}
}
