// use gsap scroll trigger for parallax image movements

gsap.registerPlugin(ScrollTrigger)

// Setup parallax on scroll (move items in different speeds)
gsap.to("img[alt=Moon]", {
    scrollTrigger: { scrub: true },
    y: 450
})
gsap.to("h1", {
    scrollTrigger: { scrub: 1 },
    x: -400,
    y: 250
})

gsap.to("img[alt=Mountain_B]", {
    scrollTrigger: { scrub: true },
    y: 100
})
