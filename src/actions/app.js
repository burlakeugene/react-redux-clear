export function loadSwitch(bool = true){
	return {
		type: 'LOAD_SWITCH',
		payload: {
			loading: bool
		}
	}
}