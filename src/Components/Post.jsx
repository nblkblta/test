import React from 'react';
import Button from '../UI/Button'

const Post = ({post, buttonClick, onClick, theme, language, variant}) => {

    return (
        <div className={theme.post}
             onClick={()=>onClick(post.id)} >
            <div>
                <strong>{post.id + ". " + post.title}</strong>
                <div>{post.body}</div>
            </div>
            {variant==='inPostBody'
                ?<Button theme={theme}
                         onClick={(event)=>{event.stopPropagation();buttonClick(post.id)}}>
                    {language.delete}</Button>
                : null}
            {variant==='inModal'
                ?<Button theme={theme}
                         onClick={buttonClick}>
                    {language.copy}</Button>
                : null}

        </div>
    );
};

export default Post;