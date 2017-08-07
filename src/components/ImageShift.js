import React, { Component } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';

const Image = styled.img`
  display: block;
  max-width: 100%;
  filter: ${(props) => {
    const definedHeight = document.body.clientHeight;
    if (props.scrollHeight === document.body.scrollHeight) {
      return 1;
    }
    return props.y / props.scrollHeight;
  }};
`;

export default class ImageShift extends Component {
  constructor(props) {
    super(props);

    this.state = {
      y: 0,
      scrollHeight: 0
    };
  }

  componentDidMount() {
    this.scrollListener = this.handleScroll();
    this.handleResize = this.handlePageResize();
    addEventListener('scroll', this.scrollListener);
    addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    removeEventListener('scroll', this.scrollListener);
    removeEventListener('resize', this.handleResize);
  }

  handleScroll() {
    return debounce(ev => {
      requestAnimationFrame(() => {
        this.setState({
          y: document.body.clientHeight + document.body.scrollTop
        });
      });
    }, 10);
  }

  handlePageResize() {
    return debounce(() => {
      this.setHeight();
    }, 25);
  }

  setHeight() {
    const { documentElement: html, body } = document;

    this.setState({
      scrollHeight: Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight)
    });
  }

  render() {
    const { src } = this.props;
    const { scrollHeight, y } = this.state;
    return (
      <Image src={src} y={y} scrollHeight={scrollHeight} onLoad={() => this.setHeight()}/>
    );
  }
}
