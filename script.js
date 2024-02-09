// window.scrollTo(0, 0);


// window.onload=function(){
//   console.log("Devesh-----",window.scrollTo(0,0));
// }


// window.onbeforeunload = function () {
// };



console.log('Width------',screen.width)
console.log('Height------',screen.height)

// js script for preloader

var loader = document.querySelectorAll(".preloader");
var body = document.getElementsByTagName("body");
window.addEventListener("load", function () {
  loader[0].style.display = "none";
  console.log("body", body);
  body[0].style.overflowY = "scroll";
  // body[0].style.setProperty('overflowY','scroll','important');
});

// js script for main page slider

let slides = document.querySelectorAll(".slide");
let numberofSlides = slides.length;
var slideNumber = 0;

var repeater = () => {
  playSlider = setInterval(function () {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    slideNumber++;
    if (slideNumber > numberofSlides - 1) {
      slideNumber = 0;
    }
    slides[slideNumber].classList.add("active");
  }, 5000);
};

repeater();


//js script for main page anime text


var textWrapper = document.querySelector('.intro h1');


textWrapper.innerHTML = textWrapper.innerText
  .split("")
  .map((char) => {
    return "<span>" + char + "</span>";
  })
  .join("");
console.log('textWrapper', textWrapper.innerHTML)


var moving_animation = anime({
  targets: ".intro h1 span",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  duration:2000,
  delay: (el, i) => 90 * (i+1),
  autoplay: true,
});

moving_animation.play();
console.log('moving_animation.play();', moving_animation)


// js script for our starting

var starting = document.querySelector(".starting h1");
starting.innerHTML = starting.innerText
  .split("")
  .map((char) => {
    if(char=='!')
    return "<span>!<br></span>";
    return "<span>" + char + "</span>";
  })
  .join("");




var animation = anime({
  targets: ".starting h1 span",
  opacity: [0.2, 1],
  translateZ: 0,
  easing: "easeOutExpo",
  delay: (el, i) => 30 * i,
  autoplay: false,
});

var about = document.getElementById("about_us");
console.log("about", about);
var count = document.getElementsByClassName("count");
var inc = [];
var start = document.getElementById("starting");
var sValue = true;

// on  scroll function

window.onscroll = function () {
  var topScreen = window.pageYOffset;
  var btmScreen = window.pageYOffset + window.innerHeight;
  // console.log("btmScreen", btmScreen);

  // for about us section

  var timer = setInterval(() => {
    var aboutTopElem = about.offsetTop + 400;
    var aboutBtmElem = about.clientHeight + about.offsetTop + 400;

    if (btmScreen > aboutTopElem && topScreen < aboutBtmElem) {
      for (let i = 0; i < count.length; i++) {
        inc.push(0);
        // console.log('inc', inc)
        if (inc[i] != count[i].getAttribute("max-data")) {
          inc[i]++;
        }
        count[i].innerHTML = inc[i] + "+";
      }
    } else {
      clearInterval(timer);
    }
  }, 100);

  // for  starting section

  var startTopElem = start.offsetTop;
  // console.log("startTopElem", startTopElem);
  var startBottomelem = start.offsetTop + start.clientHeight;
  // console.log('startBottomelem', startBottomelem)

  if (sValue == true) {
    if (btmScreen > startTopElem && topScreen < startBottomelem) {
      animation.play();
      sValue = false;
      // animation.stop();
      // console.log('Devesh');
    }
  }

  //for why wemesy section

  // console.log('galleryHeader', galleryHeader)
};



