import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, configure } from 'enzyme'
// import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'

import App from '../MainApp/container'
import { Logo, ListSection } from '../Components'

import listItems from '../Constants/fakeList'

configure({ adapter: new Adapter() })

it('Renders without crashing', () => {
  shallow(<App />)
})

it('Should not rendering a logo without image', () => {
  const logo = shallow(<Logo />)
  expect(logo.logo).toBeFalsy()
})

it('App contains NavBar', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('NavBar')).toHaveLength(1)
})

it('App contains ListSection', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('ListSection')).toHaveLength(1)
})

it('ListSection contains Section', () => {
  const wrapper = shallow(<ListSection list={listItems} />)
  expect(wrapper.find('Section')).toHaveLength(listItems.length)
})
