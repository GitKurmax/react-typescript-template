import React, {useCallback, useState} from 'react';
import {useDispatch} from "react-redux";
import TypesForPropsFunctionDeclaration from "./components/TypesForPropsFunctionDeclaration";
import TypesForPropsFunctionExpression from "./components/TypesForPropsFunctionExpression";

function App() {
    const dispatch = useDispatch()
    let [count1, setCount1 ] = useState(0)
    let [count2, setCount2 ] = useState(0)

    const onClickOne = () => {
        setCount1(count1 ? 0 : 1)
        dispatch({type: 'SET_COUNTER', payload: count1})
    }

    const onClickTwo = () => {
        setCount2(count2 ? 0 : 1)
    }


    return (
        <div className="App">
            <TypesForPropsFunctionDeclaration width={100} height={100} background={'red'} padding={15} margin={10} onClick={onClickOne}>
                <div>Types for props function declaration</div>
                <div>{count1}</div>
            </TypesForPropsFunctionDeclaration>
            <TypesForPropsFunctionExpression width={100} height={100} background={'green'} padding={15} margin={10} onClick={onClickTwo}>
                <div>Types for props function expression</div>
                <div>{count2}</div>
            </TypesForPropsFunctionExpression>
        </div>
    );
}

export default App;
