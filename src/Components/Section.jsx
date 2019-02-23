import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  background: ${props => (props.dark ? '#333' : '#FFF')};
  color: ${props => (props.dark ? '#FFF' : '#333')};
`

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
`

const Title = styled.h1`
  text-align: center;
`

const Paragraph = styled.p`
  text-align: justify;
`

/**
 * Creates a Section to input an information .
 *
 * @version 1.0.0
 * @author [Sam Barros](https://github.com/samaronybarros)
 */

class Section extends Component {
  static propTypes = {
    /**
     * The ID of the content that will be the target of the link.
     */
    id: PropTypes.string.isRequired,
    /**
     * Title of the Document
     */
    title: PropTypes.string.isRequired,
    /**
     * text of the section
     */
    text: PropTypes.string.isRequired,
    /**
     * Indicates if the body of the Container
     * should be dark or not
     */
    dark: PropTypes.bool
  }

  static defaultProps = {
    dark: false
  }

  render () {
    const { id, title, text, dark } = this.props

    return (
      <Container dark={dark}>
        <Content id={id}>
          <Title>{title}</Title>
          <Paragraph>{text}</Paragraph>
        </Content>
      </Container>
    )
  }
}

export default Section
