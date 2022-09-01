import React from 'react';

const DeleteButton = ({id, deleteTask}) => {
    function handleClick() {
        deleteTask(id);
    }
    return (
        <button onClick={handleClick}>
            Удалить
        </button>
    );
};

export default DeleteButton;