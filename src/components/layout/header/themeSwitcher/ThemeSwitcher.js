import React, { useCallback } from 'react';
import Button from 'devextreme-react/button';
import { useTheme } from '../../../../themes/themeContext';

export function ThemeSwitcher() {
    const { getTheme, getThemeData, setTheme } = useTheme();

    const themes = getThemeData();

    const currentTheme = getTheme();

    const onButtonClick = useCallback(() => {
        if (currentTheme === themes[0].value) //Check if light
            setTheme(themes[1].value);
        else
            setTheme(themes[0].value);
    }, [currentTheme, setTheme, themes]);

    return <div>
        <Button
            stylingMode='text'
            icon={`${currentTheme === themes[0].value ? 'moon' : 'sun'}`}
            onClick={onButtonClick} />
    </div>;
};