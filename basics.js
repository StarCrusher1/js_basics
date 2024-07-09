//if... else
let age = 20

if (age <= 12) {
    console.log("Hello kid.")
}
else if (age <= 18) {
    console.log("Hello teen.")
}
else {
    console.log("Hello adult.")
}

// for loop
let fruits = ["apple", "mango", "pineapple", "banana", "coconut"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// while loop
let counter = 10
while (counter > 0){
    console.log(counter)
    counter--
}
console.log("Happy new year!")
// Arrays
let numbers = [123, 456, 789]
let schools = ["RI", "ASR", "EJC", "ACJC"]
let mixed = [1.25, "Happy", [4, 5, 6]]

schools.push("TMJC")
schools.push("HCI")
console.log(schools)
schools.pop()
console.log(schools)

for (let i = 0; i < schools.length; i++) {
    console.log(schools[i])
}
