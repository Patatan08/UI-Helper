import errorTexts from '../const/errorTexts.json';

//Get error message from error.
export function getErrorMessage(error) {
    if (error === undefined) {
        return errorTexts.getAPIDataError;
    } else {
        if (error.response) {
            if (error.response.data) {
                return error.response.data;
            } else if (error.response.message) {
                return error.response.message;
            }
        }
        else if (error.data) {
            return error.data;
        } else if (error.message) {
            return error.message;
        }
    }
    return errorTexts.getAPIDataError;
}