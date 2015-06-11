import alt from '../alt';

class TaskAction {

    postTask(task) {
        this.dispatch(task);
    }
}

export default alt.createActions(TaskAction);