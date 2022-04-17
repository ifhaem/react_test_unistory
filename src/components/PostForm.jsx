import React, {useState} from 'react';
import '../styles/PostForm.css';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import MyTextarea from "./UI/textarea/MyTextarea";

const PostForm = ({create, cancel}) => {
    const [post, setPost] = useState({title: '', content: ''})

    const addNewPost = (event) => {
        event.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', content: ''})
    }

    const cancelModal = (event) => {
        event.preventDefault()
        cancel()
        setPost({title: '', content: ''})
    }

    return (
        <form className="post-form">
            <div className="post-form__input">
                <MyInput
                    value={post.title}
                    onChange={event => setPost({...post, title: event.target.value})}
                    type="text"
                    placeholder="title..."
                />
            </div>
            <div className="post-form__input">
                <MyTextarea
                    value={post.content}
                    onChange={event => setPost({...post, content: event.target.value})}
                    styleTxta="normal"
                    placeholder="content..."
                />
            </div>
            <div className="post-form__btns">
                <div>
                    <MyButton onClick={cancelModal} styleBtn="apply">Отмена</MyButton>
                </div>
                <div>
                    <MyButton onClick={addNewPost} styleBtn="apply">Сохранить</MyButton>
                </div>
            </div>
        </form>
    );
};

export default PostForm;