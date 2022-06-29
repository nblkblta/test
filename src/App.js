import './App.css';
import PostsBody from "./Components/PostsBody";
import AddForm from "./Components/AddForm";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [posts, setPosts] = useState(``);
    const [isLoading, setLoading] = useState(true)
    const fetchPosts = () =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setPosts(response.data))
            .then(setLoading(false))
            .catch(error=>alert(error.message))
    }

    useEffect(()=>{
        setLoading(true)

        setTimeout(fetchPosts,1000)
    }, [])

    const delPost= (id)=>{
        setPosts(posts.filter(e=> e.id !== id));
    }

    const addPost = (post)=>{
        setPosts([...posts,{id: Date.now(), ...post}])
    }

    return (
        <div>
            <AddForm addPost={addPost}/>
            {isLoading ? <div>Загрузка</div> : posts.length !== 0
                                ?  <PostsBody value={posts} del={delPost}/>
                                :  <div>Нет постов</div>
            }

        </div>

    );
}

export default App;
