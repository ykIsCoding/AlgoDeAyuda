import anime from 'animejs/lib/anime.es.js';
function slideIn(fn){
    var tlOne = anime.timeline({duration: 200})
  tlOne.add({
        targets: '.mainDisplay',
        scaleX: 1.04,
        easing: 'easeInQuint',
        complete:function(anim) {
          fn()
        }
      });

    tlOne.add({
        targets: '.mainDisplay',
        scaleX: 1,
        easing: 'easeOutQuint',
        
    })
    
}


export {slideIn}