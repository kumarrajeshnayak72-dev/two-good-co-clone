function locomotiveAnimation(){

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length 
      ? locoScroll.scrollTo(value, 0, 0) 
      : locoScroll.scroll.instance.scroll.y;
  },

  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },

  pinType: document.querySelector("#main").style.transform 
    ? "transform" 
    : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
locomotiveAnimation();

function videoconAnimation(){
var videocon = document.querySelector("#video-container");
var playbtn = document.querySelector("#play")

videocon.addEventListener("mouseenter",()=>{
    gsap.to(play,{
        opacity : 1,
        scale : 1
    })
})

videocon.addEventListener("mouseout",()=>{
    gsap.to(play,{
        opacity : 0,
        scale : 0
    })
})

videocon.addEventListener("mousemove",(evt)=>{
    var rect = videocon.getBoundingClientRect();

    gsap.to(play,{
        left: evt.clientX - rect.left,
        top: evt.clientY - rect.top,
        duration:0.3
    })
})
}
videoconAnimation();

function loadingAnimation(){
    gsap.from("#page1 h1",{
    y:-100,
    opacity:0,
    delay:0.5,
    duration:0.9,
    stagger:0.4
})

gsap.from("#page1 #video-container",{
    scale:0.9,
    opacity:0,
    delay:1.5,
    duration:0.9,
})
}
loadingAnimation()

function hoverEffect(){
    const boxes = document.querySelectorAll("#page2 .elem .box");

    boxes.forEach((box) => {

    const logo1 = box.querySelector(".logo1");
    const logo2 = box.querySelector(".logo2");

    box.addEventListener("mouseenter", () => {
        logo1.style.display = "block";
        logo2.style.display = "block";
        gsap.from(box,{
            y:-100,
            duration:1,
            delay:0.3
        })
    });

    box.addEventListener("mouseleave", () => {
        logo1.style.display = "none";
        logo2.style.display = "none";
    });



});
}
hoverEffect();

function cursorAnimation(){
    const page3 = document.querySelectorAll("#page3");
document.addEventListener("mousemove",(elem)=>{
    gsap.to("#cursor",{
        left:elem.clientX,
        top:elem.clientY,
        duration:0.2
    })
})

page3.forEach((elem)=>{
    elem.addEventListener("mouseenter",()=>{
        gsap.to("#cursor",{
            scale:1
        })
    })
    elem.addEventListener("mouseleave",()=>{
        gsap.to("#cursor",{
            scale:0
        })
    })
})
}
cursorAnimation()

function navbarAnimation(){
    gsap.timeline({
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top -5%",
        end:"top -10%",
        scrub:true
    }
})

.to("#nav1",{
    opacity:0,
    y:-50
},"nav")

.to("#nav2",{
    opacity:1,
    y:-110
},"nav")
}
navbarAnimation();