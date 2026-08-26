/* =========================================
   MODO OSCURO
========================================= */


/* Botón para cambiar el tema */

const themeToggle =
	document.getElementById("theme-toggle");


/* Icono dentro del botón */

const themeIcon =
	themeToggle.querySelector("i");


/*
   Revisamos si el usuario ya había seleccionado
   anteriormente el modo oscuro.
*/

const savedTheme =
	localStorage.getItem("theme");


/*
   Si el tema guardado es oscuro, activamos
   el modo oscuro al cargar la página.
*/

if (savedTheme === "dark") {

	document.body.classList.add("dark-mode");

	themeIcon.classList.remove("fa-moon");

	themeIcon.classList.add("fa-sun");

}


/*
   Cambiar entre modo claro y oscuro.
*/

themeToggle.addEventListener("click", () => {

	/* Alternar clase */

	document.body.classList.toggle("dark-mode");


	/*
	   Verificamos si actualmente está
	   activo el modo oscuro.
	*/

	const isDarkMode =
		document.body.classList.contains(
			"dark-mode"
		);


	/*
	   Cambiar el icono.
	*/

	if (isDarkMode) {

		themeIcon.classList.remove("fa-moon");

		themeIcon.classList.add("fa-sun");


		/*
		   Guardar preferencia.
		*/

		localStorage.setItem(
			"theme",
			"dark"
		);

	} else {

		themeIcon.classList.remove("fa-sun");

		themeIcon.classList.add("fa-moon");


		/*
		   Guardar preferencia.
		*/

		localStorage.setItem(
			"theme",
			"light"
		);

	}

});



/* =========================================
   MENÚ RESPONSIVE
========================================= */


/* Botón hamburguesa */

const menuToggle =
	document.getElementById("menu-toggle");


/* Lista de enlaces */

const navLinks =
	document.querySelector(".nav-links");


/*
   Abrir y cerrar el menú.
*/

menuToggle.addEventListener("click", () => {

	navLinks.classList.toggle("active");

});


/*
   Cerrar el menú al hacer clic
   en un enlace.
*/

const navigationLinks =
	document.querySelectorAll(
		".nav-links a"
	);


navigationLinks.forEach((link) => {

	link.addEventListener("click", () => {

		navLinks.classList.remove("active");

	});

});



/* =========================================
   BOTÓN VOLVER ARRIBA
========================================= */

const backToTop =
	document.getElementById("back-to-top");


/*
   Mostrar el botón después de hacer
   un poco de scroll.
*/

window.addEventListener("scroll", () => {

	if (window.scrollY > 400) {

		backToTop.classList.add("show");

	} else {

		backToTop.classList.remove("show");

	}

});


/*
   Volver al inicio.
*/

backToTop.addEventListener("click", () => {

	window.scrollTo({

		top: 0,

		behavior: "smooth"

	});

});



/* =========================================
   ANIMACIONES AL HACER SCROLL
========================================= */


/*
   Seleccionamos todos los elementos
   que tienen la clase "reveal".
*/

const revealElements =
	document.querySelectorAll(".reveal");


/*
   Creamos un observador para detectar
   cuándo los elementos aparecen en pantalla.
*/

const revealObserver =
	new IntersectionObserver(

		(entries) => {

			entries.forEach((entry) => {

				if (entry.isIntersecting) {

					entry.target.classList.add(
						"active"
					);

				}

			});

		},

		{

			threshold: 0.15

		}

	);


/*
   Observamos cada elemento.
*/

revealElements.forEach((element) => {

	revealObserver.observe(element);

});



/* =========================================
   FILTROS DE PROYECTOS
========================================= */


/* Botones de filtro */

const filterButtons =
	document.querySelectorAll(
		".filter-button"
	);


/* Tarjetas de proyectos */

const projectCards =
	document.querySelectorAll(
		".project-card"
	);


/*
   Recorrer todos los botones.
*/

