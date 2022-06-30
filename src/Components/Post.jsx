import React from 'react';
import style from '../Styles/Post.module.css'
import AquamarineButton from '../UI/AquamarineButton'
const Post = ({post, del}) => {

    return (
        <div className={style.post}  >
            <div>{post.id}</div>
            <div>{post.title}</div>
            <div>{post.body}</div>
            <AquamarineButton onClick={()=>del(post.id)}>delete</AquamarineButton>
        </div>
    );
};

export default Post;