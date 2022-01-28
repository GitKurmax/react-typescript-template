import React, {useEffect, useState} from 'react';
import {person} from "../shared/constants";

async function getPerson (id: number = 1): Promise<Person>{
    return await new Promise((resolve) => {
        return resolve(person)
    })
}

const Hooks = () => {
    const [person, setPerson] = useState<Person | null>()

    useEffect(() => {
        getPerson(1).then(data => setPerson(data))
    }, [])

    return (
        <div>
            {person?.name}
        </div>
    );
};

export default Hooks;