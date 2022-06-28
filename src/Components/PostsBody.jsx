import React from 'react';
import style from '../Styles/PostsBody.module.css'
import Post from "./Post";
const PostsBody = ({value, del}) => {
    return (
        <div className={style.container}>
            {value.map(post=><Post post={post} del={del} key={post.id}/>)}
        </div>
    );
};

export default PostsBody;