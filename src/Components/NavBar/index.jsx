import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link, animateScroll as scroll } from 'react-scroll'

import Logo from '../Logo'

import defaultLogo from '../../Image/logo.svg'
import Style from '../../Style'

const Container = styled.nav`
  background-color: ${Style.navBgColor};
  position: sticky;
  top: 0px;
  width: 100%;
  height: 80px;
  box-shadow: 0 4px 14px 0 ${Style.navShadowColor};
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
  color: ${Style.navTextColor};
  float: left;

  &:hover {
    color: ${Style.hoverTextColor};
    text-shadow: 0 0 3px ${Style.hoverShadowColor};
    cursor: pointer;
  }

  & > .active {
    border-bottom: 2px solid ${Style.navTextColor};
  }
`

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
          <Logo logo={logo} onClick={this.scrollToTop} width={150} height={150} />

          <NavWrapper>
            {list.map(l => (
              <NavLink key={l.id}>
                <Link to={l.id} spy smooth offset={-70} duration={l.duration}>
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
