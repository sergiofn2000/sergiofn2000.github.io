let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
// ... tu código JavaScript existente ...

// Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    
    if (distancia_skills >= 300) {
        let habilidades = document.querySelectorAll(".niveles .nivel"); // Selecciona todos los elementos .nivel
        habilidades.forEach(nivel => nivel.classList.add("animation-class")); // Agrega la clase de animación a cada elemento
    }
}



//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

//boton CV
function download_cv(){
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.click();
}


// Obtén los elementos de los enlaces
const githubLink = document.getElementById('github-link');
const linkedinLink = document.getElementById('gmail-link');
const gmailLink = document.getElementById('linkedin-link');

// Función para añadir la clase "fa-beat"
function addBeatClass(event) {
  const icon = event.currentTarget.querySelector('i');
  icon.classList.add('fa-beat');
}

// Función para quitar la clase "fa-beat"
function removeBeatClass(event) {
  const icon = event.currentTarget.querySelector('i');
  icon.classList.remove('fa-beat');
}

if(githubLink && linkedinLink){
    githubLink.addEventListener('mouseenter', addBeatClass);
    githubLink.addEventListener('mouseleave', removeBeatClass);
    
    linkedinLink.addEventListener('mouseenter', addBeatClass);
    linkedinLink.addEventListener('mouseleave', removeBeatClass);
    
    gmailLink.addEventListener('mouseenter', addBeatClass);
    gmailLink.addEventListener('mouseleave', removeBeatClass);
    }