/*
==========================================

ANIMATIONS

==========================================
*/
console.log("animation.js carregado");

export function initAnimations() {

    const elements = document.querySelectorAll("[data-animation]");
    console.log(elements);

    if (!elements.length) return;

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("animate");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15,
            rootMargin: "0px 0px -80px 0px"
        }

    );

    elements.forEach((element) => {

        observer.observe(element);

    });

}

initAnimations();