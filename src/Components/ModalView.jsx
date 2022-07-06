import React from 'react';
import Post from "./Post";
import style from '../Styles/ModalView.module.css'

const ModalView = ({post, theme, onClick, language}) => {
    const copyPost = () => {
      navigator.clipboard.writeText(post.id.toString() +"\n"+ post.title.toString() +"\n"+ post.body.toString())
          .then()
          .catch(err=>{
              console.log('Something went wrong', err.message)
          })
    }
    return (
        <div className={style.modal}
             onClick={onClick}>
            <div className={style.modal__content} >
                {post ? <Post post={post}
                              theme={theme}
                              buttonClick={copyPost}
                              onClick={(event)=>event.stopPropagation}
                              language={language}
                              variant={"inModal"}/>
                    : null}
            </div>
        </div>
    );
};

export default ModalView;