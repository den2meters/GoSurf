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

function surfSlider() {
   const surfLine = document.querySelector('.beach-slider__line');
   const surfSlides = Array.from(surfLine.querySelectorAll('.beach-slider__slide'));
   const btnSurfLeft = document.querySelector('.beach-slider__left-arrow');
   const btnSurfRight = document.querySelector('.beach-slider__right-arrow');
   const surfLables = Array.from(document.querySelectorAll('.card-slider__lable'));

   let countImgRight = 4;
   let countImgLeft = 0;
   let countCover = 1;

   // btnSurfLeft.addEventListener('click', function () {
   //    surfLine.append(surfSlides[countImgLeft]);
   //    countImgLeft++;
   //    countCover++;
      
   //    if (countImgLeft > surfSlides.length - 1) {
   //       countImgLeft = 0;
   //    };
   //    if (countCover > surfSlides.length - 1) {
   //       countCover = 0;
   //    };
   //    surfAddClass();
   // });

   btnSurfRight.addEventListener('click', function () {
      surfLine.prepend(surfSlides[countImgRight]);
      countImgRight--;
      countCover--;

      if (countImgRight < 0) {
         countImgRight = surfSlides.length - 1;
      };
      if (countCover < 0 ) {
         countCover = surfSlides.length - 1;
      };
      surfAddClass();
   });

   function surfAddClass() {
      for (let index in surfSlides) {
         const surfCover = surfSlides[index].querySelector('.beach-slider__cover');
         const surfBtn = surfSlides[index].querySelector('.beach-slider__btn');
         if (index == countCover) {
            surfSlides[index].classList.add('beach-slider__slide-active');
            surfLables[index].querySelector('.card-slider__lable-box').classList.add('card-slider__lable-box-active');
            surfLables[index].querySelector('.card-slider__pointer').classList.add('card-slider__pointer-active');
            surfCover.classList.add('beach-slider__cover-active');
            surfBtn.classList.add('beach-slider__btn-active');
         } else {
            surfSlides[index].classList.remove('beach-slider__slide-active');
            surfLables[index].querySelector('.card-slider__lable-box').classList.remove('card-slider__lable-box-active');
            surfLables[index].querySelector('.card-slider__pointer').classList.remove('card-slider__pointer-active');
            surfCover.classList.remove('beach-slider__cover-active');
            surfBtn.classList.remove('beach-slider__btn-active');
         }
      }
   };

}

surfSlider();