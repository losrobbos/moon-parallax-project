const imgStars = document.querySelector("img[alt=Stars]")
const imgMoon = document.querySelector("img[alt=Moon]")
const imgMountainBack = document.querySelector("img[alt=Mountain_B]")
const imgMountainFront = document.querySelector("img[alt=Mointain_F]")
const heroTitle = document.querySelector("h1")

window.onscroll = (ev) => {
    const currY = window.scrollY

    // TODO: apply relative TRANSFORM to current position instead of layout props top/left

    // move moon down
    imgMoon.style.translate = "0 " + currY*0.8 + "px"

    // move title from center to left (negative x)
    heroTitle.style.translate = `calc(-50% - ${currY*0.5}px) calc(-50% + ${currY*0.5}px)`

    // move back mountains slowly down
    imgMountainBack.style.translate = "0 " + currY*0.25 + "px"
}

