import './App.css';
import PostsBody from "./Components/PostsBody";
import AddForm from "./Components/AddForm";
import React, {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const [totalPosts, setTotalPosts] = useState(0)
    const [postsOnPageLimit, setPostsOnPageLimit] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)
    const fetchPosts = () =>{
         axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {setPosts(response.data);setTotalPosts(response.data.length)})
            .then(setTimeout(load, 300))
            .catch(error=>alert(error.message))
    }

    const load = () => {
        setLoading(false);
    }
    useEffect(()=>{
        setLoading(true)
        fetchPosts()
    }, [])

    const delPost= (id)=>{
        setPosts(posts.filter(e=> e.id !== id));
        setTotalPosts(prev => prev -1)
    }

    const addPost = (post)=>{
        setPosts([...posts,{id: Date.now(), ...post}])
    }

    return (
        <div>
            <input value={currentPage} onChange={event => setCurrentPage(event.target.value)}/>
            <input value={postsOnPageLimit} onChange={event => setPostsOnPageLimit(event.target.value)}/>
            <AddForm addPost={addPost}/>
            {isLoading ? <div>Загрузка</div> : <PostsBody value={posts.slice((currentPage-1)*postsOnPageLimit,(currentPage-1)*postsOnPageLimit+postsOnPageLimit)} del={delPost}/>}
            {posts.length === 0 && !isLoading ? <div>Нет постов</div> : null}
            <div>Всего постов: {totalPosts}</div>
        </div>

    );
}

export default App;
