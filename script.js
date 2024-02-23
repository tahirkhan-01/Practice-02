var tl =gsap.timeline()

tl.from("#nav-part2>img",{
    y:-100,
    duration:2
})

tl.from("#main>img", {
    // x:-200,
    scale:0,
    duration:2,
    opacity:0,
    stagger:1
})

tl.from("#arr",{
    scale:0,
    opacity:0
})

tl.to("#arr",{
    y:6,
    repeat:-1,
    duration:0.5,
    yoyo:true
})