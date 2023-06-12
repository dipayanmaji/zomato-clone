const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const checkEmali = (email) => {
    return validEmail.test(email);
}

export const checkFullName = (name) => {
    return name.length >= 2;
}

export const checkPassword = (password) => {
    return password.length >= 8;
}