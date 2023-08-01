const contenedor = document.querySelector('#contenedor');

document.querySelector('#boton-menu').addEventListener('click', () => {
	contenedor.classList.toggle('active');
});

const comprobarAncho = () => {
	if(window.innerWidth <= 768){
		contenedor.classList.remove('active');
	} else {
		contenedor.classList.add('active');
	}
}

comprobarAncho();

window.addEventListener('resize', () => {
	comprobarAncho();
});
/*
const videos = document.querySelectorAll('video');
videos.forEach(video => {
    const title = video.getAttribute('title');
    const div = document.createElement('div');
    div.innerText = title;
    video.parentNode.insertBefore(div, video.nextSibling);
// }); */

const videos = document.querySelectorAll('video');
videos.forEach(video => {
    const title = video.getAttribute('title');
    const div = document.createElement('div');
    div.innerText = title;
    video.parentNode.insertBefore(div, video.nextSibling.nextSibling);
});