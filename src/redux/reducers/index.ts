const initialState = {
    count1: null,
    count2: null,
}

export default (state = initialState, action: {type:string, payload:any}) => {
    switch (action.type) {
        case 'SET_COUNTER':
            return {
                ...state,
                count1: action.payload
            }
        default:
            return state
    }
}