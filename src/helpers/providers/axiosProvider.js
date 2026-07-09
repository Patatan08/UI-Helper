import axios from "axios";

export const executePost = (url, data) => { return axios.post(url, data); }

const AUTH_HEADER = "Authorization";

//Attach Authorization header with passed token value.
//If token is null clear value for header.
export function attachTokenToRequest(token) {
    if (token) {
        setHeaderKey(AUTH_HEADER, `Bearer ${token}`);
    } else {
        setHeaderKey(AUTH_HEADER, "");
    }
}

function setHeaderKey(key, value) {
    axios.defaults.headers.common[key] = value;
}

export function get(url) {
    return axios.get(url);
}

export function GetWithParams(url, data) {
    return axios.get(url, { params: data });
}

export function post(url, body) {
    return axios.post(url, body);
}

