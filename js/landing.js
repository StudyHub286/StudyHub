/* =====================================
   STUDYHUB
   LANDING.JS
===================================== */


/* =====================================
   FAQ
===================================== */

const preguntas = document.querySelectorAll(".faq-pregunta");

preguntas.forEach((pregunta) => {

    pregunta.addEventListener("click", () => {

        const item = pregunta.parentElement;

        const respuesta = item.querySelector(".faq-respuesta");

        const abierto = item.classList.contains("activo");


        // Cierra todas las preguntas

        document.querySelectorAll(".faq-item").forEach((faq) => {

            faq.classList.remove("activo");

            faq.querySelector(".faq-respuesta").style.maxHeight = null;

        });


        // Si estaba cerrada, la abre

        if (!abierto) {

            item.classList.add("activo");

            respuesta.style.maxHeight = respuesta.scrollHeight + "px";

        }

    });

});

/* =====================================
   ANIMACIONES AL HACER SCROLL
===================================== */

const elementosAnimados = document.querySelectorAll(".animar");

const observer = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("visible");

        }

    });

}, {

    threshold:0.2

});

elementosAnimados.forEach((elemento) => {

    observer.observe(elemento);

});

/* =====================================
   ANIMACIÓN ESCALONADA DE TARJETAS
===================================== */

const tarjetas = document.querySelectorAll(".animar-card");

const observerCards = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            const grupo = entrada.target.parentElement.children;

            [...grupo].forEach((card, indice) => {

                setTimeout(() => {

                    card.classList.add("visible");

                }, indice * 150);

            });

            observerCards.unobserve(entrada.target);

        }

    });

},{

    threshold:0.2

});

tarjetas.forEach((card)=>{

    observerCards.observe(card);

});

/* =====================================
   NAVBAR ACTIVA
===================================== */

const secciones = document.querySelectorAll("main section");

const enlaces = document.querySelectorAll(".barra-navegacion a");

const observerNavbar = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            enlaces.forEach((enlace) => {

                enlace.classList.remove("activo");

                if (enlace.getAttribute("href") === "#" + entrada.target.id) {

                    enlace.classList.add("activo");

                }

            });

        }

    });

},{

    threshold:0.25

});

secciones.forEach((seccion)=>{

    observerNavbar.observe(seccion);

});

/* =====================================
   HEADER STICKY
===================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 20){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

/* =====================================
   MENÚ HAMBURGUESA
===================================== */

const btnMenu = document.querySelector(".btn-menu");

const menu = document.querySelector(".barra-navegacion");

/* ---------- Abrir / cerrar ---------- */

btnMenu.addEventListener("click", () => {

    menu.classList.toggle("activa");

    btnMenu.classList.toggle("activo");

});

/* ---------- Cerrar al tocar un enlace ---------- */

enlaces.forEach((enlace) => {

    enlace.addEventListener("click", () => {

        menu.classList.remove("activa");

        btnMenu.classList.remove("activo");

    });

});

/* ---------- Cerrar con Escape ---------- */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        menu.classList.remove("activa");

        btnMenu.classList.remove("activo");

    }

});

/* ---------- Restaurar al volver a escritorio ---------- */

window.addEventListener("resize", () => {

    if (window.innerWidth > 900) {

        menu.classList.remove("activa");

        btnMenu.classList.remove("activo");

    }

});

/* =====================================
   MODAL FUNCIONES
===================================== */

const funciones = {

    planificador:{
    icono:"📅",
    titulo:"Planificador",
    texto:"El planificador te permitirá organizar todo tu estudio desde un único lugar. Podrás crear tareas, programar exámenes, establecer fechas importantes y visualizar todas tus actividades en un calendario para mantener siempre el control de tu tiempo.",

    lista:[
        "Crear tareas y recordatorios.",
        "Organizar exámenes por fecha.",
        "Administrar objetivos de estudio.",
        "Visualizar todo en un calendario."
    ]
},

    biblioteca:{
    icono:"📚",
    titulo:"Biblioteca",
    texto:"La biblioteca reunirá todo tu material de estudio en un único espacio. Vas a poder guardar apuntes, PDFs, imágenes y archivos organizados por materia para encontrarlos rápidamente cuando los necesites.",

    lista:[
        "Guardar apuntes y documentos.",
        "Organizar archivos por materias.",
        "Acceder rápidamente a todo el contenido.",
        "Mantener el material siempre ordenado."
    ]
},

    resumenes:{
    icono:"📄",
    titulo:"Resúmenes",
    texto:"Organizá resúmenes personalizados y repasá los conceptos más importantes de cada materia. También podrás guardar tarjetas de estudio para practicar antes de un examen.",

    lista:[
        "Guardar resúmenes rápidos.",
        "Organizar flashcards.",
        "Repasar conceptos importantes.",
        "Estudiar de forma más eficiente."
    ]
},

        pomodoro:{
    icono:"⏱",
    titulo:"Pomodoro",
    texto:"El temporizador Pomodoro te ayudará a mantener la concentración alternando períodos de estudio con descansos cortos para mejorar tu productividad.",

    lista:[
        "Sesiones de estudio personalizadas.",
        "Descansos automáticos.",
        "Mayor concentración.",
        "Mejor administración del tiempo."
    ]
},

    ia:{
    icono:"🤖",
    titulo:"Asistente IA",
    texto:"El asistente inteligente estará disponible para responder preguntas, explicar temas difíciles, ayudarte a resolver ejercicios y acompañarte durante todo tu proceso de estudio.",

    lista:[
        "Responder preguntas.",
        "Explicar temas paso a paso.",
        "Ayudar con ejercicios.",
        "Brindar apoyo durante el estudio."
    ]
},

    examenes:{
    icono:"📝",
    titulo:"Exámenes",
    texto:"Practicá antes de cada evaluación resolviendo ejercicios organizados por materia. Así podrás identificar tus puntos fuertes y los temas que necesitás reforzar.",

    lista:[
        "Resolver evaluaciones de práctica.",
        "Organizar exámenes por materia.",
        "Medir tu progreso.",
        "Prepararte con mayor confianza."
    ]
},

    calculadora:{
    icono:"🧮",
    titulo:"Calculadora de notas",
    texto:"Calculá tus promedios y descubrí qué calificación necesitás para alcanzar tus objetivos académicos antes de rendir un examen.",

    lista:[
        "Calcular promedios automáticamente.",
        "Conocer la nota necesaria para aprobar.",
        "Planificar objetivos.",
        "Seguir tu rendimiento académico."
    ]
}

};

