import React from 'react';

import Post from './Post';

/*
 * TODO: do not parse HTML, get raw markdown
 */
export default function Preview({
  children,
  html,
  limit = 400,
  title,
  to,
  ...rest
}) {
  let intro = html.split('<p>')
    .filter(tag => tag.trim().charAt(0) !== '<')  
    .slice(1)
    .shift()
    .replace('</p>/', '...');
  if (intro.length > limit) {
    intro = intro.slice(0, limit).trim() + '...';
  }
  return <Post html={`<p>${intro}</p>`} title={title} linkTo={to} preview={true} {...rest}>{children}</Post>
}
