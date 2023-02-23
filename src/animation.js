// gsap.registerPlugin(ScrollTrigger);



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

