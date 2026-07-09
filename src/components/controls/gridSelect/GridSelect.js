import React, { useState } from 'react';
import DataGrid, { FilterRow, Scrolling } from 'devextreme-react/data-grid';
import DropDownBox from 'devextreme-react/drop-down-box';

const GridSelect = ({ onChange, attributes, columns, gridWidth, gridHeight, dataSource, valueExpr, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);
    const customersContentRender = () => (
        <DataGrid
            dataSource={dataSource}
            columnAutoWidth
            hoverStateEnabled
            rowAlternationEnabled
            columns={columns}
            onRowClick={(e) => {
                console.log(e);
                setIsOpen(false);
                let newEvent = {
                    ...e,
                    attributes,
                    value: e.data[valueExpr]
                }
                onChange(newEvent)
            }}
            height={gridHeight}
        >
            <FilterRow
                visible
                applyFilter="Immediately"
            />
            <Scrolling mode="virtual" showScrollbar="always" scrollByContent={true} />
        </DataGrid>
    );
    // Safe event handling
    const handleOptionChanged = (e) => {
        if (e.name === 'opened') {
            setIsOpen(e.value);
        }
    };

    return (
        <DropDownBox
            dataSource={dataSource}
            valueExpr={valueExpr}
            opened={isOpen}
            onOptionChanged={handleOptionChanged}
            contentRender={customersContentRender}
            {...props}
        />
    )
}

export default GridSelect;