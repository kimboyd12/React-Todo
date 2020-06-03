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
            <div className="get-done">
                <p>What do you need to get done?</p>
            <form onSubmit={this.submitTask}>
                <input 
                type="text"
                value={this.state.task}
                name="task"
                onChange={this.changeHandler}
                />
                <button className="add-btn">Add Task </button>
            </form>
            </div>
        )
    }
}

export default TodoForm;