// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'Alvin',
    cities: ['Tustin', 'Irvine', 'Anaheim'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2, 3, 4],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};
console.log(multiplier.multiply());