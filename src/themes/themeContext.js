import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { currentTheme, refreshTheme } from 'devextreme/viz/themes';
import * as themeProvider from '../helpers/providers/themeProvider';


const getThemeData = () => ([
    { text: "Blue Light", value: "light.compact" },
    { text: "Blue Dark", value: "dark.compact" }
]);

const ThemeContext = createContext({});
const useTheme = () => useContext(ThemeContext);

function ThemeProvider({ theme, ...props }) {


    const [_theme, setTheme] = useState(theme);

    const getTheme = useCallback(() => _theme || themeProvider.getThemeFromLocalStorage() || "light.compact", [_theme]);

    const applyBaseTheme = useCallback((theme, themeMarker) => {
        for (let index in document.styleSheets) {
            let styleSheet = document.styleSheets[index],
                href = styleSheet.href;
            if (href) {
                let themeMarkerPosition = href.indexOf(themeMarker);
                if (themeMarkerPosition >= 0) {
                    let startPosition = themeMarkerPosition + themeMarker.length,
                        endPosition = href.indexOf(".css"),
                        fileNamePart = href.substring(startPosition, endPosition);
                    if (fileNamePart === theme) {
                        for (let i = 0; i < styleSheet.cssRules.length; i++) {
                            let cssRule = styleSheet.cssRules.item(i)
                            if (cssRule?.selectorText === ".dx-theme-accent-as-text-color") {
                                document.documentElement.style.setProperty('--base-accent', cssRule.style.color)
                            }
                        }

                    }
                    styleSheet.disabled = fileNamePart !== theme;
                }
            }
        }
    }, [])

    const applyAdditionalThemeVariables = useCallback((accent) => {
        if (accent === 'light') {
            document.documentElement.style.setProperty('--base-border-color', "#F3F3F3")
            document.documentElement.style.setProperty('--base-bg', "rgba(0, 0, 0, 0.16)")
            document.documentElement.style.setProperty('--icon-color', "rgba(0, 0, 0, 0.54)")
        } else {
            document.documentElement.style.setProperty('--base-border-color', "#464650")
            document.documentElement.style.setProperty('--base-bg', "rgba(255, 255, 255, 0.10)")
            document.documentElement.style.setProperty('--icon-color', "rgba(255, 255, 255, 0.87)")
        }
    }, [])

    const applyTheme = useCallback((theme) => {
        theme = getTheme();

        applyBaseTheme(theme, "dx.material.")

        let accent = theme?.includes("light") ? "light" : "dark";
        applyAdditionalThemeVariables(accent);

        themeProvider.setThemeToLocalStorage(theme);
        currentTheme('material.' + theme);
        refreshTheme();
    }, [getTheme, applyBaseTheme, applyAdditionalThemeVariables]);


    useEffect(() => setTheme(getTheme()), [setTheme, getTheme]);

    useEffect(() => { applyTheme(_theme) }, [_theme, applyTheme]);

    return (
        <ThemeContext.Provider
            value={{ getThemeData, getTheme, setTheme }}
            {...props}
        />
    );
}


export {
    ThemeProvider,
    useTheme
}




