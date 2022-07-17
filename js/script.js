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
         let percentWidth = getComputedStyle(smallSlider[slide].querySelector('.info-slides__maps-box'));
         let maxWidth = parseFloat(percentWidth.maxWidth) / 100;
         widthSmall = smallSlider[slide].offsetWidth * maxWidth;
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
         console.log(widthSmall);
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
   let month = currentDate.getMonth() + 1;
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

/*------------------------Shore. go to section---------------*/

function choseSection() {
   const sectionArray = document.querySelectorAll('.shore-aside__menu-items[data-goto');
   const arrowDown = document.querySelectorAll('.location-items__arrow-img[data-goto]');


   if (sectionArray.length > 0) {
      sectionArray.forEach(sectionArray => {
         sectionArray.addEventListener('click', goToSection);
      });

      arrowDown.forEach(arrowDown => {
         arrowDown.addEventListener('click', goToSection);
      })

      function goToSection(e) {
         const section = e.target;
         if (section.dataset.goto && document.querySelector(section.dataset.goto)) {
            const goSection = document.querySelector(section.dataset.goto);
            const goSectionValue = goSection.getBoundingClientRect().top + scrollY;
            window.scrollTo({
               top: goSectionValue,
               behavior: "smooth",
            });
            e.preventDefault();
         }
      }
   }
}

choseSection();


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

/*------------------------Travel. Slider---------------*/

function travelSlider() {
   const travelLine = document.querySelector('.travel__slider-line');
   const travelSlides = Array.from(travelLine.querySelectorAll('.travel__main-content'));
   const travelBtnlLeft = document.querySelector('.travel__arrow-left');
   const travelBtnlRight = document.querySelector('.travel__arrow-right');

   let count = 0;

   travelBtnlRight.addEventListener('click', function () {
      count++;
      if (count > travelSlides.length - 1) {
         count = 0;
      }
      for (let index in travelSlides) {
      if (index == count) {
            travelSlides[index].classList.add('travel__main-content-active');
         } else {
            travelSlides[index].classList.remove('travel__main-content-active');
         }
   }
   })

   travelBtnlLeft.addEventListener('click', function () {
      count--;
      if (count < 0) {
         count = travelSlides.length - 1;
      }
      for (let index in travelSlides) {
      if (index == count) {
            travelSlides[index].classList.add('travel__main-content-active');
         } else {
            travelSlides[index].classList.remove('travel__main-content-active');
         }
   }
   })

}

travelSlider();

/*------------------------Sleep. Slider---------------*/

