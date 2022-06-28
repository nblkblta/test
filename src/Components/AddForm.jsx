import React, {useState} from 'react';
import AquamarineButton from '../UI/AquamarineButton'
import AquamarineInput from '../UI/AquamarineInput'

const AddForm = ({addPost}) => {
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
        <div>
            <AquamarineInput value={form.title}
                             onChange={setTitle}
                             placeholder={`Введите заголовок`}/>
            <AquamarineInput value={form.body}
                             onChange={setBody}
                             placeholder={`Введите описание`}/>
            <AquamarineButton onClick={createPost}>add</AquamarineButton>
        </div>
    );
};

export default AddForm;