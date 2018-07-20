var saveToLocalStorange = function(storageName, data){
  localStorage.setItem(storageName, data);
};

var userReducer = function(state, action) {
  if (state === undefined) {
    state = {};
    state.users = JSON.parse(localStorage.getItem('users') || '[]');
  }
  let newState = Object.assign({}, state);
  if (action.type === 'ADD_USER') {
    newState.users.unshift(action.payload.user);
    newState.users = [...newState.users];
    saveToLocalStorange('users', JSON.stringify(newState.users));
    return newState;
  }
  if (action.type === 'REMOVE_USER') {
    let user = action.payload.user,
        indexToRemove = newState.users.findIndex(e => e.id == user.id);
    newState.users.splice(indexToRemove , 1);
    newState.users = [...newState.users];
    saveToLocalStorange('users', JSON.stringify(newState.users));
    return newState;
  }
  if (action.type === 'FAVORITE_USER') {
    let user = action.payload.user,
        indexToUpdate = newState.users.findIndex(e => e.id == user.id);
    newState.users[indexToUpdate].favorite = !newState.users[indexToUpdate].favorite;
    newState.users = [...newState.users];
    saveToLocalStorange('users', JSON.stringify(newState.users));
    return newState;
  }
  return state;
}

export default userReducer;