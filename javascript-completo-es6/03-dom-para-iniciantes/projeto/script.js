function handleKeyboard(event){
    if(event.key === 'a'){
        document.body.classList.toggle('azul');
    }
}

window.addEventListener('keydown', handleKeyboard);

const imgs = document.querySelectorAll('img');

function handleImg(event){
    console.log(event.target);
}


imgs.forEach((img) => {
    img.addEventListener('click', handleImg);
});