filterButtons.forEach((button) => {

	button.addEventListener("click", () => {


		/*
		   Obtener la categoría del botón.
		*/

		const filter =
			button.dataset.filter;


		/*
		   Quitar la clase activa de todos
		   los botones.
		*/

		filterButtons.forEach((item) => {

			item.classList.remove("active");

		});


		/*
		   Activar el botón seleccionado.
		*/

		button.classList.add("active");


		/*
		   Recorrer los proyectos.
		*/

		projectCards.forEach((project) => {


			/*
			   Obtener la categoría.
			*/

			const category =
				project.dataset.category;


			/*
			   Mostrar todos los proyectos.
			*/

			if (filter === "all") {

				project.style.display = "block";

			}


			/*
			   Mostrar únicamente los proyectos
			   de la categoría seleccionada.
			*/

			else if (category === filter) {

				project.style.display = "block";

			}


			/*
			   Ocultar los demás proyectos.
			*/

			else {

				project.style.display = "none";

			}

		});

	});

});



/* =========================================
   VENTANA EMERGENTE DE CONTACTO
========================================= */


/* Botón de correo de la portada */

const openContactModal =
	document.getElementById(
		"open-contact-modal"
	);


/* Botón de correo de la sección contacto */

const openContactModalCard =
	document.getElementById(
		"open-contact-modal-card"
	);


/* Botón X para cerrar */

const closeContactModal =
	document.getElementById(
		"close-contact-modal"
	);


/* Ventana emergente completa */

const contactModal =
	document.getElementById(
		"contact-modal"
	);


/*
   Función para abrir el modal.
*/

function openModal(event) {

	/*
	   Evitar que el enlace "#"
	   lleve al inicio.
	*/

	if (event) {

		event.preventDefault();

	}


	contactModal.classList.add("active");

}


/*
   Abrir desde el icono de correo.
*/

openContactModal.addEventListener(
	"click",
	openModal
);


/*
   Abrir desde la sección contacto.
*/

openContactModalCard.addEventListener(
	"click",
	openModal
);


/*
   Cerrar con la X.
*/

closeContactModal.addEventListener(
	"click",
	() => {

		contactModal.classList.remove(
			"active"
		);

	}
);


/*
   Cerrar al hacer clic fuera del
   contenido del formulario.
*/

contactModal.addEventListener(
	"click",
	(event) => {

		if (event.target === contactModal) {

			contactModal.classList.remove(
				"active"
			);

		}

	}
);


/*
   Cerrar al presionar ESC.
*/

document.addEventListener(
	"keydown",
	(event) => {

		if (
			event.key === "Escape" &&
			contactModal.classList.contains(
				"active"
			)
		) {

			contactModal.classList.remove(
				"active"
			);

		}

	}
);



/* =========================================
   ENVÍO DEL FORMULARIO CON EMAILJS
========================================= */


/* =========================================
   CONFIGURACIÓN EMAILJS
========================================= */

/*
   REEMPLAZA estos tres valores por
   los datos de tu cuenta de EmailJS.
*/

/* ID del servicio configurado en EmailJS */
const EMAILJS_SERVICE_ID =
	"service_z8omwdj";

/* ID de la plantilla creada en EmailJS */
const EMAILJS_TEMPLATE_ID =
	"template_8hmc64o";

/* Clave pública de EmailJS */
const EMAILJS_PUBLIC_KEY =
	"AO3HW1AnBH4VnTDwa";
	

/* =========================================
   INICIALIZAR EMAILJS
========================================= */

/*
   Inicializamos EmailJS una única vez
   cuando la página carga.
*/

emailjs.init({

	publicKey:
		EMAILJS_PUBLIC_KEY

});



/* =========================================
   FORMULARIO
========================================= */


/* Seleccionar formulario */

const contactForm =
	document.getElementById(
		"contact-form"
	);


/*
   Seleccionar botón de envío.
*/

