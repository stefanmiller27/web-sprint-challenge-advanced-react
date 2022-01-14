// write your custom hook here to control your checkout form

import { useState } from 'react';

export default function useForm(key, initialValue) {
    const [value, setValue] = useState(() => {

        const storedItem = key;

        return storedItem;
    })

    const setTheValue = value => {

        setValue(value);

    }

    return [value, setTheValue];
}