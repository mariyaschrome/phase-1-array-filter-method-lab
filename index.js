function findMatching(drivers, list) {
    return drivers.filter(driver => driver.toLowerCase() === list.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

function matchName(driverObjects, name) {
    return driverObjects.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}
