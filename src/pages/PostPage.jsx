import React, {useState} from 'react';
import '../styles/Blog.css';
import '../styles/PostPage.css';
import {useNavigate, useLocation} from "react-router-dom";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import MyTextarea from "../components/UI/textarea/MyTextarea";

const PostPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [post, setPost] = useState({id: location.state.id, title: location.state.title, content: location.state.content})

    return (
        <div className='blog post-page'>
            <MyButton onClick={() => navigate(-1)} styleBtn="apply">Назад</MyButton>
            <div className="post-page__title">Запись {post.title}</div>
            <div className="post-page__input">
                <MyInput
                    value={post.title}
                    onChange={event => setPost({...post, title: event.target.value})}
                    type="text"
                />
            </div>
            <div className="post-page__textarea">
                <MyTextarea
                    value={post.content}
                    onChange={event => setPost({...post, content: event.target.value})}
                    styleTxta="normal big"
                />
            </div>
            <div className="post-page__btns">
                <MyButton styleBtn="apply cancel">Удалить</MyButton>
                <MyButton styleBtn="apply">Сохранить</MyButton>
            </div>
        </div>
    );
};

export default PostPage;