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
      const marker = Array.from(document.querySelectorAll('.location-items__item'));
      for (let index in marker) {
         if (count == index) {
            marker[index].classList.add('location-items__item-active');
         } else {
            marker[index].classList.remove('location-items__item-active');
         }
      }
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

/*------------------------Shore. Search---------------*/
function shoreSearch() {
   const searcIcon = document.querySelector('.shore-aside__search-icon');
   const searcField = document.querySelector('.shore-aside__search-field');

   searcIcon.addEventListener('click', function () {
   searcField.classList.toggle('shore-aside__search-field-active');
});
}
shoreSearch();


/*------------------------Shore. Data---------------*/

function shoreData() {
   let currentDate = new Date();
   let day = currentDate.getDate();
   let year = currentDate.getFullYear();
   let month = currentDate.getMonth();
   const currentDay = document.querySelector('.data-shore__day');
   const currentMonthYear = document.querySelector('.data-shore__month-year');

   if (day < 10) {
      currentDay.innerHTML = '0' + day;
   } else {
      currentDay.innerHTML = day;
   }
   if (month < 10) {
      currentMonthYear.innerHTML = '0' + month + '\n' + year;
   } else {
      currentMonthYear.innerHTML = month + '|' + year;
   }
}

shoreData();
/*------------------------Shore. Location---------------*/

function shoreLocation() {
   const locationIcon = document.querySelector('.location-shore__icon');
   const nameLocation = document.querySelector('.location-shore__place');

   window.addEventListener('resize', shoreLocation);

   function showLocation() {
      if (window.innerWidth < 541) {
         locationIcon.addEventListener('click', function () {
            nameLocation.classList.toggle('location-shore__place-active');
         });
      }
   }
   showLocation();
   
   
   
}

shoreLocation();
/*------------------------Shurf. Galery Slider---------------*/


const surfLine = document.querySelector('.beach-slider__line');
const surfSlides = Array.from(surfLine.querySelectorAll('.beach-slider__slide'));
const btnSurfLeft = document.querySelector('.beach-slider__left-arrow');
const btnSurfRight = document.querySelector('.beach-slider__right-arrow');

let countImg = 0;
let countCover = 1;

btnSurfRight.addEventListener('click', function () {
   surfLine.append(surfSlides[countImg]);
   countImg++;
   countCover++;
   if (countImg > surfSlides.length - 1){
      countImg = 0;
   };
   if (countCover > surfSlides.length - 1){
      countCover = 0;
   };
   console.log(countCover);
   for (let index in surfSlides) {
      const surfCover = surfSlides[index].querySelector('.beach-slider__cover');
      
      if (index == countCover) {
         surfSlides[index].classList.add('beach-slider__slide-active');
         surfCover.classList.add('beach-slider__cover-active');
      } else {
         surfSlides[index].classList.remove('beach-slider__slide-active');
         surfCover.classList.remove('beach-slider__cover-active');
      }
   }
})


/*------------------------test---------------*/

function test() {

   const sliderLine = document.querySelector('.test__slider-line');
   const img = Array.from(sliderLine.querySelectorAll('.test__image'));
   const btn = document.querySelector('.test__btn');
   console.log(img);

   let count = 1;

   btn.addEventListener('click', function () {
      
      sliderLine.append(img[count]);
      count++;
      if (count > img.length-1){
         count = 1;
      };
      for (let index in img) {
         if (index == count) {
            img[index].classList.add('active');
            img[index].querySelector('.test__cover').classList.add('test__cover-active');
         } else {
            img[index].classList.remove('active');
            img[index].querySelector('.test__cover').classList.remove('test__cover-active');
         }
      }
   });

}

test();