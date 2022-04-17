import React, {useEffect, useState} from 'react';
import '../styles/Blog.css';
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/modal/MyModal";
import PostForm from "../components/PostForm";

const Blog = () => {
    const [posts, setPosts] = useState([
        {id: 1, title: 'title1', content: 'content1'},
        {id: 2, title: 'title2', content: 'content2'},
        {id: 3, title: 'title3', content: 'content3'},
    ])
    const [modal, setModal] = useState(false)

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const cancelModal = () => {
        setModal(false)
    }

    return (
        <div className="blog">
            <h2 className="blog__title">Блог</h2>
            <PostList posts={posts}/>
            <div className="blog__btn">
                <MyButton onClick={() => setModal(true)} styleBtn="apply">Добавить</MyButton>
            </div>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} cancel={cancelModal}/>
            </MyModal>
        </div>
    );
};

export default Blog;