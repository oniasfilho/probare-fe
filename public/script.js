const pageWrapper = document.getElementById("page-wrapper") //tela pequena
const rightArea = document.getElementById("right-area") // tela grande
const body = document.querySelector("body")


const changeBackgroundImage = () => {
  let randomNumber = Math.floor(Math.random() * (6 - 1) + 1)

  console.log(pageWrapper.style.backgroundImage)

  let screenSize = window.innerWidth;

  const setBackgroundForSmallScreen = () => {
    pageWrapper.style.backgroundImage = `linear-gradient(to right bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.186)), url("/static/bg${randomNumber}.jpg")`;
    pageWrapper.style.backgroundSize = "cover"

    rightArea.style.backgroundImage = ""
    rightArea.style.backgroundSize = ""
  }

  const setBackgroundForBigScreen = () => {
    rightArea.style.backgroundImage = `linear-gradient(to right bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.186)), url("/static/bg${randomNumber}.jpg")`;
    rightArea.style.backgroundSize = "cover"
  }

  if (screenSize > 999) {
    setBackgroundForBigScreen();
  } else {
    setBackgroundForSmallScreen();
  }

  window.onresize = (e) => {
    screenSize = e.target.innerWidth
    if (screenSize > 999) {
      setBackgroundForBigScreen();
    } else {
      setBackgroundForSmallScreen();
    }
  }

}

changeBackgroundImage();