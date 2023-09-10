const returnFirstTwoDrivers = () => {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice (0,2);
}
const returnLastTwoDrivers = () => {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice (2, 4);
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => {
    return function(fare) {
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, selectFunction) => {
        if(selectFunction === returnFirstTwoDrivers) {
            return drivers.slice(0, 2); }
        else if (selectFunction ===returnLastTwoDrivers) {
            return drivers.slice(2, 4);
        }
        }
    const allDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
console.log(selectDifferentDrivers(allDrivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(allDrivers, returnLastTwoDrivers));
