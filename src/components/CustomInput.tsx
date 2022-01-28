import React, {ChangeEvent, ChangeEventHandler, ReactEventHandler} from 'react';

const CustomInput = (props: React.HTMLProps<HTMLInputElement>) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e)
    }

    /* Another way to define event type
        const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
            console.log(e)
        }
    */

    const onClick: ReactEventHandler = (e) => {
        console.log(e)
    }


    return (
        <input
            onClick={onClick}
            onChange={onChange}
            placeholder="Custom input"
            className={"my-input"}
            {...props}
        />
    );
};

export default CustomInput;