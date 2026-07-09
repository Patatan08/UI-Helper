import React from 'react';
import { useLocation } from 'react-router';

const locationTranslations = [
    { id: "/index", name: "Strona główna" },
    { id: "/view1", name: "Widok 1" },
    { id: "/view2", name: "Widok 2" },
];

export const NavigationIndicator = () => {
    const location = useLocation();

    const currentLocationName = locationTranslations.find(translation => location.pathname.includes(translation.id))?.name || "";

    return (
        <div>
            <span style={{ marginLeft: "30px" }}>{currentLocationName}</span>
        </div>
    );
};