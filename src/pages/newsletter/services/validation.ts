const regexLetters = /^[a-zA-Z]+$/;
const regexEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export function containsOnlyLetters(value: string): boolean {
    return regexLetters.test(value);
}

export function isEmail(value: string): boolean {
    return regexEmail.test(value);
}