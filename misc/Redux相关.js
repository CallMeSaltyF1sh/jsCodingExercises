function actionCreator(type, ...argNames) {
    return function (...args) {
        const action = { type };
        argNames.forEach((argName, index) => {
            action[argName] = args[index];
        });
        return action;
    }
}

function reducerCreator(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        } else {
            return state;
        }
    }
}

function applyMiddleware(...middlewares) {
    return createStore => (...reducers) => {
        const store = createStore(...reducers);
        let dispatch = store.dispatch;
        const middlewareAPI = {
            getState: store.getState,
            dispatch: (...args) => dispatch(...args)
        };
        const chain = middlewares.map(middleware => middleware(middlewareAPI));
        dispatch = compose(...chain)(store.dispatch);
        return {
            ...store,
            dispatch
        }
    }
}