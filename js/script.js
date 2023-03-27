/*
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector("#header .img_logo").style.height  = "100px";
    document.querySelector("#header .img_logo").style.width  = "100px";
  } else {
    document.querySelector("#header .img_logo").style.height = "auto";
    document.querySelector("#header .img_logo").style.width  = "auto";
  }
}
*/


 
/*
let scrollPos = window.scrollY;

// grab your header element
const header = document.querySelector(".header");

// set when the nav shrinks (after __ px)
const whenHeaderShrinks = 50;

// have the browser "listen" for when the user scrolls
window.addEventListener("scroll", function() {
  scrollPos = window.scrollY;
  
  // if scroll position is greater than whenHeaderShrinks (line 7)
  // add the class "is-fixed"
  // otherwise, remove the "is-fixed" class
  if (scrollPos >= whenHeaderShrinks) {
    header.classList.add("is-shrunk");
  } else {
    header.classList.remove("is-shrunk");
  }
});
*/



  


/*
var wp = document.body.scrollWidth,
    ww = window.innerWidth,
    smax =  wp - ww,
    smin = 0,
    wmin = 100,
    wmax = 300,
    ds = smax - smin,
    dw = wmax - wmin; 
    window.addEventListener('scroll', function () {
      var s = window.pageYOffset; // current scrollTop
      var w = wmax - (dw * s) / ds;
      
      element.style.width = w + 'px';
    });
     

/*
    var element = document.getElementById('d');

var hp   = document.body.scrollHeight,
    hw   = window.innerHeight,
    smax = hp - hw,
    smin = 50,
    hmin = 100,
    hmax = 500,
    ds   = smax - smin,
    dh   = hmax - hmin;



window.addEventListener('scroll', function () {
    var s = window.pageYOffset; // current scrollTop
    var h = hmax - (dh * s) / ds;
   

    element.style.height = h + 'px';
    
});




const tl = gsap.timeline({
  scrollTrigger:{
   
trigger: ".header_logo",
  start: "top top",
  end: "100px",
  
  scrub: true
  }
  
  



});

tl.from(".d",{
  xPercent: -50,
  yPercent: -50,
  x: 0,
  y: 0,
  x: innerWidth / 2,
  y: innerHeight / 2
 
  
})

  tl.to(".d", {  
    y: -200,
    x: -200,
  
  scale: 0.2,
 
  
});

gsap.from (".video02",{
 
  opacity: 0,
  scrollTrigger:{
    ease: "none",
trigger: ".video02_video01",
  start: "center",
  end: "500px",
  
  scrub: true
  },
});

gsap.to(".video02",{
 
  y: 200,
  x: 200,

scale: 0.2,


  




})


 */









/*


gsap.to(".logoscoot", {  
  y: -2000,
 rotation:360,
 duration:2.5,
 
  scrollTrigger:{
  trigger: ".wrapper",
  start: "-550px",
  end:"-300px",
 
  

  scrub: true
  }
});
gsap.to(".logoscoot2", {  
  y: -1000,
 rotation:360,
 duration:2.5,
 
  scrollTrigger:{
  trigger: ".wrapper",
  start: "-550px",
  end:"-300px",

  scrub: true
  }
});
gsap.to(".logoscoot3", {  
  y: -1000,
yoyo:true,
 duration:2.5,
 
  scrollTrigger:{
  trigger: ".wrapper",
  start: "-550px",
  end:"-100px",

  scrub: true
  }

});

gsap.to(".logoscoot5", {  
  y: -1000,
yoyo:true,
 duration:2.5,
 
  scrollTrigger:{
  trigger: ".wrapper",
  start: "-550px",
  end:"-100px",

  
  }

});

ScrollTrigger.create({
  trigger: '.zagolovok',
  start: "top 25%",
end:"1000px",
  pin:  true,
  pinSpacing:false,
 
markers:true,
scrub: true,
});

*/
ScrollTrigger.saveStyles(".pusto2, #c, .zagolovok, .video01, .video02, .logotip, .description, .scoot ");

