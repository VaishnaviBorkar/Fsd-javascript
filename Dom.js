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

// DOM EVENTS - addEventListner
//html_element.addEventListener('event_name',method call)
function event_click()
{
    console.log('button clicked')
}
const button=document.querySelector('#button')
button.addEventListener('click',event_click)
button.addEventListener('dbclick',()=>{console.log('button Double clicked')})
// Input_text event
const text=document.querySelector('#text-input') 
text.addEventListener('focus',()=>{
    console.log('focus on')
})
text.addEventListener('blur', () => {
    console.log(`BLURRED ON ME`);
})
//cut event 
text.addEventListener('cut',()=>{
    console.log(`cut on me`);
})
//copy event
text.addEventListener('copy',()=>{
  console.log('copy event');
})
//paste event
text.addEventListener('paste',()=>{
    console.log('paste event');
  })
 const box=document.getElementById('box')
console.log(box);
box.addEventListener('mouseenter', (e) => {
    box.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 100)`
})
box.addEventListener('mouseleave', (e) => {
    box.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 150)`
})
//Dom traverse :methods to access the html elements based on relationship.
// parent, children, siblings
// 1. PARENT NODES
// const list = document.getElementById('items')
// list.parentElement.style.backgroundColor = 'yellow'

//dom channing
//parent of parent
const list = document.getElementById('items')
list.parentElement.parentElement.style.backgroundColor = 'yellow'
//child node

const ul=document.getElementById('items')
console.log(ul.firstChild);    // text -> Indentation
console.log(ul.firstElementChild);
console.log(ul.lastChild);     // text -> Indentation
console.log(ul.lastElementChild);
//siblings
console.log(ul.previousSibling);   // text -> Indentation
console.log(ul.previousElementSibling);  
console.log(ul.nextSibling);
console.log(ul.nextElementSibling);