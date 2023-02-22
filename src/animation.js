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

gsap.to( ,{
    scrollTrigger:{
        trigger:".animation",
        
    }
})

