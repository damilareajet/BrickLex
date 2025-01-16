// js bricklex 👇



const menu = document.querySelector('.toggle');
const menuList = document.querySelector('.menu');
 menu.addEventListener('click', function(){
     menu.classList.toggle('is-active')
     menuList.classList.toggle('active')
 });
 
 const chevron = document.querySelector('#chevron_toggle');
 const hidden = document.querySelector('.chevron__list');
 const cList = document.querySelector('#c_list')
 chevron.addEventListener('click', function(){
     chevron.classList.toggle('is-active');
     hidden.classList.toggle('active');
     cList.classList.toggle('arctive');
 })
 const workContainer = document.querySelectorAll('.workHr')
    workContainer.forEach(workHr =>{
         workHr.addEventListener('click', ()=>{
         removeActiveClasses()
     workHr.classList.add('active')
 })
    })
  function removeActiveClasses(){
         workContainer.forEach(workHr =>{
              workHr.classList.remove('active')
         })
  }
 const footer = document.querySelector('#footer_chevron');
 const footerTwo = document.querySelector('#footer_chevron_two');
 const footerThree = document.querySelector('#footer_chevron_three')
 const midline = document.querySelector('.midline')
 const products = document.querySelector('.products__interval')
 const imageIn = document.getElementById('image_interval');
 const links = document.getElementById('links__intercal');
 const linkin = document.getElementById('links__internal');
 const linkon = document.getElementById('links__intercom');
     footer.addEventListener('click', function(){
         footer_chevron.classList.toggle('active');
         links.classList.toggle('active');
        imageIn.classList.toggle('active')
     })
 footerTwo.addEventListener('click', function(){
      footer_chevron_two.classList.toggle('active');
     linkin.classList.toggle('active');
        imageIn.classList.toggle('active')
 })
 footerThree.addEventListener('click', function(){
      footer_chevron_three.classList.toggle('active');
        linkon.classList.toggle('active');
        imageIn.classList.toggle('active')
 });