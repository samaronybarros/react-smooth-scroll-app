import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import * as serviceWorker from './serviceWorker'

import { NavBar, ListSection } from './Components'

import logo from './Image/everestate.svg'
import './Style/index.css'

import listItems from './Constants/fakeList'

const Application = styled.div`
  --off-white: #fafafa;
`
/**
 * Main Application
 *
 * @version 1.0.0
 * @author [Sam Barros](https://github.com/samaronybarros)
 */
class App extends Component {
  render () {
    return (
      <Application>
        <NavBar logo={logo} list={listItems} />
        <ListSection list={listItems} />
      </Application>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
