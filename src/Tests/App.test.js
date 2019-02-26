import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, configure } from 'enzyme'
// import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'

import App from '../MainApp/container'
import { Logo } from '../Components'

configure({ adapter: new Adapter() })

it('Renders without crashing', () => {
  shallow(<App />)
})

it('Shoul not rendering a logo without image', () => {
  const logo = shallow(<Logo />)
  expect(logo.logo).toBeFalsy()
})

it('App contains NavBar', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('NavBar')).toHaveLength(1)
})
