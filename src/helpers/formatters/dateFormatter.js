import moment from 'moment';

export function getDateWithTimeInUTCFormat(date) {
    let newDate = new Date(date);
    return newDate.getUTCFullYear() + "-" +
        ("0" + (newDate.getUTCMonth() + 1)).slice(-2) + "-" +
        ("0" + newDate.getUTCDate()).slice(-2) + " " + ("0" + newDate.getUTCHours()).slice(-2) + ":" + ("0" + newDate.getUTCMinutes()).slice(-2);
}

export function formatDateWithTimeDashed(date) {
    return moment(date).format("YYYY-MM-DD HH:mm");
}

export function formatUTCDateWithTimeDashed(date) {
    return moment.utc(date).format("YYYY-MM-DD HH:mm");
}

export function formatDateDashed(date) {
    return moment(date).format("YYYY-MM-DD");
}

export function formatDateSlashed(date) {
    return moment(date).format("YYYY/MM/DD");
}

//Data z czasem akceptowalna przez API
export function formatDateWithTimeToISOString(date) {
    return moment(date).format("YYYY-MM-DDTHH:mm:ss");
}