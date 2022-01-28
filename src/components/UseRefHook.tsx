import React, {useEffect, useRef} from 'react';

const UseRefHook = () => {
    const refDiv = useRef<HTMLDivElement>(null)
    const refNum = useRef<number>(0)

    useEffect(() => {
        console.log(refDiv.current)
    }, [refDiv.current])

    useEffect(() => {
        const id = setInterval(() => {
            console.log(refNum.current)
            if (refNum.current === 5) clearInterval(id)
            return refNum.current += 1
        }, 1000)
        return () => clearInterval(id)
    }, [])

    return (
        <div ref={refDiv}>
            HTML
        </div>
    );
};

export default UseRefHook;