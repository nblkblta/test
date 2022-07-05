import React from 'react';
import Post from "./Post";
import style from '../Styles/ModalView.module.css'

const ModalView = ({post, del, theme, onClick}) => {
    return (
        <div className={style.modal}
             onClick={onClick}>
            <div className={style.modal__content} >
                {post ? <Post post={post}
                              theme={theme}
                              del={del}
                              onClick={(event)=>event.stopPropagation}/>
                    : null}
            </div>
        </div>
    );
};

export default ModalView;