import React, {FC, ReactElement, CSSProperties} from 'react';

const styles: CSSProperties = {
    textAlign: 'center',
    margin: 20,
}

const Title: FC = ({children}): ReactElement => {
    return (
        <div style={styles}>
            {children}
        </div>
    );
};

export default Title;