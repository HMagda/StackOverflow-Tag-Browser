import React from 'react';

const TagList = ({ tags }) => {
  return (
    <ul>
      {tags.map(tag => (
        <li key={tag.name}>{tag.name} - posts: {tag.count}</li>
      ))}
    </ul>
  );
}

export default TagList;
