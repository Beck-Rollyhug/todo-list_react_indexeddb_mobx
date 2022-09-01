import CompleteButton from "./complete-button/complete-button";
import DeleteButton from "./delete-button/delete-button";
import "./task.scss";

const Task = ({id, isFinished, text, updateTaskStatus, deleteTask}) => {
    return (
        <div className="task">
            <CompleteButton id={id} isFinished={isFinished} updateTaskStatus={updateTaskStatus}/>
            <p>{text}</p>
            <DeleteButton id={id} deleteTask={deleteTask}/>
        </div>
    );
};

export default Task;