if (ScrollTrigger.isTouch !== 2) {

  ScrollTrigger.matchMedia({
    "(min-width: 800px)": function() {
let tl001 = gsap.timeline({

  scrollTrigger:{
  trigger: ".pusto2",
  start: "top top",
  end: "1000px",

  scrub: true,
  }
  
  



});

tl001.from('#c',{


 
  
});

  tl001.to('#c', {    
    y: -350,
    x: -850,
  
  scale: 0.25,
 
  
});

    },
    "(max-width: 480px)": function() {

      let tl667 = gsap.timeline({
    
        scrollTrigger:{
        trigger: "#c",
        start: "top ",
        scrub:true,
      pin:true,
      
      
        }
        
        
      
      
      
      });
      
      tl667.from("#c",{
    
       
       
      });
      
        tl667.to("#c", {  
         
        duration:1,
        scale: 0.35,
       
        
      });
      }

  });

  ScrollTrigger.matchMedia({
    "(min-width: 800px)": function() {
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".zagolovok",
    start: "-260px",
 end:"5400px",
 pin:  true,
    pinSpacing:false,
   
  markers:true,

  }
});


tl2.from(".zagolovok", { x:1500, opacity:0, scale:0, duration:1.5} );
},
"(max-width: 480px)": function() {
    
  let tl22 = gsap.timeline({
    scrollTrigger: {
      trigger: ".zagolovok",
      start: "-50px",
   end:"1500px",
   
   pin:  true,
  
   pinSpacing:false,
  
    }
  });


  tl22.from(".zagolovok", { x:500, opacity:0, scale:0, duration:1} );
    },


  });

  ScrollTrigger.matchMedia({
    "(min-width: 800px)": function() {
let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".video01",
    start: "-200px",
 end:"4500px",

 pin:  true,
    pinSpacing:false,
  markers:true,
 
  }
});
tl3.from(".video01",{ y:100});
    },
    "(max-width: 480px)": function() {
    
      let tl11 = gsap.timeline({
        scrollTrigger: {
          trigger: ".video01",
          start: "-150px",
       end:"1000px",
       pin:  true,
       pinSpacing:false,
        
      
        }
  });
  tl11.from(".video01", { y:0, opacity:0, scale:0,  } );
},


});

  
ScrollTrigger.matchMedia({
  "(min-width: 800px)": function() {
let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".video02",
    start: "-200px",
 end:"3800px",
  
 pin:  true,
    pinSpacing:false,
  markers:true,
 
  }

});

tl4.from(".video02", { y:100});
  },
  "(max-width: 480px)": function() {
    
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".video02",
        start: "-100px",
     end:"2000px",
     pin:  true,
       
      
    
      }
    });
  
  
    tl2.from(".video02", { y:100, opacity:0, scale:0, } );
      },
  
  
});


ScrollTrigger.matchMedia({

  "(min-width: 800px)": function() {

let tl8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".video03",
    start: "-200px",
 end:"3700px",
  
 pin:  true,
    pinSpacing:false,
  markers:true,
 
  }
});

tl8.from(".video03", { y:100});
  },
  "(max-width: 480px)": function() {
    
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".video03",
        start: "-100px",
     end:"2000px",
     pin:  true,
       
      
    
      }
    });
  
  
    tl2.from(".video03", { y:100, opacity:0, scale:0, } );
      },
  


});


let tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".logotip",
    start: "-200px",
 end:"3900px",
  
 pin:  true,
    pinSpacing:false,
  markers:true,
 
  }
});

tl6.from(".logotip", { y:100});

ScrollTrigger.matchMedia({

  "(min-width: 800px)": function() {
let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".description",
    start: "-380px",
 end:"2700px",

 pin:  true,
    pinSpacing:false,
  markers:true,
 
  }
});
tl5.from(".description", {x:1000 });

  }
});

ScrollTrigger.matchMedia({

  "(min-width: 800px)": function() {
let tl55 = gsap.timeline({
  scrollTrigger: {
    trigger: ".description2",
    start: "-480px",
 end:"2800px",

 pin:  true,
    pinSpacing:false,
  markers:true,
 
  }
});
tl55.from(".description2", {x:1000 });
}
});


ScrollTrigger.matchMedia({

  "(min-width: 800px)": function() {

let tl555 = gsap.timeline({
  scrollTrigger: {
    trigger: ".description3",
    start: "-580px",
 end:"2500px",

 pin:  true,
    pinSpacing:false,
  markers:true,
 
  }
});
tl555.from(".description3", {x:1000 });

  },
});
}