import React, { Component } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import DogDetail from './DogDetail'
import DogList from './DogList'

class Routes extends Component {
  render() {
    const getDog = props => {
      let name = props.match.params.name
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      )
      return <DogDetail {...props} dog={currentDog} />
    }
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/dogs"
            render={() => (
              <div className="display-1">
                <DogList dogs={this.props.dogs} />
              </div>
            )}
          />
          <Route exact path="/dogs/:name" render={getDog} />
          <Redirect to="/dogs" />
        </Switch>
      </div>
    )
  }
}

/* export the component to be used in other components */
export default Routes
