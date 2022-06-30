import './App.css';
import PostsBody from "./Components/PostsBody";
import AddForm from "./Components/AddForm";
import React, {useEffect, useState} from "react";
import PlaceHolderAPI from "./API/PlaceHolderAPI";
import AquamarineSelect from "./UI/AquamarineSelect";
function App() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const [postsOnPageLimit, setPostsOnPageLimit] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const [pages, setPages] = useState([1,2,3,4,5,6,7,8,9,10])
    const load = () => {
        setLoading(false);
    }

    function getPosts(){
        PlaceHolderAPI.fetchPosts(postsOnPageLimit, currentPage)
            .then(response => setPosts(response.data))
            .then(setTimeout(load, 300))
            .catch(error=>alert(error.message))
    }
    function getPages(){
        let pagesCount= Math.ceil(100/postsOnPageLimit)
        let pagesMass = []
        for(let i=0;i<pagesCount;i++){
            pagesMass[i]=i+1
        }
        setPages(pagesMass)
    }
    useEffect(() =>{
        setLoading(true)
        getPosts()
        getPages()
    }, [currentPage, postsOnPageLimit])

    const delPost = (id) =>{
        setPosts(posts.filter(e=> e.id !== id));
    }

    const addPost = (post) =>{
        setPosts([...posts,{id: Date.now(), ...post}])
    }
    const changePostsOnPageLimit = (event) =>{
        setPostsOnPageLimit(event.target.value)
    }
    const changeCurrentPage = (event) =>{
        setCurrentPage(event.target.value)
    }
    return (
        <div>
            <AquamarineSelect value={currentPage} selects={pages} onChange={changeCurrentPage}/>
            <AquamarineSelect value={postsOnPageLimit} selects={[5,10,20,50]} onChange={changePostsOnPageLimit}/>
            <AddForm addPost={addPost}/>
            {isLoading ? <div>Загрузка</div> : <PostsBody value={posts} del={delPost}/>}
            {posts.length === 0 && !isLoading ? <div>Нет постов</div> : null}
        </div>

    );
}

export default App;
