import {useEffect, useState} from 'react'
export default function useTheme(key, defaultValue) {
    const [value, setValue] = useState(() => {
        try {
            const currentValue = localStorage.getItem(key);

            return currentValue !== null
                ? JSON.parse(currentValue)
                : defaultValue;
        } catch (error) {
            console.error(error);
            return defaultValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}