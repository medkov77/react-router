import PostsList from "./postsList";
import Post from "./post";
import { useParams } from "react-router-dom";
const Posts = () => {
    const params = useParams();
    const posts = [
        { id: 1, lable: "post1" },
        { id: 2, lable: "post2" },
        { id: 3, lable: "post3" },
    ];
    const { postId } = params;
    return (
        <>
            {postId ? (
                <Post posts={posts} id={postId} />
            ) : (
                <PostsList posts={posts} />
            )}
        </>
    );
};
export default Posts;
