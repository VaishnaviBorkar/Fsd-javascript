//String AND String Methods to manupulate String
// 1.Length of String
const s1='Vaishnavi'
console.log(s1.length);
//Change the cases using methods..
console.log(s1.toUpperCase())
console.log(s1.toLowerCase())
//substrings
console.log(s1.substr(3)) //starting index starts from 0
console.log(s1.substring(2,7)) //starting index to ending index
//split method :returns an array
const s2='hellow, my, name, is vaishnavi'
console.log(s2.split(', ')); // Return you with an 'Array' seperating by , space.
//access 3rd index of an array
const array=s2.split(', ')
console.log(`3rd index value is :${array[2]}`)
// indexOf - returns the index value of alphabet, return -1 if the alphabet doesn't exist
console.log('Index of z : ' + s2.indexOf('z'))
console.log('Index of m :'+s2.indexOf('m'));
// String Concatination (Merging the strings) & String Literals
const number=2021
console.log('welcome to '+number+' celebration');
console.log(`I am ${20} years old`);
// ARRAYS IN JAVASCRIPT - Collection of Items
// 2 ways Array - 1. Using Array Contrsuctor
const array1=new Array('java','c++','c')
console.log(array1)
//accessing array index using for loop
for(i=0;i<array1.length;i++){
    console.log(`Index ${i} : ${array1[i]}`)
}
//ARRAY WAY 2 :using [] (ES6)
// const array_2=['vaishnavi','borkarvaishnavi85@gmail.com'];
// console.log(array_2);
// Contain multiple data types in a single Array
const array_2=['vaishnavi',8999837751,"borkarvaishnavi85@gmail.com",21];
console.log(array_2);
console.log(`My NAME : ${array_2[0]}`)
console.log(`My PHONE NUMBER : ${array_2[1]}`)
console.log(`My EMAIL ID : ${array_2[2]}`)
console.log(`My AGE : ${array_2[3]}`)