import './App.css';
import PostsBody from "./Components/PostsBody";
import React, {useCallback, useEffect, useState} from "react";
import PlaceHolderAPI from "./API/PlaceHolderAPI";
import AquaMarineTheme from "./Styles/AquaMarineStyle.module.css";
import BlackTheme from "./Styles/BlackStyle.module.css";
import ModalView from "./Components/ModalView";
import Select from "./UI/Select";

function App() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const [postsOnPageLimit, setPostsOnPageLimit] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [pages, setPages] = useState([1,2,3,4,5,6,7,8,9,10])
    const [modalNumber, setModalNumber] = useState(0)
    const Themes = [AquaMarineTheme, BlackTheme]
    const [theme, setTheme] = useState(Themes[0])

    const getPosts = useCallback(()=>{
        PlaceHolderAPI.fetchPosts(postsOnPageLimit, currentPage)
            .then(response => setPosts(response.data))
            .then(setTimeout(()=>{setLoading(false)}, 300))
            .catch(error=>alert(error.message))
    },[postsOnPageLimit, currentPage])

    const getPages = useCallback(()=> {
        let pagesCount= Math.ceil(100/postsOnPageLimit)
        let pagesMass = []
        for(let i=0;i<pagesCount;i++){
            pagesMass[i]=i+1
        }
        setPages(pagesMass)
    }, [postsOnPageLimit])

    useEffect(() =>{
        setLoading(true)
        getPosts()
        getPages()
    }, [currentPage, postsOnPageLimit])

    const delPost = (id) =>{
        setPosts(posts.filter(e=> e.id !== id));
    }

    const changePostsOnPageLimit = (event) =>{
        setPostsOnPageLimit(event.target.value)
    }

    const changeCurrentPage = (event) =>{
        setCurrentPage(event.target.value)
    }
    const hideModal = () => {
        setModalNumber(0)
    }
    const showModal = (id) =>{
        setModalNumber(id)
    }
    const changeTheme = (event) =>{
        setTheme(Themes[event.target.value-1])
    }

    return (
        <div>
            {isLoading
                ? <div>Загрузка</div>
                : <div>
                    <PostsBody theme={theme}
                                  value={posts}
                                  del={delPost}
                                  showModal={showModal}/>
                    <Select theme={theme}
                            value={currentPage}
                            selects={pages}
                            onChange={changeCurrentPage}/>
                    <Select theme={theme}
                            value={postsOnPageLimit}
                            selects={[5,10,20,50]}
                            onChange={changePostsOnPageLimit}/>
                    <Select theme={theme}
                            selects={[1,2]}
                            onChange={changeTheme}/>
                </div>
            }

            {posts.length === 0 && !isLoading
                ? <div>Нет постов</div>
                : null}

            {modalNumber
                ? <ModalView theme={theme}
                             post={posts[modalNumber-1]}
                             onClick={hideModal}
                             del={delPost}/>
                : null}
        </div>

    );
}

export default App;
