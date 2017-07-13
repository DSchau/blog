import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import Preview from '../components/Preview';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`list-style-type: none;`;

export default function Tags({ pathContext }) {
  const { posts, tag } = pathContext;
  if (tag) {
    return (
      <div>
        {tag.map(post => {
          return (
            <Preview
              key={post.id}
              html={post.excerpt.slice(0, 150) + '...'}
              date={post.frontmatter.date}
              title={post.frontmatter.title}
              to={post.frontmatter.path}
            />
          );
        })}
      </div>
    );
  }
  return (
    <List>
      {Object.keys(posts).map(tagName => {
        return (
          <ListItem key={tagName}>
            <Link to={`/tags/${tagName}`}>
              {tagName}
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
}
