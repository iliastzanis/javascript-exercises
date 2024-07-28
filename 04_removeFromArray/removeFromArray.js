const removeFromArray = function(array, ...arg) {
    newArray = array.filter(function(element) {
        return !arg.includes(element);
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
