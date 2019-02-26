import React, { Component } from 'react'
import styled from 'styled-components'

import { NavBar, ListSection } from '../../Components'

import logo from '../../Image/everestate.svg'
import '../../Style/index.css'

import listItems from '../../Constants/fakeList'

const AppWrapper = styled.div``
/**
 * Main Application
 *
 * @version 1.0.0
 * @author [Sam Barros](https://github.com/samaronybarros)
 */
class App extends Component {
  render () {
    return (
      <AppWrapper>
        <NavBar logo={logo} list={listItems} />
        <ListSection list={listItems} />
      </AppWrapper>
    )
  }
}

export default App
