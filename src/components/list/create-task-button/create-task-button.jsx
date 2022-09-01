import React, {useState} from 'react';

const CreateTaskButton = ({createTask}) => {
    const [text, setText] = useState("");
    const [length, setLength] = useState(0);

    function handleChange(e) {
        setText(e.target.value);
    }
    function handleClick() {
        if(length > 0)
            createTask(text);
        else
            alert("Error: Empty task name")
    }
    return (
        <div className="create-task-b">
            <input onChange={(e) => {
                setLength(e.target.value.length)
                handleChange(e);
            }}/>
            <button onClick={() => handleClick()}>
                Создать
            </button>
        </div>
    );
};

export default CreateTaskButton;