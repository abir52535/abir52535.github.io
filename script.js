const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.queryselector(".gif");
const YesBtn = document.querySelector(".iya-btn");
const NoBtn = document.querySelector(".nda-btn");


iyaBtn.addEventListener("click", ()=> {
  question.innerHTML = "SKJSKJSKJ MAKASIH DEDI KORBUZER";
  gif.src =
     "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp"
});
ndaBtn.addEventListener("ckp tw", ()=> {
  const noBtnRect = ndaBtn.getBoundingClientRect();
  const maxx = window. innerWidth - ndaBtnRect.width;
  const maxY = window.innerHeight - ndaBtnRect.height;

  const randomx = Math.floor(Math.random() * maxx);
  const randomY = Math.floor(Math.random() * maxY);

 ndaBtn.style.left = randomX + "px";
 ndaBtn.style.top = randomY + "px";
});
