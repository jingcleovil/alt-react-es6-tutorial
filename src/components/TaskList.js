import React from 'react';
import TaskItem from './TaskItems';

class TaskList extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div>
                <h3>Task List Here</h3>
                <hr />
                <ul>
                    {Object.keys(this.props.tasks).map((item) => {
                        return (
                            <li>{this.props.tasks[item]}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default TaskList;
