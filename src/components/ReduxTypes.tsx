import React, {ChangeEvent} from 'react';
import { useAppSelector, useAppDispatch } from '../shared/hooks'

const ReduxTypes = () => {
    const dispatch = useAppDispatch()
    const value = useAppSelector(state => state.inputRedux)

    const handleChange =  (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({type: 'SET_INPUT_VALUE', payload: e.target.value})
    }
    return (
        <div>
            <input value={value} onChange={handleChange}/>
            <p>Input value: <span>{value}</span></p>
        </div>
    );
};

export default ReduxTypes;