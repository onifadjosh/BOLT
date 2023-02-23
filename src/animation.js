// gsap.registerPlugin(ScrollTrigger);

// scroll trigger and animation effect using greensock (gsap)

gsap.to("#ani1", {
    scrollTrigger:{
        trigger: ".animation",
        scrub: 0.5,
        
    },
    x: 300,
    duration:2,
})

gsap.to("#ani2",{
    scrollTrigger:{
        trigger:".animation",
        scrub:0.5,
    },
    x:-300,
    duration:2,
})

gsap.to("#ani3",{
    scrollTrigger:{
        trigger:".animation",
        scrub:0.5,
    },
    x:300,
    duration:2,
})

// timeline effect using GSAP
var tl = gsap.timeline({
    delay:1,
    scrollTrigger:{
        trigger:"#ani3",

    },
})


tl.to( ".ani4",{
    scale:1.1,
    duration:1,
})
tl.to(".ani4",{
    x:-2000,
    duration:1,
})

