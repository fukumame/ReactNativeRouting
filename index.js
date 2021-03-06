import React, { Component } from 'react'
import {Scene, Router} from 'react-native-router-flux'
import PageOne from './PageOne.js'
import PageTwo from './PageTwo.js'

export default class ReactNativeRouting extends Component {
  render () {
    return (
      <Router>
        <Scene key="root">
          <Scene key="pageOne" component={PageOne} title="PageOne" initial={true} />
          <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
        </Scene>
      </Router>
    )
  }
}
