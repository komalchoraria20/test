import React from "react";

const Tags = ({ tags }) => {
  if (tags.length === 0) {
    return null;
  }
  return (
    <div
      className="tags"
      title={tags.join(", ")}
    >
      <span className="tag">{tags[0]}</span>
      {tags.length > 1 && <span className="tag">{tags[1]}</span>}
      {tags.length > 2 && <span className="count">+{tags.length - 2}</span>}
    </div>
  );
};

export default Tags;
