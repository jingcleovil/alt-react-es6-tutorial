import alt from '../alt';
import TaskAction from '../actions/TaskAction';

class TaskStore {

    constructor() {
        this.bindListeners({
            handlePost: TaskAction.POST_TASK
        });

        this.tasks = [];
    }

    handlePost(task) {
        this.tasks.push(task);
    }
}

export default alt.createStore(TaskStore);