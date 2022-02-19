export function getItem(name) {
    return localStorage.getItem(name);
}

export function setItem(name, item) {
    localStorage.setItem(name, item);
}

export function deleteItem(name) {
    localStorage.removeItem(name);
}
