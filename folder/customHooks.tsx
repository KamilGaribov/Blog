import { useState } from 'react';

const INITIAL_VALUE = 'light';

export const useLocalStorage = (key: string, INITIAL_VALUE: any) => {
    const [state, setState] = useState(() => {
        if (typeof window !== 'undefined') {
            const storage = window.localStorage.getItem(key);
            return storage ? JSON.parse(storage) : INITIAL_VALUE;
        }
    });
    const updateState = (value: any) => {
        window.localStorage.setItem(key, JSON.stringify(value));
        setState(value);
    };
    return [state, updateState];
};

export const useTheme = () => {
    const [mode, setMode] = useLocalStorage('theme', INITIAL_VALUE);
    return [mode, setMode];
};
