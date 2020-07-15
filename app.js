var name = "Subrata";
console.log(name);

var myLocation = 'Atlanta';
console.log(myLocation);

var favoriteNumber = 5;
console.log(favoriteNumber);

var teams = ['Rockets','Lakers', 'Warriors', 'clippers', 'blazzers', 'Celtics','Nets','Falcons'];

console.log(teams);


//while loops
var number = 10;
var otherNumber = 1;
while (otherNumber < number) {
    console.log(otherNumber);
    otherNumber += 1;

}

var numberTwo = 20;
var myOtherNumber = 10;

while (myOtherNumber < numberTwo) {
    console.log(myOtherNumber);
    myOtherNumber += 1;
}

var numberThree = 30;
var otherNumberTwo = 20;

while (otherNumberTwo < numberThree) {
    console.log(otherNumberTwo);
    otherNumberTwo += 1;
}

var numberFour = 40;
var otherNumberThree = 30;

while (otherNumberThree < numberFour) {
    console.log(otherNumberThree);
    otherNumberThree += 1;
}

// for loops

for (var i = 0; i < 10; i++) {
    console.log(i);

}

// print teams
for (var i = 0; i<teams.length ; i++) {
    var eachTeam = teams[i];
    console.log(eachTeam);
}

// print foods
var foods =['burger', 'pizza', 'chicken', 'pasta', 'noodles']
for (var i = 0; i<foods.length ; i++) {
    var eachFood = foods[i];
    console.log(eachFood);
}

// print cars
const cars = ['Tesla', 'Honda', 'Toyota', 'Ford', 'BMW', 'Audi'];
console.log(cars);

for (let i=0 ; i < cars.length ; i++) {
    let eachCar = cars[i];
    console.log(eachCar);
}


// Objects
// Key-Value Pair

const subrata = {
    fullName: 'Subrata Roy',
    age: 27,
    myLocation: 'Atlanta',
    placesTraveled: ['New York', 'Canada', 'Texas']
}

console.log(subrata);

// my location

console.log(subrata.myLocation);

//print new york

console.log(subrata.placesTraveled[0]);

const myReallyCoolPost = {
    username: '@generalassembly',
    likes: 1200,
    comments: ['cool post', 'nice', 'hello'],
    caption: 'Day 3 of SEI',
    pictures: 'https://instagram.com/generalassembly/....',
    shares: 100
}

console.log(myReallyCoolPost);

myReallyCoolPost.myLocation = 'Atlanta';
console.log(myReallyCoolPost);

