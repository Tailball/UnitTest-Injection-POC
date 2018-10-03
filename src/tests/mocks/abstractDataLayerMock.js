class abstractDataLayerMock {
    constructor() {
        this._todosAddWasCalled = false;
        this._todosAddArguments = undefined;

        this._todosRemoveWasCalled = false;
        this._todosRemoveArguments = false;
    }

    _todosAdd = (todo) => {
        this._todosAddArguments = todo;
        this._todosAddWasCalled = true;
    }

    _todosRemove = (id) => {
        this._todosRemoveArguments = id;
        this._todosRemoveWasCalled = true;
    }

    get todo() {
        return({
            add: this._todosAdd,
            remove: this._todosRemove,

            info: {
                todosAdd: {
                    wasCalled: this._todosAddWasCalled,
                    arguments: this._todosAddArguments
                },
                todosRemove: {
                    wasCalled: this._todosRemoveWasCalled,
                    arguments: this._todosRemoveArguments
                }
            }
        });
    }
}

export default abstractDataLayerMock;