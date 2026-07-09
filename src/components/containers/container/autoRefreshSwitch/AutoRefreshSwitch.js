import React, { useCallback } from 'react';
import { Switch } from 'devextreme-react';
import './AutoRefreshSwitch.scss';

function AutoRefreshSwitch({ value, setValue }) {

    const valueChanged = useCallback((e) => {
        setValue(e.value);
    }, [setValue])

    return (
        <div className="auto-refresh-switch dx-field">
            <div className="dx-field-label">Odświeżanie danych</div>
            <div className="dx-field-value">
                <Switch value={value} onValueChanged={valueChanged} />
            </div>
        </div>
    );
}

export default AutoRefreshSwitch;