function cursorFffect(){
    var page1content = document.querySelector(".page1-content")
    var cursor = document.querySelector("#cursor")

page1content.addEventListener("mousemove",function(e){
    gsap.to(cursor,{
        x:e.x,
        y:e.y
    })
})

page1content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
page1content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}
cursorFffect()
function swiper(){var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      autoplay:{
        delay:2500,
        disableOnInteraction : true,
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });}
swiper()
function loader(){  var tl = gsap.timeline()
    tl.from("#loader h3",{
      x:200,
      opacity:0,
      duration:1,
      stagger:0.1
    })
    tl.to("#loader h3",{
      opacity:0,
      x:-40,
      stagger:0.1,
      duration:1
    })
    tl.to("#loader",{
      opacity:0
    })
    tl.from(".page1-content h1 span",{
      y:5,
      opacity:0,
      stagger:0.2,
      duration:0.5,
      delay:-0.5
    })
    tl.to("#loader",{
      display:"none"
    })
  }
loader() 