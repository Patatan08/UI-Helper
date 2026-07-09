import React from 'react';
import { useSelector } from 'react-redux';
import { selectPendingRequests } from "features/dataFetching/selectors";
import { LoadIndicator } from 'devextreme-react/load-indicator';
import './Spinner.scss';

const Spinner = () => {
    const pendingRequests = useSelector(selectPendingRequests);

    if (pendingRequests.length > 0)
        return (
            <div className="loading">
                <LoadIndicator id="large-indicator" height={100} width={100} />
            </div>
        );
    else
        return null;
};

export default Spinner;