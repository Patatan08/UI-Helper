import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Toast } from 'devextreme-react/toast';
import * as baseValidator from '../../helpers/validators/baseValidator'
import { selectError } from 'features/error/selectors';
import { clearError } from 'features/error/slice';

const Error = () => {
    const dispatch = useDispatch();
    const error = useSelector(selectError);

    function onHiding() {
        dispatch(clearError());
    }

    return (
        <Toast
            visible={!baseValidator.isStringNullOrEmpty(error)}
            message={error}
            type={'error'}
            onHiding={onHiding}
            displayTime={5000}
        />
    );



};

export default Error;