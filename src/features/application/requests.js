import * as requestTypes from "helpers/const/requestTypes";
import { BASE_API_URL } from "helpers/providers/configProvider";
import { clearInstallationDetails, setInstallationDetails, setSettings, clearSettings } from "./slice";

export function getInstallationDetails() {
    return {
        request: {
            authorized: true,
            requestType: requestTypes.POST_REQUEST,
            url: `${BASE_API_URL}admins/getInstallationDetails`,
            onSuccess: setInstallationDetails,
            onFailure: clearInstallationDetails
        }
    }
}

export function getSettings() {
    return {
        request: {
            authorized: true,
            requestType: requestTypes.POST_REQUEST,
            url: `${BASE_API_URL}admins/getSettings`,
            onSuccess: setSettings,
            onFailure: clearSettings
        }
    }
}