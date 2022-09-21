//コインに当たる場所
function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

//show scores
const body = document.querySelector("body");
const showScore = document.querySelector("h1");
let score = 0;
showScore.textContent = `Score: ${score}`;

const init = () => {
  //get the avatar
  //get the coin

  moveCoin();
  window.addEventListener("keyup", function (e) {
    if (e.key === "ArrowDown" || e.key === "Down") {
      moveVertical(avatar, 50);
    }
    if (e.key === "ArrowUp" || e.key === "Up") {
      moveVertical(avatar, -50);
    }
    if (e.key === "ArrowRight" || e.key === "Right") {
      moveHorizonal(avatar, 50);
    }
    if (e.key === "ArrowLeft" || e.key === "Left") {
      moveHorizonal(avatar, -50);
    }

    //もしマリオがコインにタッチしたらコインが動く
    if (isTouching(avatar, coin)) {
      moveCoin();
      const incrementScore = ++score;
      showScore.textContent = `Score: ${incrementScore}`;
    }
  });
};

const moveVertical = (element, amount) => {
  const currTop = extractPos(element.style.top); //Y
  element.style.top = `${currTop + amount}px`;
};

const moveHorizonal = (element, amount) => {
  const currLeft = extractPos(element.style.left); //X
  element.style.left = `${currLeft + amount}px`;
};


const extractPos = (position) => {
    // const intFrameHeight = window.innerHeight;
    // console.log(intFrameHeight);

//   if (!position === top.innerHeight) return 100;
  if (!position) return 100;
  return parseInt(position.slice(0, -2));
};

const moveCoin = () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  coin.style.top = `${x}px`;
  coin.style.left = `${y}px`;
};

init();
