const imgStars = document.querySelector("img[alt=Stars]")
const imgMoon = document.querySelector("img[alt=Moon]")
const imgMountainBack = document.querySelector("img[alt=Mountain_B]")
const imgMountainFront = document.querySelector("img[alt=Mointain_F]")
const heroTitle = document.querySelector("h1")

window.onscroll = (ev) => {
    const currY = window.scrollY

    // move moon down
    imgMoon.style.top = currY + "px";

    // move title from center to left (negative x)
    heroTitle.style.left = (550 - currY) + "px"

    // move back mountains slowly down
    imgMountainBack.style.top = (currY*0.3) + "px"

    // move 
}

