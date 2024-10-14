// 스크롤 시 'active' 클래스를 추가하여 이미지 표시
// window.addEventListener('scroll', function () {
//   const fullscreenImage = document.querySelector('.show');
//   const scrollPos = window.scrollY; // 현재 스크롤 위치 가져오기

//   // 스크롤 위치가 200px 이상일 때 이미지가 나타나도록 설정
//   if (scrollPos > 200) {
//       fullscreenImage.classList.add('active');
//   } else {
//       fullscreenImage.classList.remove('active');
//   }
// });



// 01 : 이미지 확대

const ani1 = gsap.timeline();
ani1.from("#section1 .parallax__item__img", {
  autoAlpha: 0,
  scale: 1,
  with: 100,
  height: 100,
})
ani1.to("#section1 .parallax__item__img", {
  autoAlpha: 1,
  scale: 25,
})

ScrollTrigger.create({
  animation: ani1,
  trigger: "#section1",
  start: "top top",
  end: "+=3000",
  scrub: true,
  pin: true,
  markers: false,
  anticipatePin: 1
});



// 스크롤 시 'active' 클래스를 추가하여 이미지 표시
window.addEventListener('scroll', function () {
  const fullscreenImage = document.querySelector('.show');
  const scrollPos = window.scrollY; // 현재 스크롤 위치 가져오기

  // 스크롤 위치가 200px 이상일 때 이미지가 나타나도록 설정
  if (scrollPos > 200) {
    fullscreenImage.classList.add('active');
  } else {
    fullscreenImage.classList.remove('active');
  }

});



//스크롤시 글자 사라짐

window.addEventListener("scroll", function() {
  const naverpay = document.querySelector(".tex");
  
  if (window.scrollY > 100) {
    naverpay.classList.add("hidden");
  } else {
    naverpay.classList.remove("hidden");
  }
});

// 03 : 이미지 겹치기
const ani3 = gsap.timeline();
ani3.from("#section3 .parallax__item__img", {
  autoAlpha: 0,
  y: 100,
  stagger: {
    amount: 3,
    from: "start"
  }
});
ScrollTrigger.create({
  animation: ani3,
  trigger: "#section3",
  start: "top top",
  end: "+=3000",
  scrub: true,
  pin: true,
  markers: false,
  anticipatePin: 1
});





//04 스와이퍼


var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});




