import { add } from '../redux/actions/todo/add';
import { remove } from '../redux/actions/todo/remove';

//implementation is hidden outside of this file
const todosAdd = (store) => (todo) => { //CURRYING
    store.dispatch(add(todo));
}

const todosRemove = (store) => (id) => { //CURRYING
    store.dispatch(remove(id));
}

//only this class is exposed
class abstractDataLayer {
    constructor(store) {
        this._store = store;
    }

    get todo() {
        return ({
            add: todosAdd(this._store),
            remove: todosRemove(this._store)
        });
    }
}

export default abstractDataLayer;