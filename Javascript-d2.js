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

//objects in javaScript : object_name:{key="value"}
const books = {
     author:'Dr.APJ Kalam',
     book_names:['My journey','Wings of Fire','Turning Point']
}
console.log(books); //accessing books object
console.log(books.author); //accessing author inside books object
console.log(books.book_names[2]);  //accessing array inside books objet

//ArrayOfObjects :[{},{},{}]
const array_of_objects = [
    {
        student_name:'Nisha',
        roll_no:1,
        marks:70.89,
        address:{             //object inside object (as a key:value)
                   area:'katora',
                   pin:444601
           }
    },
    {
        student_name:'Gulprit',
        roll_no:2,
        marks:60.0,
        address:{
                   area:'navhate',
                   pin:444602
           }
    },
      {
        student_name:'Rashika',
        roll_no:3,
        marks:89.90,
        address:{
                   area:'Gopal Nagar',
                   pin:444603
           }
    }
]
console.log(array_of_objects)  // log the array
//access the objects which is inside the array.
//access the student_name of 0th location array index 
console.log(array_of_objects[0].student_name)
console.log(array_of_objects[2].student_name)
//access area from each object.
console.log(`${array_of_objects[0].address.area},${array_of_objects[1].address.area}, ${array_of_objects[2].address.area}`);