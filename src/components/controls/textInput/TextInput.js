import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import TextBox from 'devextreme-react/text-box';


const TextInput = ({ attributes, onChange, ...props }) => {

    const onChangeWrapper = useCallback((event) => {
        event.attributes = attributes;
        onChange(event);
    }, [attributes, onChange]);

    return (
        <TextBox
            onValueChanged={onChangeWrapper}
            {...props}
        />
    );
};

TextInput.propTypes = {
    attributes: PropTypes.object,
    onChange: PropTypes.func
};

export default TextInput;