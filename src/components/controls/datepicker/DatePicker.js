import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import DateBox from 'devextreme-react/date-box';

const DatePicker = ({ attributes, onChange, displayFormat = "dd-MM-yyyy", dateSerializationFormat = "yyyy-MM-ddTHH:mm:ss", ...props }) => {

    const onChangeWrapper = useCallback((event) => {
        event.attributes = attributes;
        onChange(event);
    }, [onChange, attributes]);

    return (
        <DateBox
            onValueChanged={onChangeWrapper}
            displayFormat={displayFormat}
            dateSerializationFormat={dateSerializationFormat}//format daty zwracanej w value
            {...props}
        />);
};

DatePicker.propTypes = {
    attributes: PropTypes.object,
    onChange: PropTypes.func
};

export default DatePicker;