export function loadSwitch(show, mini){
	return {
		type: 'LOAD_SWITCH',
		payload: {
			show,
			mini
		}
	}
}

export function testFunc(){
	return {
		type: 'INC'
	}
}

// export function thunkTest(){
// 	return function(dispatch){
// 		dispatch({
// 			type: 'LOAD_SWITCH',
// 			payload: {
// 				loading: true
// 			}
// 		})
// 	}
// }