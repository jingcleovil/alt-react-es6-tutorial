import React from 'react';
import TaskAction from '../actions/TaskAction';

class Input extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.props = props;
        this._onChangeText = this._onChangeText.bind(this);
        this._onKeydown = this._onKeydown.bind(this);
    }

    _onChangeText(e) {
        this.setState({
            value: e.target.value
        })
    }

    _onKeydown(e) {
        if(e.keyCode == 13) {
            TaskAction.postTask(e.target.value);

            this.setState({
                value: ''
            })
        }
    }

    render() {
        return (
            <div>
                <input
                    onKeyDown={this._onKeydown}
                    style={{padding:5}}
                    onChange={this._onChangeText}
                    value={this.state.value}
                    type="text" placeholder="task here"
                    />
            </div>
        )
    }
}

export default Input;
