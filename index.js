// Code your solution here
function findMatching(driversArray, nameOfDriver){
    let result = driversArray.filter(element => nameOfDriver.toLowerCase() == element.toLowerCase());
    return result;
}

function fuzzyMatch(driversArray, someString){
    let result = driversArray.filter(element => element.startsWith(someString));
    return result;
}

function matchName(driversObjectArray, someString){
    let result =  driversObjectArray.filter(element => element.name === someString);
    return result;
}