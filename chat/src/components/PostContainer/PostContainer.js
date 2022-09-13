import React from "react";
import { postAPI } from "../../services/postsService";
import PostItem from "./PostItem";

const PostContainer = () => {
  const { data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery(5);
  return (
    <div>
      <div>
        {isLoading && <h1>Loading...</h1>}
        {error && <h2>Error ...</h2>}
        {posts &&
          posts.map((post, index) => <PostItem post={post} key={index} />)}
      </div>
    </div>
  );
};

export default PostContainer;
