import React from 'react';
import ToyCard from './ToyCard'

class ToyContainer extends React.Component{
  renderToys = () => {
    return this.props.toysArr.map(toyObj => {
      return <ToyCard key={toyObj.id} {...toyObj} deleteToy={this.props.deleteToy}  /> 
    })
  }

  
  
  render(){
    return(
      <div id="toy-collection">
        {this.renderToys()}
      </div>
    );
    }
  }


export default ToyContainer;