const sendMessageButton =
	contactForm.querySelector(
		".send-message-button"
	);



/* =========================================
   ENVÍO DEL FORMULARIO
========================================= */

contactForm.addEventListener(
	"submit",
	async (event) => {


		/*
		   Evitar que la página se recargue.
		*/

		event.preventDefault();


		/*
		   Guardar el contenido original
		   del botón.
		*/

		const originalButtonContent =
			sendMessageButton.innerHTML;


		/*
		   Desactivar el botón para evitar
		   múltiples envíos.
		*/

		sendMessageButton.disabled = true;


		/*
		   Mostrar estado de envío.
		*/

		sendMessageButton.innerHTML = `

			<i
				class="
					fa-solid
					fa-spinner
					fa-spin
				"
			></i>

			<span>
				Enviando...
			</span>

		`;


		try {


			/*
			   Enviar el formulario.
			*/

			await emailjs.sendForm(

				EMAILJS_SERVICE_ID,

				EMAILJS_TEMPLATE_ID,

				contactForm

			);


			/*
			   Mostrar mensaje de éxito.
			*/

			sendMessageButton.innerHTML = `

				<i
					class="
						fa-solid
						fa-check
					"
				></i>

				<span>
					¡Mensaje enviado!
				</span>

			`;


			/*
			   Limpiar los campos.
			*/

			contactForm.reset();


			/*
			   Esperar para mostrar el mensaje
			   de confirmación.
			*/

			setTimeout(() => {


				/*
				   Cerrar la ventana.
				*/

				contactModal.classList.remove(
					"active"
				);


				/*
				   Restaurar el botón.
				*/

				sendMessageButton.innerHTML =
					originalButtonContent;


				/*
				   Activar nuevamente el botón.
				*/

				sendMessageButton.disabled =
					false;


			}, 2000);


		} catch (error) {


			/*
			   Mostrar el error en consola.
			*/

			console.error(

				"Error al enviar el mensaje:",

				error

			);


			/*
			   Informar al usuario.
			*/

			sendMessageButton.innerHTML = `

				<i
					class="
						fa-solid
						fa-triangle-exclamation
					"
				></i>

				<span>
					Error al enviar
				</span>

			`;


			/*
			   Restaurar el botón después
			   de unos segundos.
			*/

			setTimeout(() => {


				sendMessageButton.innerHTML =
					originalButtonContent;


				sendMessageButton.disabled =
					false;


			}, 2500);

		}

	}
);

/* =========================================
   CONTENIDO DINÁMICO DE LA TARJETA
========================================= */

// Seleccionamos el texto dinámico
const dynamicText = document.getElementById("dynamic-text");

// Seleccionamos el ícono dinámico
const dynamicIcon = document.getElementById("dynamic-icon");

// Información que irá cambiando
const dynamicContent = [
	{
		text: "Disponible para<br><strong>nuevos retos</strong>",
		icon: "fa-code"
	},

	{
		text: "Apasionada por la<br><strong>tecnología</strong>",
		icon: "fa-laptop-code"
	},

	{
		text: "Transformando ideas en<br><strong>soluciones</strong>",
		icon: "fa-lightbulb"
	},

	{
		text: "Siempre lista para<br><strong>aprender</strong>",
		icon: "fa-graduation-cap"
	},

	{
		text: "Construyendo nuevas<br><strong>experiencias</strong>",
		icon: "fa-rocket"
	}
];

// Posición inicial
let currentContent = 0;


/* =========================================
   FUNCIÓN PARA CAMBIAR EL CONTENIDO
========================================= */

