import React, {useState} from 'react';
import '../styles/PostList.css';
import Post from "./Post";

const PostList = ({posts}) => {

    return (
        <div className="post-list">
            {posts.map((post) =>
                <Post
                    post={post}
                    key={post.id}
                />
            )}
        </div>
    );
};

export default PostList;