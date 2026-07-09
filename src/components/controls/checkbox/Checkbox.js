import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { CheckBox } from 'devextreme-react/check-box';

const Checkbox = ({ attributes, onChange, ...props }) => {

    const onChangeWrapper = useCallback((event) => {
        event.attributes = attributes;
        onChange(event);
    }, [onChange, attributes]);

    return (
        <CheckBox
            onValueChanged={onChangeWrapper}
            {...props}
        />
    );
};

Checkbox.propTypes = {
    attributes: PropTypes.object,
    onChange: PropTypes.func,
};

export default Checkbox;