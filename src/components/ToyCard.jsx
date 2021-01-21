import React, { Component } from 'react';

class ToyCard extends Component {

  handleDelete = () => {
    fetch(`http://localhost:3000/todos/${this.props.id}`, {method: 'DELETE'})
    .then(resp => resp.json())
    .then(data => {
      this.props.deleteToy(this.props.id)
    })
  }

  render() {
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <img src={this.props.image} alt={this.props.name} className="toy-avatar" />
        <p>{this.props.likes} Likes </p>
        <button className="like-btn">Like {'<3'}</button>
        <button onClick={this.handleDelete} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
