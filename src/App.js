import './App.css';
import PostsBody from "./Components/PostsBody";
import AddForm from "./Components/AddForm";
import {useState} from "react";

function App() {
    const [posts, setPosts] = useState([{id: 1, title: `Заголовок 1`, body: 'Описание 1'},
                 {id: 2, title: `Заголовок 2`, body: 'Описание 2'},
                 {id: 3, title: `Заголовок 3`, body: 'Описание 3'},
                 {id: 4, title: `Заголовок 4`, body: 'Описание 4'},
                 {id: 5, title: `Заголовок 5`, body: 'Описание 5'},
                 {id: 6, title: `Заголовок 6`, body: 'Описание 6'},
                 {id: 7, title: `Заголовок 7`, body: 'Описание 7'},
                 {id: 8, title: `Заголовок 8`, body: 'Описание 8'}
    ]);
    const delPost= (id)=>{
        setPosts(posts.filter(e=> e.id !== id));
    }
    const addPost = (post)=>{
        setPosts([...posts,{id: Date.now(), ...post}])
    }
    return (
        <div>
            <AddForm addPost={addPost}/>
            {posts.length !== 0
                                ?  <PostsBody value={posts} del={delPost}/>
                                :  <div>Загрузка</div>
            }

        </div>

    );
}

export default App;
