import React from 'react';

const CompleteButton = ({id, isFinished, updateTaskStatus}) => {
    function handleClick() {
        updateTaskStatus(id);
    }
    return (
        <button onClick={handleClick}>
            {isFinished ? "Выполнено" : "Текущее"}
        </button>
    );
};

export default CompleteButton;