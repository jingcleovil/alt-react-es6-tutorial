import React from 'react';
import Template from './Template';
import Input from './Input';
import TaskList from './TaskList';
import TaskStore from '../stores/TaskStore';

let getState = () => {
    return {
        tasks: TaskStore.getState().tasks
    }
}

class MainApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = getState();
        this.props = props;
        this._onListen = this._onListen.bind(this);
    }

    componentDidMount() {
        TaskStore.listen(this._onListen);
    }

    componentWillUnmount() {
        TaskStore.unlisten(this._onListen);
    }

    _onListen() {
        this.setState(getState());
    }

    render() {
        console.log(this.state.tasks);
        return (
            <div>
                <Input />
                <TaskList tasks={this.state.tasks}/>
            </div>
        )
    }
}

export default MainApp;