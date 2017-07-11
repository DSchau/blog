import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { rhythm } from '../utils/typography';

import loadWebFonts from '../services/web-fonts';

import Content from '../components/Content';
import Header from '../components/Header';

import '../css/base.css';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  };

  componentDidMount() {
    loadWebFonts();
  }

  render() {
    const { children, location } = this.props;
    const isPost = location.pathname !== '/' && !location.pathname.match(/^\/blog\/?$/);

    return (
      <Root>
        <Helmet
          title="Dustin Schau - Blog"
          meta={[
            { name: 'description', content: 'The blog of the Omaha, Nebraska based front-end developer, Dustin Schau' },
            { name: 'keywords', content: 'Developer, javascript, programming, designer, angular, react, node, user experience, design, omaha, nebraska' },
          ]}
        />
        <Header isPost={isPost} />
        <Content isPost={isPost}>
          {children()}
        </Content>
      </Root>
    );
  }
}
