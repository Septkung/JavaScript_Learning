// const titleEl = document.getElementById('title');//อ้างอิง id แนะนำใช้อันนี้
// const contentEl = document.querySelector('.content');//อ้างอิงผ่าน class
// const allEl = document.querySelectorAll('p');

// const box = document.querySelector('.box');

// const TextAll = document.querySelectorAll('p');

// let message = TextAll[1].innerHTML;
// console.log(a);
// console.log(b);
// //เปลี่ยนเนื้อหาใน html
// let x = 10;
// let y = 20;
// function displayText(){
//     a.innerText = 'x + y = '+(x+y).toString();
//     a.innerText = 'x + y = '+(x+y).toString();
// }

// DOM document
// function displayText(){
//     // titleEl.style.color='red';
//     // titleEl.style.backgroundColor='yellow';
//     // titleEl.style.fontSize='26px';

//     contentEl.setAttribute('class','sept');//เปลี่ยน class เป็น sept
    
// }
// function lightMode(){
//     box.setAttribute('class','light')
// }
// function darkMode(){
//     box.setAttribute('class','dark')
// }

// console.log(message); //มันจะเลือกออกมาหลาย tag เป็น array

// DOM Node
// const menu = document.getElementById('menu');
// const item = document.getElementById('item-3');
// const itemB = document.getElementById('item-2');

// const newItem = document.createElement('li');
// newItem.innerText = 'X'

// let count = 1
// function addItem(){
//     const item  = document.createElement('li'); //create li
//     item.innerText = 'item '+(count++);
//     menu.appendChild(item);
// }

// function deleteItem(){
//     menu.removeChild(item);
// }

// function replaceItem(){
//     menu.replaceChild(newItem,itemB);
//     //replaceChild(newItem,oldItem);
// }

// DOM CSS
// const box = document.getElementById('box');

// function addDarkMode(){
//     box.classList.add('darkMode');
// }
// function removeDarkMode(){
//     box.classList.remove('darkMode');
// }
// function switchMode(){
//     box.classList.toggle('darkMode');
//     if(box.classList.contains('darkMode')){ //return boolean check toggle
//         box.style.color='yellow';
//     }else{
//         box.style.color='red';
//     }
// }
// DOM Event
// function welcome(){
//     alert('wellcome to our website');
// }
function highlight(obj){
    obj.style.background='yellow';
}
function unhighlight(obj){
    obj.style.background='white';
}
// function getMenu(){
//     const menu = document.getElementById('menu');
//     const display = document.getElementById('display');
//     console.log(menu.value.toUpperCase());
//     display.innerText = menu.value;
// }
// Event Listener
const menu = document.getElementById('menu');
const display = document.getElementById('display');

menu.addEventListener('change',getMenu);
function getMenu(){
    display.innerText = menu.value;
}