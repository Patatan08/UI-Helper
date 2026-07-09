import * as dateProvider from '../providers/dateProvider';
import moment from "moment";

//Return true if passed dateToCompare is greater than current date.
export function isDateGreaterThenNow(dateToCompare) {
    let currentDate = dateProvider.getDate();
    return new Date(dateToCompare) > new Date(currentDate);
}

//Return true if date is in correct format.
export function isDateSlashed(dateString) {
    return moment(dateString, "YYYY/MM/DD", true).isValid();
}

//Return true if passed stringToCheck is null or empty.
export function isStringNullOrEmpty(stringToCheck) {
    return (!stringToCheck || stringToCheck === "");
}

//Return true if passed valueToCheck is greater than valueToCompare.
export function isValueGreaterThan(valueToCheck, valueToCompare) {
    return valueToCheck > valueToCompare;
}

//Returns true if value is a number
export function isValueNumber(valueToCheck) {
    return !isNaN(valueToCheck);
}

//Returns true if collection has elements.
export function hasElements(collection) {
    return collection.length > 0;
}