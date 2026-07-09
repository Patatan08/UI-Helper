import { getItemFromLocalStorage, setItemToLocalStorage } from './localStorageProvider';

export const THEME_KEY = "mesDxTheme";

export const setThemeToLocalStorage = (theme) => {
    setItemToLocalStorage(THEME_KEY, theme);
};

export const getThemeFromLocalStorage = () => {
    return getItemFromLocalStorage(THEME_KEY);
}