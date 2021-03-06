import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Style from '../../Style'

const Image = styled.img`
  height: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};

  &:hover {
    cursor: pointer;
  }
`
/**
 * Create a Logo .
 *
 * @version 1.0.0
 * @author [Sam Barros](https://github.com/samaronybarros)
 */
class Logo extends Component {
  static propTypes = {
    /**
     * The path of the logo picture.
     */
    logo: PropTypes.string.isRequired,
    /**
     * Specifies an alternate text for an image
     */
    alt: PropTypes.string,
    /**
     * Gets called when the user clicks on the image
     */
    onClick: PropTypes.func,
    /**
     * Logo's width
     */
    width: PropTypes.number,
    /**
     * Logo's heigth
     */
    height: PropTypes.number
  }

  static defaultProps = {
    alt: 'Logo',
    width: Style.logoDefaultWidth,
    height: Style.logoDefaultHeight
  }

  render () {
    const { logo, alt, onClick, width, height } = this.props

    return <Image src={logo} alt={alt} onClick={onClick} width={width} height={height} />
  }
}

export default Logo
