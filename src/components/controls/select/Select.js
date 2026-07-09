import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import SelectBox from 'devextreme-react/select-box';

const Select = ({ attributes, onChange, ...props }) => {

    const onChangeWrapper = useCallback((event) => {
        event.attributes = attributes;
        onChange(event);
    }, [attributes, onChange]);

    return (
        <SelectBox
            onValueChanged={onChangeWrapper}
            searchEnabled={true}
            {...props}
        />
    );
};

Select.propTypes = {
    attributes: PropTypes.object,
    onChange: PropTypes.func
};

export default Select;