/* =====================================
   ELEMENTOS DEL MODAL
===================================== */

const modal = document.getElementById("modalFunciones");

const modalIcono = modal.querySelector(".modal-icono");

const modalTitulo = modal.querySelector(".modal-titulo");

const modalTexto = modal.querySelector(".modal-texto");

const modalLista = modal.querySelector(".modal-lista");

const botonCerrar = modal.querySelector(".modal-cerrar");

const botonesExplorar = document.querySelectorAll(".btn-explorar");


console.log(botonesExplorar);

/* =====================================
   ABRIR MODAL
===================================== */

botonesExplorar.forEach((boton) => {

    boton.addEventListener("click", () => {

        const funcion = boton.dataset.funcion;

        const datos = funciones[funcion];

        modalIcono.textContent = datos.icono;

        modalTitulo.textContent = datos.titulo;

        modalTexto.textContent = datos.texto;

        modalLista.innerHTML = "";

        datos.lista.forEach((item) => {

            modalLista.innerHTML += `
                <li>✔ ${item}</li>
        `;

    });

        modal.classList.add("activo");

        document.body.style.overflow = "hidden";

    });

});

/* =====================================
   CERRAR MODAL
===================================== */

function cerrarModal(){

    modal.classList.remove("activo");

    document.body.style.overflow = "";

}

botonCerrar.addEventListener("click", cerrarModal);

/* =====================================
   CERRAR HACIENDO CLICK AFUERA
===================================== */

modal.addEventListener("click",(e)=>{

    if(e.target === modal){

        cerrarModal();

    }

});

/* =====================================
   CERRAR CON ESC
===================================== */

document.addEventListener("keydown",(e)=>{

    if(e.key === "Escape"){

        cerrarModal();

    }

});

/* =====================================
   EMAILJS
===================================== */

emailjs.init({
    publicKey: "ffriThlh3EwDJzd5L"
});

/* =====================================
   FORMULARIO DE CONTACTO
===================================== */

const formulario = document.getElementById("form-contacto");
const botonEnviar = document.getElementById("btn-enviar");
const mensajeFormulario = document.getElementById("mensaje-formulario");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    // Oculta cualquier mensaje anterior
    mensajeFormulario.style.display = "none";
    mensajeFormulario.className = "";

    // Estado del botón
    botonEnviar.disabled = true;
    botonEnviar.innerHTML = `
<span class="spinner"></span>
&nbsp;
Enviando...
`;

    emailjs.send(
        "service_0zhpk6e",
        "template_dp3l0ae",
        {
            nombre: document.getElementById("nombre").value,
            email: document.getElementById("email").value,
            asunto: document.getElementById("asunto").value,
            mensaje: document.getElementById("mensaje").value
        }
    )

    .then(function(){

        formulario.reset();

        mensajeFormulario.className = "exito";
mensajeFormulario.style.display = "block";

mensajeFormulario.innerHTML =
"✅ ¡Mensaje enviado correctamente! Te responderemos dentro de las próximas 24 horas.";

botonEnviar.classList.add("enviado");

botonEnviar.innerHTML = "✓ Enviado correctamente";

    })

    .catch(function(){

mensajeFormulario.className = "error";
mensajeFormulario.style.display = "block";

mensajeFormulario.innerHTML =
"❌ No pudimos enviar tu mensaje. Intentá nuevamente.";

botonEnviar.classList.add("error");

botonEnviar.innerHTML = "✕ Error al enviar";

    })

.finally(function(){

    setTimeout(function(){

        botonEnviar.disabled = false;

        botonEnviar.classList.remove("enviado");
        botonEnviar.classList.remove("error");

        botonEnviar.innerHTML = "Enviar mensaje";

        mensajeFormulario.style.display = "none";
        mensajeFormulario.className = "";

    },2500);

});

});