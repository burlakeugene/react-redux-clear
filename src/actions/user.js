export function addUser(user){
	return {
		type: 'ADD_USER',
		payload: {
			user: user
		}
	}
}

export function removeUser(user){
	return {
		type: 'REMOVE_USER',
		payload: {
			user: user
		}
	}
}

export function toggleFavorite(user){
	return {
		type: 'FAVORITE_USER',
		payload: {
			user: user
		}
	}
}