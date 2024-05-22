import anime from 'animejs/lib/anime.es.js';
function revealText(object){
    
        let items = document.querySelectorAll(object);
      var tlOne = anime.timeline()
      items.forEach(x=>{
        tlOne.add({
            targets: x,
            translateY: [200, 0],
            opacity:[0,1],
            scale:[1.1,1],
            easing: 'easeOutQuint',
            duration: 600,
          },'-=100')
      })
      

}

function fadeInText(object){
    
let items = document.querySelectorAll(object);
var tlOne = anime.timeline()
items.forEach(x=>{
  tlOne.add({
      targets: x,
      opacity:[0,1],
      scale:[1.1,1],
      easing: 'easeInQuint',
      duration: 300,
    },'-=100')
})
}

export {revealText,fadeInText}