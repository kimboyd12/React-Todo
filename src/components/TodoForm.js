import React from "react";

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            task: ""
        };
    }

    changeHandler = e => {
        this.setState({ task: e.target.value });
        // console.log(this.state.task);
    };

    submitTask = e => {
        e.preventDefault();
        this.props.addTask(e, this.state.task);
    }

    render() {
        return (
            <form onSubmit={this.submitTask}>
                <input 
                type="text"
                value={this.state.task}
                name="task"
                onChange={this.changeHandler}
                />
                <button>Add Task</button>
            </form>
        )
    }
}

export default TodoForm;