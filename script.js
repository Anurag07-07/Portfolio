function loadingAnimation(params) {
  
  var tl = gsap.timeline()

tl.from(".line h1", {
  y:150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
});

tl.from("#line-1-part1", {
  opacity: 0,
  onStart: function(){

    var h5timer = document.querySelector('#line-1-part1 h5')
    var grow = 0;
    setInterval(() => {
    if (grow < 100) {
      grow++;
      h5timer.innerHTML = grow;
    }else{
    grow = 100;
    }
  }, 30);
  }
})

tl.to('.line h2',{
  animationName:'anime',
  opacity: 1
})

tl.to("#loader",{
  opacity: 0,
  duration: 0.2,
  delay:4,
})

tl.from("#page1",{
  delay: 0.2, 
  y:1600,
  opacity: 0,
  duration: 0.6,
  ease: Power4,
})

tl.to('#loader',{
  display: 'none',
})
tl.from('#nav',{
  opacity: 0,
})
tl.from(".hero h1",{
  y:100,
  stagger: 0.2,
  duration: 0.5,
  ease: Power4,
})
  
}

loadingAnimation()

const language = document.querySelector('#language')

const languageArray = ['JS','C++','JAVA','RUST','TS']
setInterval(()=>{
  const randomLanguage = languageArray[Math.floor(Math.random()*languageArray.length)]
  language.innerHTML = randomLanguage
},1000)



function cursorAnimation(params) {
  document.addEventListener('mousemove',(e)=>{
    gsap.to('#crsr',{
      left:e.x,
      top:e.y,
      duration:0.5,
      ease:Power2
    })
  })
  
  Shery.makeMagnet("#nav-part2 h3");
    
}

cursorAnimation()