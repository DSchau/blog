import React from 'react'

import Post from './Post'

export default function Preview({ children, excerpt, title, to, ...rest }) {
  return (
    <Post html={excerpt} title={title} linkTo={to} preview={true} {...rest}>
      {children}
    </Post>
  )
}
