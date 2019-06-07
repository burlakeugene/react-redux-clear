import initialState from './defaultsState/app.js';

var appReducer = function(state = initialState, action) {
    let newState = Object.assign({}, state);
    if (action.type === 'LOAD_SWITCH') {
        if(typeof action.payload.show !== 'undefined' && state.loading.show !== action.payload.show) newState.loading.show = action.payload.show;
        if(typeof action.payload.mini !== 'undefined' && state.loading.mini !== action.payload.mini) newState.loading.mini = action.payload.mini;
        return newState;
    }
    if (action.type === 'INC') {
        newState.test++;
        return newState;
    }
    return state;
}

export default appReducer;