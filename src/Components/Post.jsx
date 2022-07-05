import React from 'react';
import Button from '../UI/Button'

const Post = ({post, del, onClick, theme}) => {

    return (
        <div className={theme.post}
             onClick={()=>onClick(post.id)} >
            <div className={theme.id}>{post.id}</div>
            <div className={theme.title}>{post.title}</div>
            <div className={theme.body}>{post.body}</div>
            <Button theme={theme}
                    onClick={(event)=>{event.stopPropagation();del(post.id)}}>
                delete</Button>
        </div>
    );
};

export default Post;