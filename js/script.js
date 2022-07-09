"use strict";

/*------------------------Shore. Big slider---------------*/
const slides = document.querySelectorAll('.info-slides__slide');

function shoreBigSlider() {
   const sliderLine = document.querySelector('.shore__slides-info');

   let count = 0;
   let width;

   function init() {
      width = document.querySelector('.shore__map-info').offsetWidth;
      sliderLine.style.width = width * slides.length + 'px';
      slides.forEach(item => {
         item.style.width = width + 'px';
         item.style.height = 'auto';
      })
      rollSlider();
   }

   window.addEventListener('resize', init);
   init();

   document.querySelector('.shore__arrow-location').addEventListener('click', function () {
      count++;
      if (count >= slides.length) {
         count =  0;
      }
      rollSlider();
   });

   function rollSlider() {
      sliderLine.style.transform = 'translate(-' + count * width + 'px)';
   }
}
shoreBigSlider();

/*------------------------Shore. Small slider---------------*/

function shoreSmallSlider() {
   const smallSlider = Array.from(slides);

   for (let slide in smallSlider) {

      const slidesLineSmall = smallSlider[slide].querySelector('.info-slides__maps-slide');
      const slidesImages = slidesLineSmall.querySelectorAll('img');

      let countSmall = 0;
      let widthSmall;

      function initSmall() {
         widthSmall = smallSlider[slide].querySelector('.info-slides__maps-box').offsetWidth;
         slidesLineSmall.style.widthSmall = widthSmall * slidesImages.length + 'px';
         slidesImages.forEach(item => {
            item.style.widthSmall = widthSmall + 'px';
            item.style.heightSmall = 'auto';
         })
         rollSliderSmall();
      }

      window.addEventListener('resize', initSmall);
      initSmall();

      smallSlider[slide].querySelector('.info-slides__arrow-left').addEventListener('click', function () {
         countSmall++;
         if (countSmall >= slidesImages.length) {
            countSmall =  0;
         }
         rollSliderSmall();
      });

      smallSlider[slide].querySelector('.info-slides__arrow-right').addEventListener('click', function () {
         countSmall--;
         if (countSmall < 0) {
            countSmall =  slidesImages.length - 1;
         }
         rollSliderSmall();
      });

      function rollSliderSmall() {
         slidesLineSmall.style.transform = 'translate(-' + countSmall * widthSmall + 'px)';
      }

   }

   
}

shoreSmallSlider();

/*------------------------Shore. Menu Burger---------------*/

const menuIcon = document.querySelector('.shore-aside__burger-menu');

if (menuIcon) {
   const menuBody = document.querySelector('.shore-aside__menu-list');
   const hideMenu = document.querySelector('.shore-aside__hide-menu');

   menuIcon.addEventListener('click', function () {
      menuBody.classList.toggle('shore-aside__menu-list-active');
      hideMenu.classList.toggle('shore-aside__hide-menu-active');
   })
}