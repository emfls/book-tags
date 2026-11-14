'use strict';
const q=document.querySelector('#q');
const inputs=[...document.querySelectorAll('input[type=checkbox]')];
const cards=[...document.querySelectorAll('.card')];
const norm=s=>s.toLocaleLowerCase().replace(/\s/g,'');
function update(){
 const groups={};inputs.filter(x=>x.checked).forEach(x=>(groups[x.name]??=[]).push(x.value));
 let count=0;
 for(const card of cards){const tags=card.dataset.tags.split('|');const ok=norm(card.dataset.search).includes(norm(q.value))&&Object.values(groups).every(values=>values.some(v=>tags.includes(v)));card.hidden=!ok;if(ok)count++;}
 document.querySelector('#count').textContent=count+'권';document.querySelector('#empty').hidden=count!==0;
}
q.addEventListener('input',update);inputs.forEach(x=>x.addEventListener('change',update));document.querySelector('#reset').addEventListener('click',()=>{q.value='';inputs.forEach(x=>x.checked=false);update();q.focus();});
