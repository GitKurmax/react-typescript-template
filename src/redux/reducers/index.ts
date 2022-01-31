import {store} from "../store";

const initialState = {
    count1: null,
    count2: null,
    inputRedux: 'default'
}

const rootReducer = (state: IState = initialState, action: {type:string, payload:any}) => {
    switch (action.type) {
        case 'SET_COUNTER':
            return {
                ...state,
                count1: action.payload
            }
        case 'SET_INPUT_VALUE':
            console.log(action.payload)
            return {
                ...state,
                inputRedux: action.payload
            }
        default:
            return state
    }
}

export default rootReducer
