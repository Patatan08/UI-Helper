import * as axiosProvider from '../../helpers/providers/axiosProvider';
import * as requestTypes from '../../helpers/const/requestTypes';
import { BASE_API_URL } from "../../helpers/providers/configProvider";
import { getErrorMessage } from '../../helpers/formatters/errorFormatter';
import { startFetching, endFetching } from '../../features/dataFetching/slice';
import { setError } from 'features/error/slice';

//Middleware for api requests.
export const api = store => next => action => {
    if (action.request) {
            return processRequest(action.request, store);
    } else {
        next(action);
    }
};

//Process request.
async function processRequest(request, store) {
    store.dispatch(startFetching(request.url));
    return await processRequestByRequestType(request)
        .then((response) => {
            if (response.data.wasSuccesfull) {
                if (request.onSuccess !== undefined) {
                    if (Array.isArray(request.onSuccess))
                        Promise.all(request.onSuccess.map(func => store.dispatch(func(response.data.response))));
                    else
                        store.dispatch(request.onSuccess(response.data.response));
                }
                return response.data;
            }
            else {
                let errorMessage = response.data.error.message;
                if (request.onFailure !== undefined)
                    store.dispatch(request.onFailure());
                store.dispatch(setError(errorMessage));
                return response.data;
            }

        })
        .catch((error) => {
            let errorMessage = getErrorMessage(error);
            if (request.onFailure !== undefined)
                store.dispatch(request.onFailure());
            store.dispatch(setError(errorMessage));
        })
        .finally(() => {
            store.dispatch(endFetching(request.url));
        });
}

//Process reuqest ny request type.
async function processRequestByRequestType(request) {
    if (request.requestType === requestTypes.POST_REQUEST) {
        return await axiosProvider.post(request.url.includes(BASE_API_URL) ? request.url : BASE_API_URL + request.url, request.body ? request.body : {});
    }
}

export default api;
