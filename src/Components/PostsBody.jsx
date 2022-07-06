import React from 'react';

import Post from "./Post";
const PostsBody = ({value, del, theme, showModal, language}) => {
    return (
        <div className={theme.container}>
            {value.map(post=><Post post={post}
                                   buttonClick={del}
                                   key={post.id}
                                   theme={theme}
                                   onClick={showModal}
                                   language={language}
                                   variant={'inPostBody'}/>)}
        </div>
    );
};

export default PostsBody;