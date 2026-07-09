import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import List from 'devextreme-react/list';
import DropDownBox from 'devextreme-react/drop-down-box';

const MultiSelect = ({ attributes, onChange, displayExpr, ...props }) => {
    const effectiveDisplayExpr = displayExpr || 'name';

    const onChangeWrapper = useCallback((event) => {
        event.attributes = attributes;
        if (props.selectedItemKeys !== undefined) {
            event.value = event.component.option("selectedItemKeys");
        } else if (props.selectedItems !== undefined) {
            event.value = event.component.option("selectedItems");
        }
        onChange(event);
    }, [onChange, props, attributes]);

    const listRender = useCallback(
        () => (
            <List
                onSelectionChanged={onChangeWrapper}
                selectionMode="multiple"
                displayExpr={effectiveDisplayExpr}
                searchExpr={effectiveDisplayExpr}
                searchEnabled={true}
                {...props}
            />
        ),
        [onChangeWrapper, props, effectiveDisplayExpr]
    );

    return (
        <DropDownBox
            contentRender={listRender}
            displayExpr={effectiveDisplayExpr}
            {...props}
        />
    );
};

MultiSelect.propTypes = {
    selectedItemKeys: PropTypes.array,
    selectedItems: PropTypes.array,
    attributes: PropTypes.object,
    onChange: PropTypes.func
};

export default MultiSelect;