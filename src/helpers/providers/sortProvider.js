//Sort collection of objects by specified property
//Function usable inside .sort function, like collection.sort(dynamicObjectSort(name))
//Property name starts with '-' for desc
export function dynamicObjectSort(property) {
    let sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        let result = 0;
        if (typeof a[property] == 'string') {
            result = a[property].localeCompare(b[property]);
        }
        else
            result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    };
}