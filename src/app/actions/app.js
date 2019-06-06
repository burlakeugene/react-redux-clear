export function loadSwitch(bool = true){
	return {
		type: 'LOAD_SWITCH',
		payload: {
			loading: bool
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