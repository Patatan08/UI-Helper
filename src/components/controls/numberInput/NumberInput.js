import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { NumberBox } from 'devextreme-react/number-box';

const NumberInput = ({ attributes, onChange, ...props }) => {

    const onChangeWrapper = useCallback((event) => {
        event.attributes = attributes;
        onChange(event);
    }, [onChange, attributes]);

    return (
        <NumberBox
            onValueChanged={onChangeWrapper}
            {...props}
        />
    );
};

NumberInput.propTypes = {
    attributes: PropTypes.object,
    onChange: PropTypes.func
};

export default NumberInput;