//expplore the document.
console.dir(document)
//acess the containt from document
console.log(document.URL);
console.log(document.title);
// console.log(document.body);
console.log(document.domain);
//accessing the html element
console.log(document.all[6]);
//or
const title1=document.all[6];
console.log(title1)
// title1.textContent='hellow vaishnavi'
// IDENTIFIER METHODS - id, className, tagName, querySelector, querySelectorAll
//1.id :getElementBYId method
const header=document.getElementById('header-title')
console.log(header);
//change text 
header.textContent='helow vaishnavi borkar'
//replace it by another tag
header.innerHTML=`<i>Welcome -inner html</i>`
// header.style.borderBottom = `2px solid black`
//2. class: getelement by class
// background-color ---> camelCase ---> backgroundColor not use - (-=Capital)
const container=document.getElementsByClassName('container')
console.log(container);
container[1].style.backgroundColor = 'grey'
//set even list backgrownd color
// const items=document.getElementsByClassName('list-group-item')
// console.log(items);
// for(let i=0; i < items.length; i+=2)
// {
    // console.log(items[i]);
    // items[i].style.backgroundColor = 'gray'
// }
//tag name
const items=document.getElementsByTagName('li')
for(let i=1;i<items.length; i+=2)
{
    items[i].style.backgroundColor='pink'
}
//query selector id + class + tag
//use # for id & . for class
const heading=document.querySelector('#header-title')
console.log(heading)
const array=document.querySelectorAll('.list-group-item')
console.log(array);