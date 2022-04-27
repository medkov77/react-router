import React, { useEffect } from "react";

import PostsList from "./postsList";
import Post from "./post";
import query from "query-string";
import _ from "lodash";

const Posts = ({ match, location }) => {
  const posts = [
    { id: 1, lable: "post1" },
    { id: 2, lable: "post2" },
    { id: 3, lable: "post3" },
  ];
  const search = query.parse(location.search);
  useEffect(() => console.log(search), [search]);
  const postId = match.params.postId;
  const cropPosts = search
    ? _(posts).slice(0).take(search.count).value()
    : posts;
  return (
    <>
      {postId ? (
        <Post posts={posts} id={postId} />
      ) : (
        <PostsList posts={cropPosts} />
      )}
    </>
  );
};
export default Posts;
