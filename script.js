var crsr =document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    
})
var blur =document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    blur.style.left=dets.x-200+"px"
    blur.style.top=dets.y-200+"px"
    
})
var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
     elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor="transparent"
     })
     elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid chartreuse"
        crsr.style.backgroundColor="chartreuse"
     })
})


gsap.to('#nav',{
    backgroundColor:"black",
    duration:"1",
    height:"70px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -12%",
        scrub:2
    }
})
gsap.to("#main",{
   backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:3
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:1
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:1
    }
})
gsap.from("#colon1",{
    y:"-70",
    y:"-70",
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y:70,
    y:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#page4",{
    y:50,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:4
    }
})