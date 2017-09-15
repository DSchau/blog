import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Content from '../components/Content'
import Footer from '../components/Footer'
import Header from '../components/Header'

import '../css/base.css'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func
  }

  render() {
    const { children, location } = this.props
    const isPost =
      location.pathname !== '/' && !location.pathname.match(/^\/blog\/?$/)

    return (
      <Root>
        <Helmet
          title="Dustin Schau - Blog"
          meta={[
            {
              name: 'description',
              content:
                'The blog of the Omaha, Nebraska based front-end developer, Dustin Schau'
            },
            {
              name: 'keywords',
              content:
                'Developer, javascript, programming, designer, angular, react, node, user experience, design, omaha, nebraska'
            }
          ]}
        />
        <Header isPost={isPost} />
        <Content isPost={isPost} Footer={Footer}>
          {children()}
        </Content>
      </Root>
    )
  }
}
