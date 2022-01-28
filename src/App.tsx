import React, {useCallback, useState} from 'react';
import {useDispatch} from "react-redux";
import TypesForPropsFunctionDeclaration from "./components/TypesForPropsFunctionDeclaration";
import TypesForPropsFunctionExpression from "./components/TypesForPropsFunctionExpression";
import CustomInput from "./components/CustomInput";
import Hooks from "./components/Hooks";
import HooksWithUseReducer from "./components/HooksWithUseReducer";
import Title from "./components/Title";
import UseRefHook from "./components/UseRefHook";
import './App.css'
import Context from "./components/Context";

function App() {
    const dispatch = useDispatch()
    let [count1, setCount1 ] = useState<number>(0)
    let [count2, setCount2 ] = useState<number>(0)

    const onClickOne = () => {
        setCount1(count1 ? 0 : 1)
        dispatch({type: 'SET_COUNTER', payload: count1})
    }

    const onClickTwo = () => {
        setCount2(count2 ? 0 : 1)
    }

    return (
        <div className="App">
            <div className={'grid-item'}>
                <Title>
                    <div>Types for props function declaration</div>
                </Title>
                <TypesForPropsFunctionDeclaration width={100} height={100} background={'violet'} padding={15} margin={10} onClick={onClickOne}>
                    <div className={'counter'}>{count1}</div>
                </TypesForPropsFunctionDeclaration>
            </div>
            <div className={'grid-item'}>
                <Title>
                    <div>Types for props function expression</div>
                </Title>
                <TypesForPropsFunctionExpression width={100} height={100} background={'yellowgreen'} padding={15} margin={10} onClick={onClickTwo}>
                    <div className={'counter'}>{count2}</div>
                </TypesForPropsFunctionExpression>
            </div>
            <div className={'grid-item'}>
                <Title>
                    <div>Custom input</div>
                </Title>
                <CustomInput
                    disabled={false}
                    required={true}
                    maxLength={10}
                />
            </div>
            <div className={'grid-item'}>
                <Title>
                    <div>Hooks</div>
                </Title>
                <Hooks />
            </div>
            <div className={'grid-item'}>
                <Title>
                    <div>Hooks with useReducer</div>
                </Title>
                <HooksWithUseReducer />
            </div>
            <div className={'grid-item'}>
                <Title>
                    <div>useRef Hook</div>
                </Title>
                <UseRefHook />
            </div>
            <div className={'grid-item'}>
                <Title>
                    <div>Working with context</div>
                </Title>
                <Context />
            </div>
        </div>
    );
}

export default App;