function sleepSlider() {
   const sleepLine = document.querySelector('.sleep__slider-line');
   const sleepSlides = Array.from(sleepLine.querySelectorAll('.sleep__main-content'));
   const sleepBtnlLeft = document.querySelector('.sleep__arrow-left');
   const sleepBtnlRight = document.querySelector('.sleep__arrow-right');

   let count = 0;


   sleepBtnlRight.addEventListener('click', function () {
      count++;
      if (count > sleepSlides.length - 1) {
         count = 0;
      }
      for (let index in sleepSlides) {
         if (index == count) {
            sleepSlides[index].classList.add('sleep__main-content-active');
            let sleepCounter = Array.from(sleepSlides[index].querySelectorAll('.information-sleep__counter'));
            for (let key in sleepCounter) {
               sleepCounter[key].classList.remove('information-sleep__counter-hidden');
            }
         } else {
            sleepSlides[index].classList.remove('sleep__main-content-active');
            let sleepCounter = Array.from(sleepSlides[index].querySelectorAll('.information-sleep__counter'));
            for (let key in sleepCounter) {
               sleepCounter[key].classList.add('information-sleep__counter-hidden');
            }
         }
      }
      counterNights();
   })

   sleepBtnlLeft.addEventListener('click', function () {
      count--;
      if (count < 0) {
         count = sleepSlides.length - 1;
      }
      for (let index in sleepSlides) {
         if (index == count) {
            sleepSlides[index].classList.add('sleep__main-content-active');
            let sleepCounter = Array.from(sleepSlides[index].querySelectorAll('.information-sleep__counter'));
            for (let key in sleepCounter) {
               sleepCounter[key].classList.remove('information-sleep__counter-hidden');
            }
         } else {
            sleepSlides[index].classList.remove('sleep__main-content-active');
            let sleepCounter = Array.from(sleepSlides[index].querySelectorAll('.information-sleep__counter'));
            for (let key in sleepCounter) {
               sleepCounter[key].classList.add('information-sleep__counter-hidden');
            }
         }
   }
   })

   function counterNights() {
      const activeSlide = document.querySelector('.sleep__main-content-active');
      const btnPlusNigth = activeSlide.querySelector('.information-sleep__plus-nights');
      const btnMinusNigth = activeSlide.querySelector('.information-sleep__minus-nights');
      const nightAmount = activeSlide.querySelector('.information-sleep__info-nights');
      const btnPlusGuest = activeSlide.querySelector('.information-sleep__plus-guests');
      const btnMinusGuest = activeSlide.querySelector('.information-sleep__minus-guests');
      const guestAmount = activeSlide.querySelector('.information-sleep__info-guests');

      let countNights = 1;
      let contentNight = 'night'

      let countGuests = 1;
      let contentGuests = 'guest'

      btnPlusNigth.addEventListener('click', function () {
         countNights++;
         counterInfoPlus(nightAmount, countNights, contentNight)
      })
      btnMinusNigth.addEventListener('click', function () {
         countNights--;
         if (countNights < 1) {
            countNights = 1;
         }
         counterInfoMinus(nightAmount, countNights, contentNight)
      })

      btnPlusGuest.addEventListener('click', function () {
         countGuests++;
         counterInfoPlus(guestAmount, countGuests, contentGuests)
      })
      btnMinusGuest.addEventListener('click', function () {
         countGuests--;
         if (countGuests < 1) {
            countGuests = 1;
         }
         counterInfoMinus(guestAmount, countGuests, contentGuests)
      })

      function counterInfoPlus(elem, counter, content, elemPrice, price) {
         if (counter == 1) {
            elem.firstChild.textContent = counter + ' ' + content;
         } else {
            elem.firstChild.textContent = counter + ' ' + content + 's';
         }
      }
      function counterInfoMinus(elem, counter, content, elemPrice, price) {
         if (counter == 1) {
            elem.firstChild.textContent = counter + ' ' + content;
         } else {
            elem.firstChild.textContent = counter + ' ' + content + 's';
         }

      }
   }
   counterNights();
}  

sleepSlider();

/*------------------------Shop. Slider---------------*/

function shopSlider() {
   const shopLine = document.querySelector('.shop__slider-line');
   const shopSlides = Array.from(shopLine.querySelectorAll('.shop__main-content'));
   const shopBtnlLeft = document.querySelector('.shop__arrow-left');
   const shopBtnlRight = document.querySelector('.shop__arrow-right');

   let count = 0;


   shopBtnlRight.addEventListener('click', function () {
      count++;
      if (count > shopSlides.length - 1) {
         count = 0;
      }
      for (let index in shopSlides) {
         if (index == count) {
            shopSlides[index].classList.add('shop__main-content-active');
         } else {
            shopSlides[index].classList.remove('shop__main-content-active');
         }
      }
      shopTips();
   })

   shopBtnlLeft.addEventListener('click', function () {
      count--;
      if (count < 0) {
         count = shopSlides.length - 1;
      }
      for (let index in shopSlides) {
         if (index == count) {
            shopSlides[index].classList.add('shop__main-content-active');
         } else {
            shopSlides[index].classList.remove('shop__main-content-active');
         }
      }
      shopTips();
   })

   function shopTips() {
      const shopActive = document.querySelector('.shop__main-content-active');
      const shape = shopActive.querySelector('#shape');
      const btnShape = shape.querySelector('.board-surf__pointer');
      const descrptShape = shape.querySelector('.board-surf__decription');

      btnShape.addEventListener('click', function () {
         descrptShape.classList.toggle('shape-descrpt');
      })

      const rail = shopActive.querySelector('#rail');
      const btnRail = rail.querySelector('.board-surf__pointer');
      const descrptRail = rail.querySelector('.board-surf__decription');
      
      btnRail.addEventListener('click', function () {
         descrptRail.classList.toggle('rail-descrpt');
      })

      const fins = shopActive.querySelector('#fins');
      const btnFins = fins.querySelector('.board-surf__pointer');
      const descrptFins = fins.querySelector('.board-surf__decription');
      
      btnFins.addEventListener('click', function () {
         descrptFins.classList.toggle('fins-descrpt');
      })

   }
   shopTips();
}  

shopSlider();