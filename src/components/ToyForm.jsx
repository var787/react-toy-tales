import React, { Component } from "react";

class ToyForm extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			image: "",
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const newToy = {
			name: this.state.name,
			image: this.state.image,
			likes: 0,
		};

		const reqObj = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(newToy),
		};

		fetch("http://localhost:3000/toys", reqObj)
			.then((resp) => resp.json())
			.then((toy) => {
				this.setState({
					name: "",
					image: "",
				});
				this.props.addToy(toy);
			});
	};

	render() {
		return (
			<div className="container">
				<form className="add-toy-form" onSubmit={this.handleSubmit}>
					<h3>Create a toy!</h3>
					<input
						type="text"
						name="name"
						placeholder="Enter a toy's name..."
						className="input-text"
						value={this.state.name}
						onChange={this.handleChange}
					/>
					<br />
					<input
						type="text"
						name="image"
						placeholder="Enter a toy's image URL..."
						className="input-text"
						value={this.state.image}
						onChange={this.handleChange}
					/>
					<br />
					<input
						type="submit"
						name="submit"
						value="Create New Toy"
						className="submit"
					/>
				</form>
			</div>
		);
	}
}

export default ToyForm;
