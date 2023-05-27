
const btn1 = document.querySelector('.good');
const btn2 = document.querySelector('.bad');
const btn3 = document.querySelector('.reset-g');
const h2g = document.querySelector('.n-good');
const h2b = document.querySelector('.n-bad');

let counter = localStorage.getItem('counter')
if(counter === null){
counter = {
 count1:0,
 count2:0,};
 }else {
counter = JSON.parse(counter);
}




// let count1 = Number(localStorage.getItem('count1'));
// let count2 = Number(localStorage.getItem('count2'));
h2g.textContent = counter.count1;
h2b.textContent = counter.count2;

btn1.addEventListener('click', () => {
    h2g.textContent = ++counter.count1
    localStorage.setItem('counter',JSON.stringify(counter));
   });
   btn2.addEventListener('click', () => {
    h2b.textContent = ++counter.count2;
    localStorage.setItem('counter', JSON.stringify(counter));
   });
   btn3.addEventListener('click', ()=> {
   localStorage.removeItem('counter')
  

   });
   