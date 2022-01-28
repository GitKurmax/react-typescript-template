import React, {ReactEventHandler, useEffect, useReducer} from 'react';
import {person} from "../shared/constants";

type State = {
    data: Person | null;
    loading: boolean;
    error: Error | null;
}

type Action = {
    type: 'request'
} | {
    type: 'response',
    payload: Person
}

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'request':
            return {
                ...state,
                loading: true
            }
        case 'response':
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        default:
            return state
    }
}

async function getPerson(dispatch: React.Dispatch<Action>): Promise<Person> {
    return await new Promise<Person>((resolve) => {
        dispatch({type: 'request'})
        setTimeout(() => {
            resolve(person)
        }, 2000)
    })
}

const HooksWithUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {loading: false} as State)

    const onClick: ReactEventHandler = async () => {
        const response = await getPerson(dispatch)
        dispatch({type: 'response', payload: response})
    }

    return (
        <div>
            {state.loading
                ? <div>...Loading</div>
                : <>
                    <button onClick={onClick}>Get person</button>
                    <div>{state?.data?.name}</div>
                </>
            }
        </div>
    );
};

export default HooksWithUseReducer;