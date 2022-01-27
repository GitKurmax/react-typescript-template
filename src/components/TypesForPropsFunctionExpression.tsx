import React, {FC} from 'react';

interface CardProps {
    width: number
    height: number
    background: string
    padding: number
    margin: number
    onClick: () => void
}

const TypesForPropsFunctionExpression: FC<CardProps> = (props): JSX.Element => {
    const {children, width, height, background, padding, margin, onClick} = props

    return (
        <div style={{width, height, background, padding, margin}} onClick={onClick}>
            {children}
        </div>
    );
}

export default TypesForPropsFunctionExpression

