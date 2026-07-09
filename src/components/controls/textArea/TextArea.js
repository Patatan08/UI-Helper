import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { TextArea } from 'devextreme-react/text-area';

const AreaText = ({ attributes, onChange, ...props }) => {

    const onChangeWrapper = useCallback((event) => {
        event.attributes = attributes;
        onChange(event);
    }, [onChange, attributes]);

    return (
        <TextArea
            onValueChanged={onChangeWrapper}
            {...props}
        />
    );
};

AreaText.propTypes = {
    attributes: PropTypes.object,
    onChange: PropTypes.func
};

export default AreaText;