function changeDynamicContent() {

	// Ocultamos el texto y el ícono
	dynamicText.classList.add("content-hidden");
	dynamicIcon.classList.add("content-hidden");


	// Esperamos a que termine la animación
	setTimeout(() => {

		// Pasamos al siguiente contenido
		currentContent =
			(currentContent + 1) % dynamicContent.length;


		// Cambiamos el texto
		dynamicText.innerHTML =
			dynamicContent[currentContent].text;


		// Eliminamos las clases anteriores del ícono
		dynamicIcon.className =
			"fa-solid";


		// Agregamos el nuevo ícono
		dynamicIcon.classList.add(
			dynamicContent[currentContent].icon
		);


		// Mostramos nuevamente el contenido
		dynamicText.classList.remove("content-hidden");
		dynamicIcon.classList.remove("content-hidden");

	}, 300);
}


/* =========================================
   CAMBIAR CADA 3 SEGUNDOS
========================================= */

setInterval(changeDynamicContent, 3000);


/* =========================================
   PESTAÑAS DE EDUCACIÓN
========================================= */

/* Seleccionar todas las pestañas */
const educationTabs =
    document.querySelectorAll(
        ".education-tab"
    );


/* Seleccionar todos los paneles */
const educationPanels =
    document.querySelectorAll(
        ".education-panel"
    );


/* Recorrer cada pestaña */
educationTabs.forEach((tab) => {

    tab.addEventListener(
        "click",
        () => {

            /*
                Obtener el nombre del panel
                que se debe mostrar.
            */
            const targetPanel =
                tab.dataset.tab;


            /*
                Quitar la clase "active"
                de todas las pestañas.
            */
            educationTabs.forEach((item) => {

                item.classList.remove(
                    "active"
                );

            });


            /*
                Ocultar todos los paneles.
            */
            educationPanels.forEach((panel) => {

                panel.classList.remove(
                    "active"
                );

            });


            /*
                Activar la pestaña seleccionada.
            */
            tab.classList.add(
                "active"
            );


            /*
                Buscar y mostrar el panel
                correspondiente.
            */
            const selectedPanel =
                document.getElementById(
                    targetPanel
                );


            if (selectedPanel) {

                selectedPanel.classList.add(
                    "active"
                );

            }

        }
    );

});

/* =========================================
   VER MÁS / VER MENOS CURSOS
========================================= */

/*
   Seleccionar todos los botones
   "Ver más cursos".
*/
const showCoursesButtons =
    document.querySelectorAll(
        ".show-courses-button"
    );


/*
   Recorrer cada botón.
*/
showCoursesButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                /*
                   Buscar la tarjeta completa
                   donde se encuentra el botón.
                */
                const courseCategory =
                    button.closest(
                        ".course-category"
                    );


                /*
                   Agregar o quitar la clase
                   "show-extra".
                */
                courseCategory.classList.toggle(
                    "show-extra"
                );


                /*
                   Verificar si los cursos
                   adicionales están visibles.
                */
                const extraCoursesVisible =
                    courseCategory.classList.contains(
                        "show-extra"
                    );


                /*
                   Cambiar el texto del botón.
                */
                if (extraCoursesVisible) {

                    button.childNodes[0].textContent =
                        "Ver menos cursos ";

                } else {

                    button.childNodes[0].textContent =
                        "Ver más cursos ";

                }

            }
        );

    }
);


/* =========================================
   CARRUSEL AUTOMÁTICO DE IMÁGENES
   DE LOS PROYECTOS
========================================= */

const projectCarousels = document.querySelectorAll(".project-carousel");


projectCarousels.forEach((carousel) => {

    /* Obtener todas las imágenes del carrusel */
    const slides = carousel.querySelectorAll(".project-slide");

    /* Índice de la imagen actual */
    let currentSlide = 0;


    /* Cambiar automáticamente cada 4 segundos */
    setInterval(() => {

        /* Ocultar imagen actual */
        slides[currentSlide].classList.remove("active");


        /* Pasar a la siguiente imagen */
        currentSlide = (currentSlide + 1) % slides.length;


        /* Mostrar nueva imagen */
        slides[currentSlide].classList.add("active");

    }, 4000);

});