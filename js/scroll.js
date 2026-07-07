/*
==========================================

HEADER SCROLL

==========================================
*/

/*
==========================================

HEADER SCROLL

==========================================
*/

function initHeaderScroll() {

    const header = document.querySelector(".header");

    const backToTop = document.querySelector(".back-to-top");

    if (!header) return;

    function updateHeader() {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

        if (backToTop) {

            backToTop.classList.toggle(

                "show",

                window.scrollY > 500

            );

        }

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader);

    /* ==================================================
       BOTÃO VOLTAR AO TOPO
    ================================================== */

    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

}

initHeaderScroll();
