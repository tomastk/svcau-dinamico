/* Código del menu desplegable */

const ham = document.querySelector(".hamburguer-menu#hamburguer");
const main = document.querySelector('main')
ham.addEventListener('click', () => {
  document.getElementById('menu').classList.toggle('showed')
});
const submenu = document.getElementById("sub-menu")
submenu.addEventListener('click', () =>{
  document.querySelector('.submenu').classList.toggle("showed");
  document.getElementById("header").classList.toggle('fixed');
  main.classList.toggle('down');
})

/* Código de la Tabla de Contenidos (Desktop) */

const tablaDeContenidos = document.getElementById('tabla')
const footer = document.querySelector('footer')
function expandirTabla(entradas, observer) {
  entradas.forEach(entrada => {
    if(entrada.isIntersecting){
      tabla.classList.add("expanded");
    }
  });
}

function contraerTabla(entradas, observer){
  entradas.forEach(entrada => {
    if (entrada.isIntersecting){
      tabla.classList.remove("expanded")
      if(entrada.target.nodeName === "FOOTER"){
        tabla.classList.add("footerVersion")
      }else{
        tabla.classList.remove("footerVersion")
      }
    }
  })
}


const observer = new IntersectionObserver(expandirTabla, {
  root: null,
  rootMargin: "-100px 0px 0px 0px",
  threshold: 1,
});

const observer2 = new IntersectionObserver(contraerTabla, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: .5
})

const breakPoint = document.querySelector('.breakPoint');

observer.observe(breakPoint);
observer2.observe(main)
observer2.observe(footer)

