// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Crear la línea de tiempo GSAP pausada
  let tl = gsap.timeline({ paused: true });

  // Definir la animación para abrir el menú
  tl.to(".menu-overlay", {
      duration: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Abre completamente
      ease: "power2.out",
      onStart: function() {
          document.querySelector(".menu-overlay").style.zIndex = "10"; // Asegura que el overlay esté por encima de otros elementos
          document.querySelector(".menu-overlay").style.pointerEvents = "all"; // Permite eventos de puntero
      }
  });

  // Definir la animación para los enlaces y botones
  tl.from(
      ".menu-link, .btn",
      {
          opacity: 0,
          y: 60,
          stagger: 0.05,
          duration: 0.75,
          ease: "power1.inOut",
      },
      "<"
  );

  // Definir la animación para la vista previa del video
  tl.to(
      ".video-preview", {
          duration: 1,
          height: "200px",
          ease: "power2.out",
      }
  );

  // Definir la animación para el divisor
  tl.to(
      ".menu-divider", {
          duration: 2,
          width: "100%",
          ease: "power4.out",
      },
      "<"
  );

  // Función para abrir el menú
  function openMenu() {
      tl.play();
  }

  // Función para cerrar el menú
  function closeMenu() {
      tl.reverse();
      tl.eventCallback("onReverseComplete", function() {
          document.querySelector(".menu-overlay").style.pointerEvents = "none"; // Deshabilita eventos después de cerrar
          document.querySelector(".menu-overlay").style.zIndex = "-1"; // Devuelve el overlay detrás del contenido
      });
  }

  // Asignar eventos de clic a los botones de abrir y cerrar
  document.querySelector(".menu-open-btn").addEventListener("click", openMenu);
  document.querySelector(".menu-close-btn").addEventListener("click", closeMenu);

  // Asegurar que el menú esté oculto inicialmente
  tl.reverse();
});
