import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import RadioGroup from 'devextreme-react/radio-group';

const RadioButton = ({ attributes, onChange, ...props }) => {

    const onChangeWrapper = useCallback((event) => {
        event.attributes = attributes;
        onChange(event);
    }, [onChange]);

    return (
        <RadioGroup
            onValueChanged={onChangeWrapper}
            {...props}
        />
    );
};

RadioButton.propTypes = {
    attributes: PropTypes.object,
    onChange: PropTypes.func
};

export default RadioButton;