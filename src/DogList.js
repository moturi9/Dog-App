import React, { Component } from 'react'

import './DogList.css'

class DogList extends Component {
  render() {
    return (
      <div className="DogList">
        <h1 className="display-1 text-center mt-2 mb-5">Dog List</h1>
        <div className="container">
          <div className="row">
            {this.props.dogs.map(d => (
              <div className="Dog col-4 text-center" key={d.name}>
                <img src={d.src} alt={d.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

/* export the component to be used in other components */
export default DogList
