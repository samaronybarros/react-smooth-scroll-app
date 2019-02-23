import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Section from './Section'

/**
 * Create a list of <div>s Based on the Section
 *
 * @version 1.0.0
 * @author [Sam Barros](https://github.com/samaronybarros)
 */

class ListSection extends Component {
  static propTypes = {
    /**
     * The list of items in the section of the website
     */
    list: PropTypes.array.isRequired
  }

  render () {
    const { list } = this.props

    return list.map(l => (
      <Section key={l.id} id={l.id} title={l.title} text={l.text} dark={l.dark} />
    ))
  }
}

export default ListSection
