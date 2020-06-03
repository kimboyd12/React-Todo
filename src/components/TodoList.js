import React from "react";

import Todo from "./Todo";

const TodoList = props => {
    return (
        <div className="todo-list">
            <h5>click task to mark as completed</h5>
            {props.tasks.map(task => (
                <Todo key={task.id} task={task} toggleTask={props.toggleTask} />
            ))}
        <button className="clear-btn" onClick={props.clearCompleted}>
        ✔️Clear Completed Tasks
        </button>
        </div>
    )
}

export default TodoList;