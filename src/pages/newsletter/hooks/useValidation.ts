import { useEffect, useState } from 'react';

type ValidationFn<T> = (v: T) => boolean;

export function useValidation<T>(value: T, validationFns: ValidationFn<T>[]): boolean {
    const [isValid, setIsValid] = useState(false);

    useEffect(function validate() {
        let iv = true;
        for (const fn of validationFns) {
            if (!fn(value)) {
                iv = false;
                break;
            }
        }
        setIsValid(iv);
    }, [value, validationFns]);

    return isValid;
}