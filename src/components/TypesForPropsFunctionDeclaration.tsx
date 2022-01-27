import React, {PropsWithChildren} from 'react';

interface CardProps {
    width: number
    height: number
    background: string
    padding: number
    margin: number
    onClick: () => void
}

function TypesForPropsFunctionDeclaration(props: PropsWithChildren<CardProps>): JSX.Element {
    const {children, width, height, background, padding, margin, onClick} = props

    return (
        <div style={{width, height, background, padding, margin}} onClick={onClick}>
            {children}
        </div>
    );
}

export default TypesForPropsFunctionDeclaration;