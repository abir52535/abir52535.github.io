const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const YesBtn = document.querySelector(".iya-btn");
const NoBtn = document.querySelector(".nda-btn");

YesBtn.addEventListener("click", () => {
 question.innerHTML = "SKJSKJSKJ MAKASIH DEDI KORBUZER";
 gif.src =
    "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

NoBtn.addEventListener("click", () => {
 const noBtnRect = NoBtn.getBoundingClientRect();
 const maxx = window.innerWidth - noBtnRect.width;
 const maxy = window.innerHeight - noBtnRect.height;

 const randomx = Math.floor(Math.random() * maxx);
 const randomy = Math.floor(Math.random() * maxy);

 NoBtn.style.left = randomx + "px";
 NoBtn.style.top = randomy + "px";
});
