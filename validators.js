export function notNullOrEmpty(value) {
    if (value == undefined || value === '' || value == null) {
        return false;
    }
    else {
        return true;
    }
}
export function isValidNumber(value) {
    if (notNullOrEmpty(value)) {
        return !isNaN(value);
    }
    else {
        return false;
    }
}
export function isValidDate(value) {
    return !isNaN(Date.parse(new Date(value)));
}
