//bootstrapper that configures all layers or extended components

class diContainer {
    static _store = null;
    static _dataLayer = null;

    static bootstrap(store, datalayer) {
        this._store = store;
        this._dataLayer = datalayer;
    }

    static get store() {
        return this._store;
    }

    static get dataLayer() {
        return this._dataLayer;
    }
}

export default diContainer;