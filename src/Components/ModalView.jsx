import React from 'react';
import Post from "./Post";

const ModalView = ({post, del}) => {
    return (
        <div>
            <Post post={post} del={del} key={post.id}/>
        </div>
    );
};

export default ModalView;