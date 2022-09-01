import "./IndexedDB";

const todo = [];

function createTask(text) {
    let newTaskId;
    newTaskId = todo.length < 1 ? 0 : todo.at(-1).id + 1;
    todo.push({
        id: newTaskId,
        isFinished: false,
        text: text,
    })
}

function updateTaskStatus(id){
    todo.forEach((task) => {
        if(task.id === id)
            task.isFinished = !task.isFinished;
    })
}

function deleteTask(id){
    const delTaskId = todo.findIndex((task) => task.id === id);
    todo.splice(delTaskId, 1)
}

export default { todo, createTask, updateTaskStatus, deleteTask };
