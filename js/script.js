<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
    console.log("Sitio cargado correctamente");


    const enlaces = document.querySelectorAll("nav a");


    enlaces.forEach(enlace => {
        enlace.addEventListener("mouseover", () => {
            enlace.style.opacity = "0.8";
        });


        enlace.addEventListener("mouseout", () => {
            enlace.style.opacity = "1";
        });
    });
});
=======
document.addEventListener("DOMContentLoaded", () => {
    console.log("Sitio cargado correctamente");


    const enlaces = document.querySelectorAll("nav a");


    enlaces.forEach(enlace => {
        enlace.addEventListener("mouseover", () => {
            enlace.style.opacity = "0.8";
        });


        enlace.addEventListener("mouseout", () => {
            enlace.style.opacity = "1";
        });
    });
});
>>>>>>> e1ceceacb33049ca69dac9fb8fac4cbdc37e0f4f
