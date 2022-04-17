import React from 'react';
import '../styles/Post.css';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const Post = (props) => {
    const navigate = useNavigate()

    return (
        <div className="post">
            <h3 className="post__title">{props.post.title}</h3>
            <div className="post__content">{props.post.content}</div>
            <MyButton onClick={() => navigate(`/${props.post.id}`, {state: props.post})} styleBtn="goto">перейти</MyButton>
        </div>
    );
};

export default Post;