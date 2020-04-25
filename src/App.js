import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import DogList from './DogList'
import whiskey from './images/whiskey.jpg'
import hazel from './images/hazel.jpg'
import tubby from './images/tubby.jpg'

import './App.css'

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: 'Whiskey',
        age: 5,
        src: whiskey,
        facts: [
          'Whiskey loves eating popcorn.',
          'Whiskey is a terrible guard dog.',
          'Whiskey wants to cuddle with you!'
        ]
      },
      {
        name: 'Hazel',
        age: 3,
        src: hazel,
        facts: [
          'Hazel has soooo much energy!',
          'Hazel is highly intelligent.',
          'Hazel loves people more than dogs.'
        ]
      },
      {
        name: 'Tubby',
        age: 4,
        src: tubby,
        facts: [
          'Tubby is not the brightest dog',
          'Tubby does not like walks or exercise.',
          'Tubby loves eating food.'
        ]
      }
    ]
  }
  render() {
    return (
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
      </Switch>
    )
  }
}

/* export the component to be used in other components */
export default App
