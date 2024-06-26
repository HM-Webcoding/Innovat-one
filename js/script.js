// option one with scroll

// let galleryPartElement = document.getElementById("gallery_part");
// let counterElement = document.querySelectorAll(".counter");
// let counterElementArray = Array.from(counterElement);

// let counterFunc = () => {
//   if (window.pageYOffset > 400) {
//     counterElementArray.map((counterEl) => {
//       //number collect from user
//       let countEndNumber = counterEl.dataset.counted;
//       //cunting calculation
//       let countingNum = 0;
//       let counterUp = () => {
//         countingNum++;
//         counterEl.innerHTML = countingNum + "k";
//         if (countingNum == countEndNumber) {
//           clearInterval(timing);
//           return;
//         }
//       };

//       let timing = setInterval(() => {
//         counterUp();
//       }, 5);
//     });
//   }
// };

// window.addEventListener("scroll", counterFunc);

// setTimeout(() => {
//   window.removeEventListener("scroll", counterFunc);
// }, 3000);

// option two with mousemove

let galleryPartElement = document.getElementById("gallery_part");
let counterElement = document.querySelectorAll(".counter");
let counterElementArray = Array.from(counterElement);

let counterFunc = () => {
  counterElementArray.map((counterEl) => {
    //number collect from user
    let countEndNumber = counterEl.dataset.counted;
    //cunting calculation
    let countingNum = 0;

    let counterUp = () => {
      countingNum++;
      counterEl.innerHTML = countingNum + "k";
      if (countingNum == countEndNumber) {
        clearInterval(timing);
        return;
      }
    };

    let timing = setInterval(() => {
      counterUp();
    }, 60);
  });
};

galleryPartElement.addEventListener("mousemove", counterFunc, { once: true });

let toTopEl = document.querySelector(".to-top");

window.onscroll = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    toTopEl.style.display = "block";
  } else {
    toTopEl.style.display = "none";
  }
};

toTopEl.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
