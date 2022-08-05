const sasha = document.querySelector('.sasha');
const sprig = document.querySelector('.sprig');

const tome = new Audio();
tome.src = './images/tome.mp3';

const jump = () => {
    sasha.classList.add('jump');

    setTimeout(() => {
        sasha.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const sprigPosition = sprig.offsetLeft;
    const sashaPosition = +window.getComputedStyle(sasha).bottom.replace('px', '');

    console.log(sashaPosition);


    if (sprigPosition <= 180 && sprigPosition > 0 && sashaPosition < 105) {

        

        sprig.style.animation = 'none';
        sprig.style.left = `${sprigPosition}px`;

        sasha.style.animation = 'none';
        sasha.style.bottom = `${sashaPosition}px`;

        sasha.src = './images/coffin.png';
        tome.play();

        



        clearInterval(loop);

    }



})


document.addEventListener('keydown', jump);
