export const validateUsername = (username) => {
    return username.length > 2 && username.length < 13;
};

export const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
};

export const validateConfirmEmail = (email, confirmEmail) => {
    return email === confirmEmail;
};

export const validateSubscribeForm = ({ username, email, confirmEmail }) => {
    const isUsernameValid = validateUsername(username);
    const isEmailValid = validateEmail(email);
    const isConfirmEmailValid = validateConfirmEmail(confirmEmail);

    return isUsernameValid && isEmailValid && isConfirmEmailValid;
}
