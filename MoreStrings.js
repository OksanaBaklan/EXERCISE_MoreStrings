
// 1. Create a variable that contains the string "Hello World". Display the position of the first occurrence of "World" in the variable.

const variable =  "Hello World"
const firstPosition = variable.indexOf("World")
console.log("1)", firstPosition) // 6

// 2. Using the variable from exercise 1, Use the replace() method to replace "World" with "Universe".

const replaceWorld = variable.replace("World", "Universe")
console.log("2)", replaceWorld) // Hello Universe

// 3. Convert the value of the variable in exercise 1 to upper case.

const upperVariable = variable.toUpperCase()
console.log("3)", upperVariable) // HELLO WORLD

// 4. Convert the value of the variable in exercise 1 to lower case.
const lowerVariable = variable.toLowerCase()
console.log("4)", lowerVariable) // hello world


//5. Create a variable that contains the string "Hello" and another variable that contains the string "World". 
// Use the concat() method to join the two strings in these variables.

const stringHello = "Hello"
const stringWorld = "World"
const stringConcat = stringHello.concat(" ", stringWorld)
console.log("5)", stringConcat)


// 6. Create a variable that contains the string "Rome,Berlin,Paris". 
//    Now take out only the portion that says "Berlin"
//    Now take out only the portion that says "Berlin,Paris", add a space between the 2 cities and remove the comma (all in 1 go).

const city = "Rome,Berlin,Paris"
const berlin = city.substring(city.indexOf("Berlin"), city.indexOf(",", city.indexOf("Berlin")))
console.log("6)", berlin)

// 7. Create a template string according to the following example: 
// `const a = "John";
// const b = "Joe";
// const c = "Jack";
// const template = "your template string" ➞ "Their names were:  John,  Joe  and  Jack."`
const a = "John"
const b = "Joe"
const c = "Jack"
const template = `"your template string" ➞ "Their names were:  ${a},  ${b}  and  ${c}."`

console.log("7)", template)

// 8. Create a variable that contains the string "whatTheOMGnicCAGEtadahheHIDINGinHere". Console log the index of where Nic Cage is hiding. 

const string = "whatTheOMGnicCAGEtadahheHIDINGinHere"
const positionFirstNic = string.toLocaleLowerCase().indexOf("nic")
const positionLastNic = string.toLocaleLowerCase().indexOf("cage")
const stringNic = string.slice(positionFirstNic, positionLastNic)
const positionFirstCage = string.toLocaleLowerCase().indexOf("cage")
const positionLastCage = string.toLocaleLowerCase().indexOf("cage") + 4
const stringCage = string.slice(positionFirstCage, positionLastCage).toLowerCase()
const stringNew = `${string.slice(0, positionLastNic)} ${stringNic[0].toLocaleUpperCase() + stringNic.slice(1)} ${stringCage[0].toLocaleUpperCase() + stringCage.slice(1)} ${string.slice(positionLastCage)}`
console.log("8)", stringNew.indexOf("Nic Cage"))

// 9. What is the difference between substr(), substring(), and slice()?
const stringSlice = string.slice(string.toLocaleLowerCase().indexOf("nic"), -10)
console.log("9.1) Use slice() with negative value:   ", stringSlice)
const stringSubstr  = string.substring(string.toLocaleLowerCase().indexOf("nic"), string.toLocaleLowerCase().indexOf("tadahh"))
console.log("9.12) Use substring(), can't use negative value: ", stringSubstr)

// 10. Create a variable called planet and assign the value of 'earth'
//     Capitalize the first letter and print "Earth" to the console 
//     IMPORTANT: you should only use 2 variables (planet and nameCapitalized)

const planet='earth'
const nameCapitalized = planet[0].toUpperCase().concat(planet.slice(1))
console.log("10)", nameCapitalized)

// 11. Create a variable called testString2 and assign the following value “  I love this stuff  ”
//     Now remove spaces at the start and at the end  

const testString2 =  "  I love this stuff  "
console.log("11)", testString2.trim())