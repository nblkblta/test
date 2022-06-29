import './App.css';
import PostsBody from "./Components/PostsBody";
import AddForm from "./Components/AddForm";
import React, {useEffect, useState} from "react";
import PlaceHolderAPI from "./API/PlaceHolderAPI";
function App() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const [postsOnPageLimit, setPostsOnPageLimit] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)

    const load = () => {
        setLoading(false);
    }

    function getPosts(){
        PlaceHolderAPI.fetchPosts(postsOnPageLimit, currentPage)
            .then(response => setPosts(response.data))
            .then(setTimeout(load, 300))
            .catch(error=>alert(error.message))
    }
    useEffect(()=>{
        setLoading(true)
        getPosts()
    }, [currentPage, postsOnPageLimit])

    const delPost= (id)=>{
        setPosts(posts.filter(e=> e.id !== id));
    }

    const addPost = (post)=>{
        setPosts([...posts,{id: Date.now(), ...post}])
    }

    return (
        <div>
            <input value={currentPage} onChange={event => setCurrentPage(event.target.value)}/>
            <input value={postsOnPageLimit} onChange={event => setPostsOnPageLimit(event.target.value)}/>
            <AddForm addPost={addPost}/>
            {isLoading ? <div>Загрузка</div> : <PostsBody value={posts} del={delPost}/>}
            {posts.length === 0 && !isLoading ? <div>Нет постов</div> : null}
        </div>

    );
}

export default App;
