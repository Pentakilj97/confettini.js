console.log('confetti')

function firstTest() {
    confetti({
        particleCount: 500,
        spread: 90,
        origin: { y: 0.6 }
      });
}


function secondTest() {
    confetti({
        particleCount: 500,
        angle: 120,
        spread: 120,
        origin: { x: 1}     
     });
    
}
function thirdTest() {
    confetti({
        ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ['star']    
     });
    
}
function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    particleCount: randomInRange(50, 100),
    origin: { y: 0.6 }
  });

let count = 200;
let defaults = {
  origin: { y: 0.7 }
};


function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio)
    }));
  }
  
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });


  const pippo= document.getElementById('pippo')

  const p=document.createElement('p')

  const text=document.createTextNode('ciao')

  p.appendChild(text)
  pippo.appendChild(p)

  $('#pippo').append($('<p>').text('ciao jquery'))