import React from "react";

const PostItem = ({ post }) => {
  return (
    <div>
      {post.id}, {post.title}
      <button>Delete</button>
    </div>
  );
};

export default PostItem;
