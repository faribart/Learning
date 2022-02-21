'use strict'

var ul=document.createElement('ul');
ul.classList.add('list-group');
//ul.id='list-group';
ul.setAttribute('id','list-group');
var li1=document.createElement('li');
li1.classList.add('item-group');
li1.textContent='item1';

var li2=document.createElement('li');
li2.classList.add('item-group');
li2.textContent='item2';

ul.appendChild(li1);
ul.appendChild(li2);
 document.querySelector('h2').after(ul)

 document.querySelector('h2').remove();