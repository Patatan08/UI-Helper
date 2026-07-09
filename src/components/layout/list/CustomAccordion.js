import React, { useCallback } from 'react';
import { Accordion } from 'devextreme-react/accordion';
import moment from 'moment';

const CustomAccordion = ({ data, itemTitleRender, columns, onItemRendered }) => {

    const formatDate = useCallback((dateString, format) => {
        return moment.utc(dateString).format(format);
    }, []);

    const formatValue = useCallback((value, column) => {
        if (column.dataType === "date" || column.dataType === "dateTime") {
            const isUTC = column.dataType === "dateTime";
            return formatDate(value, column.format, isUTC);
        }
        return value;
    }, [formatDate]);

    const renderItemContent = useCallback((item) => {
        return (
            <div className="row align-items-start">
                {columns.map((column) => (
                    <div className="col-lg-4 col-sm-6 my-2" key={column.dataField}>
                        <strong>{column.caption}:</strong> {formatValue(item[column.dataField], column)}
                    </div>
                ))}
            </div>
        );
    }, [columns, formatValue]);

    return (
        <Accordion
            dataSource={data}
            itemTitleRender={itemTitleRender}
            itemRender={renderItemContent}
            collapsible
            onItemRendered={onItemRendered}
            animationDuration={300}
            multiple
        />
    );
};

export default CustomAccordion;
