import React, { useEffect, useState } from "react";
import { postAPI } from "../../services/postsService";
import PostItem from "./PostItem";

const PostContainer2 = () => {
  const [limit, setLimit] = useState(10);
  const {
    data: posts,
    isLoading,
    error,
    refetch,
  } = postAPI.useFetchAllPostsQuery(limit, {});

  useEffect(() => {
    /* const timerId = setTimeout(() => {
       setLimit(3);
     }, 2000);
 
     return clearInterval(timerId);*/
  }, [limit]);
  return (
    <div>
      <div>
        <button onClick={() => refetch()}>Refetch</button>
        {isLoading && <h1>Loading...</h1>}
        {error && <h2>Error ...</h2>}
        {posts &&
          posts.map((post, index) => <PostItem post={post} key={index} />)}
      </div>
    </div>
  );
};

export default PostContainer2;
