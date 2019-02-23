import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, animateScroll as scroll } from 'react-scroll'

import Logo from './Logo'

import defaultLogo from '../Image/logo.svg'

const Container = styled.nav`
  background-color: var(--off-white);
  position: sticky;
  top: 0px;
  width: 100%;
  height: 80px;
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.15);
`

const Content = styled.div`
  max-width: 1000px;
  padding: 0rem 3rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

const NavWrapper = styled.ul``

const NavLink = styled.li`
  display: inline;
  margin-left: 2rem;
  color: #333;
  float: left;

  &:hover {
    color: black;
    text-shadow: 0 0 3px #61dbfb;
    cursor: pointer;
  }

  & > .active {
    border-bottom: 2px solid #333;
  }
`

const Span = styled.span``

/**
 * Create a navbar containing a link list
 * that redirects to correct div
 *
 * @version 1.0.0
 * @author [Sam Barros](https://github.com/samaronybarros)
 */

class NavBar extends Component {
  static propTypes = {
    /**
     * The list of items in the Navbar
     */
    list: PropTypes.array.isRequired,
    /**
     * Logo of the App. If not informed the value will be
     * Image/logo.svg
     */
    logo: PropTypes.string
  }

  static defaultProps = {
    logo: defaultLogo // require('../Image/logo.svg')
  }

  scrollToTop = () => {
    scroll.scrollToTop()
  }

  render () {
    const { list, logo } = this.props

    return (
      <Container>
        <Content>
          <Logo logo={logo} alt={'Logo'} onClick={this.scrollToTop} width={150} height={150} />
          <NavWrapper>
            {list.map(l => (
              <NavLink key={l.id}>
                <Link
                  activeClass={'active'}
                  to={l.id}
                  spy
                  smooth
                  offset={-70}
                  duration={l.duration}
                >
                  {l.title}
                </Link>
              </NavLink>
            ))}
          </NavWrapper>
        </Content>
      </Container>
    )
  }
}

export default NavBar
