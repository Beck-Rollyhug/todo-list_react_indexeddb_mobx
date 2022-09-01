import React, { useCallback, useState} from 'react';
import Task from "../task/task";
import store from "../../store/store";
import CreateTaskButton from "./create-task-button/create-task-button";
import "./list.scss"

const List = () => {
    const [todo, setTodo] = useState(store.todo);

    const createTask = useCallback((text) => {
        store.createTask(text);
        setTodo([...store.todo]);
    }, []);

    const updateTaskStatus = useCallback((id) => {
        store.updateTaskStatus(id);
        setTodo([...store.todo]);
    }, []);

    const deleteTask = useCallback((id) => {
        store.deleteTask(id);
        setTodo([...store.todo]);
    }, []);

    return (
        <div>
            <select>
                <option>Все</option>
                <option>Текущие</option>
                <option>Выполненные</option>
            </select>
            <div className="list">
                {todo.map((task) =>
                    <Task key={task.id}
                          id={task.id}
                          isFinished={task.isFinished}
                          text={task.text}
                          updateTaskStatus={updateTaskStatus}
                          deleteTask={deleteTask}
                    />
                )}
            </div>
            <CreateTaskButton createTask={createTask}/>
        </div>
    );
};

export default List;
