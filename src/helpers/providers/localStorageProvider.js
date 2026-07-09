export function setItemToLocalStorage(key, item) {
    localStorage.setItem(key, item);
}

export function getItemFromLocalStorage(key) {
    return localStorage.getItem(key);
}

export function removeItemFromLocalStorage(key) {
    localStorage.removeItem(key);
}