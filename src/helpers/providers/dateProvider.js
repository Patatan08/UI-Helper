import * as dateFormatter from "../formatters/dateFormatter";

//Returns current date.
export function getDate() {
    return new Date();
}

export function countToday() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    return today = yyyy + '/' + mm + '/' + dd;
}

export function countDashedToday() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    return today = yyyy + '-' + mm + '-' + dd;
}

export function countLastDayOfMonth() {
    let date = new Date(), y = date.getFullYear(), m = date.getMonth();
    let lastDay = new Date(y, m + 1, 0);
    let dd = lastDay.getDate();
    let mm = lastDay.getMonth() + 1;
    let yyyy = lastDay.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    return yyyy + '/' + mm + '/' + dd;
}

export function getDayOfTheWeek(date, languageId) {
    let newDate = new Date(date);
    if (languageId === "pl")
        return newDate.toLocaleDateString('pl-PL', { weekday: 'long' });
    else
        return newDate.toLocaleDateString('en-GB', { weekday: 'long' });
}

//Get date for monday of the week for given date.
export function startOfWeek(date) {
    let newDate = new Date(date);
    let diff = newDate.getDate() - newDate.getDay() + (newDate.getDay() === 0 ? -6 : 1);

    return new Date(newDate.setDate(diff));
}

//Get date for sunday of the week for given date.
export function endOfWeek(date) {
    let newDate = new Date(date);
    let diff = newDate.getDate() - (newDate.getDay() - 1) + 6;

    return new Date(newDate.setDate(diff));
}

//Get date for first day of month of given date.
export function startOfMonth(date) {
    let newDate = new Date(date);
    return new Date(newDate.getFullYear(), newDate.getMonth(), 1);
}

//Get date for last day of month of given date.
export function endOfMonth(date) {
    let newDate = new Date(date);
    return new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0);
}

//Get date for first day of year of given date.
export function startOfYear(date) {
    let newDate = new Date(date);
    return new Date(newDate.getFullYear(), 0, 1);
}

//Get date for last day of year of given date.
export function endOfYear(date) {
    let newDate = new Date(date);
    return new Date(newDate.getFullYear() + 1, 0, 0);
}

//Add or subtract days from date.
export function addDays(date, days) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
}

//Get all dates between two dates.
export function getDates(startDate, stopDate) {
    let newStartDate = new Date(startDate), newStopDate = new Date(stopDate);
    let dateArray = [];
    let currentDate = newStartDate;
    while (currentDate <= newStopDate) {
        dateArray.push(currentDate);
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}

export function compareDates(firstDate, secondDate) {
    return dateFormatter.formatDateSlashed(firstDate) === dateFormatter.formatDateSlashed(secondDate);
}

