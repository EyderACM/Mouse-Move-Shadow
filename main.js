const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
//How far is the shadow gonna to go
const walk = 100; //100px 

function shadow (e){
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = ((x / width * walk) - (walk / 2));
    const yWalk = ((y / height * walk) - (walk / 2));

    text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`;

    console.log(xWalk, yWalk);
}

hero.addEventListener('mousemove', shadow);

