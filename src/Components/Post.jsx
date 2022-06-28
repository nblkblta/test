import React from 'react';
import style from '../Styles/Post.module.css'
import AquamarineButton from '../UI/AquamarineButton'
const Post = (props) => {

    return (
        <div className={style.post}  >
            <div>{props.post.id}</div>
            <div>{props.post.title}</div>
            <div>{props.post.body}</div>
            <AquamarineButton onClick={()=>props.del(props.post.id)}>del</AquamarineButton>
        </div>
    );
};

export default Post;