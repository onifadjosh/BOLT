// gsap.registerPlugin(ScrollTrigger);



gsap.to("#ani1", {
    scrollTrigger:{
        trigger: ".animation",
        scrub: 0.5,
        
    },
    x: 400,
    duration:1,
})

gsap.to("#ani2",{
    scrollTrigger:{
        trigger:".animation",
        scrub:0.5,
    },
    x:-400,
    duration:1,
})

gsap.to("#ani3",{
    scrollTrigger:{
        trigger:".animation",
        scrub:0.5,
    },
    x:400,
    duration:1,
})

