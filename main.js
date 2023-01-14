'use strict';

{
  const btn =document.getElementById('btn');
const result =document.getElementById('result')

  btn.addEventListener('click',() =>{
    const results = ['大吉','吉','凶','大吉','大吉'];
   const n =Math.floor(Math.random() * results.length);
   result.textContent = results[n];


   
 });
}