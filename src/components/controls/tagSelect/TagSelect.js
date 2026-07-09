import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import TagBox from 'devextreme-react/tag-box';

const TagSelect = ({ attributes, onChange, ...props }) => {

    const onChangeWrapper = useCallback((event) => {
        event.attributes = attributes;
        onChange(event);
    }, [onChange]);

    return (
        <TagBox
            onValueChanged={onChangeWrapper}
            {...props}
        />
    );
};

TagSelect.propTypes = {
    attributes: PropTypes.object,
    onChange: PropTypes.func
};

export default TagSelect;