// Object destructuring

// const person = {
//     name: "Andrew",
//     age: 26,
//     location: {
//         city: "Philadelphia",
//         temp: 92
//     }
// };

// const { name: firstName = "Anonymous", age } = person;
// // const name = person.name;
// // const age = person.age;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }


// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Penguin"
//     }
// };

// const {name: publisherName = "Self-Published"} = book.publisher
// console.log(publisherName);

// Array destructuring

const address = ["1299 S Juniper Street", "Philadelphia", "Pennsylvania", "18382"];
const [, city, state = "New York" ] = address;
console.log(`You are in ${city} ${state}`);

const item = ["coffee (hot)", "$2.00", "$2.50", "$2.75"]
const [coff, , prize_med] = item;
console.log(`A medium ${coff} costs ${prize_med}`);