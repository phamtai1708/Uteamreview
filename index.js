const btnClickFbNext = document.querySelector("button.fb-btn-next");
const btnClickFbPrev = document.querySelector("button.fb-btn-previous");
let videoFb = document.querySelectorAll("div.video-fb");
let indexFb = 0;

btnClickFbNext.onclick = function () {
  indexFb++;
  if (indexFb < 6) {
    let newPosition = 100 * indexFb;
    for (let i = 0; i < videoFb.length; i++) {
      videoFb[i].style.transform = "translateX(-" + newPosition + "%)";
    }
  } else {
    indexFb = 6;
  }
};

btnClickFbPrev.onclick = function () {
  indexFb--;
  if (indexFb >= 0) {
    let newPosition = 100 * indexFb;
    for (let i = 0; i < videoFb.length; i++) {
      videoFb[i].style.transform = "translateX(-" + newPosition + "%)";
    }
  } else {
    indexFb = 0;
  }
};

const clickLogoFb = document.querySelector("div.fb-logo");
const clickLogoIns = document.querySelector("div.ins-logo");
const clickLogoTiktok = document.querySelector("div.tiktok-logo");

clickLogoFb.onclick = function () {
  let link = "giaitri.html";
  window.location.href = link;
};

clickLogoIns.onclick = function () {
  let link = "giaitri.html";
  window.location.href = link;
  let otherSocialFb = document.querySelector("div.GT-facebook");
  let otherSocialIns = document.querySelector("div.GT-instagram");
  otherSocialFb.style.display = "none";
  otherSocialIns.style.display = "flex";
};

clickLogoTiktok.onclick = function () {
  let link = "giaitri.html";
  window.location.href = link;
  let otherSocialFb = document.querySelector("div.GT-facebook");
  let otherSocialTiktok = document.querySelector("div.GT-tiktok");
  console.log("hello");
  otherSocialFb.style.display = "none";
  otherSocialTiktok.style.display = "flex";
};
// ----------------------------Instagram------------------------------
const btnClickInsNext = document.querySelector("button.ins-btn-next");
const btnClickInsPrev = document.querySelector("button.ins-btn-previous");
let videoIns = document.querySelectorAll("div.video-ins");
let indexIns = 0;
btnClickInsNext.onclick = function () {
  indexIns++;
  if (indexIns < 6) {
    let newPosition = 100 * indexIns;
    for (let i = 0; i < videoIns.length; i++) {
      videoIns[i].style.transform = "translateX(-" + newPosition + "%)";
    }
  } else {
    indexIns = 6;
  }
};
btnClickInsPrev.onclick = function () {
  indexIns--;
  if (indexIns >= 0) {
    let newPosition = 100 * indexIns;
    for (let i = 0; i < videoIns.length; i++) {
      videoIns[i].style.transform = "translateX(-" + newPosition + "%)";
    }
  } else {
    indexIns = 0;
  }
};
// ---------------------------Tiktok------------------------------
const btnClickTiktokNext = document.querySelector("button.tiktok-btn-next");
const btnClickTiktokPrev = document.querySelector("button.tiktok-btn-previous");
let videoTiktok = document.querySelectorAll("div.video-tiktok");
let indexTiktok = 0;
btnClickTiktokNext.onclick = function () {
  indexTiktok++;
  if (indexTiktok < 6) {
    let newPosition = 100 * indexTiktok;
    for (let i = 0; i < videoTiktok.length; i++) {
      videoTiktok[i].style.transform = "translateX(-" + newPosition + "%)";
    }
  } else {
    indexTiktok = 6;
  }
};
btnClickTiktokPrev.onclick = function () {
  indexTiktok--;
  if (indexTiktok >= 0) {
    let newPosition = 100 * indexTiktok;
    for (let i = 0; i < videoTiktok.length; i++) {
      videoTiktok[i].style.transform = "translateX(-" + newPosition + "%)";
    }
  } else {
    indexTiktok = 0;
  }
};
