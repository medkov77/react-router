import React from "react";

const PostsList = ({ posts }) => {
    console.log(posts);
    return (
        <>
            {posts.map(post => {
                return <h3 key={post.id}>{post.lable}</h3>;
            })}
        </>
    );
};
export default PostsList;
