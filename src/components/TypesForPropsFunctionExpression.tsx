import React, {FC, ReactElement} from 'react';

// You can also replace ReactElement with JSX.Element
interface CardProps {
    width: number
    height: number
    background: string
    padding: number
    margin: number
    onClick: () => void
}

const TypesForPropsFunctionExpression: FC<CardProps> = (props):  ReactElement => {
    const {children, width, height, background, padding, margin, onClick} = props

    return (
        <div style={{width, height, background, padding, margin}} onClick={onClick}>
            {children}
        </div>
    );
}

export default TypesForPropsFunctionExpression

