import initialState from './defaultsState/app.js';

var appReducer = function(state = initialState, action) {
    let newState = Object.assign({}, state);
    if (action.type === 'LOAD_SWITCH') {
        newState.loading = action.payload.loading;
        return newState;
    }
    return state;
}

export default appReducer;