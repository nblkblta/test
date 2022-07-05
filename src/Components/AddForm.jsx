import React, {useState} from 'react';
import addForm from "../Styles/addForm.module.css"
import Button from "../UI/Button";
import Input from "../UI/Input";


const AddForm = ({addPost, theme}) => {
    const [form, setForm] = useState({title: ``, body: ``})
    const setTitle = (title) => {
        setForm({...form, title: title})
    }
    const setBody = (body) => {
        setForm({...form, body: body})
    }
    const createPost = () => {
        addPost(form)
        setForm({title: ``, body: ``})
    }
    return (
        <div className={addForm.container}>
            <Input style={theme}
                   value={form.title}
                   onChange={setTitle}
                   placeholder={`Введите заголовок`}/>
            <Input style={theme}
                   value={form.body}
                   onChange={setBody}
                   placeholder={`Введите описание`}/>
            <Button style={theme}
                    onClick={createPost}>
                add
            </Button>
        </div>
    );
};

export default AddForm;