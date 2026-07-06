

function initMenu() {

    /* ==================================================
   ELEMENTOS
================================================== */

const menuButton = document.querySelector(".header-menu-button");

const drawer = document.querySelector(".navigation-drawer");

const closeButton = document.querySelector(".navigation-drawer-close");

const overlay = document.querySelector(".navigation-drawer-overlay");

/* ==================================================
   VALIDAÇÃO
================================================== */

if (!menuButton || !drawer || !closeButton || !overlay) {

    console.warn("Menu não encontrado.");} 
    else  {

        /* ==================================================
        ABRIR MENU
        ================================================== */

       function openDrawer() {

            drawer.classList.add("is-open");

            drawer.setAttribute("aria-hidden", "false");

            menuButton.setAttribute("aria-expanded", "true");

            document.body.style.overflow = "hidden";

        }

        /* ==================================================
        FECHAR MENU
        ================================================== */

        function closeDrawer() {

            drawer.classList.remove("is-open");

            drawer.setAttribute("aria-hidden", "true");

            menuButton.setAttribute("aria-expanded", "false");

            document.body.style.overflow = "";

        }

        /* ==================================================
        EVENTOS
        ================================================== */

        menuButton.addEventListener("click", openDrawer);

        closeButton.addEventListener("click", closeDrawer);

        overlay.addEventListener("click", closeDrawer);

        const navLinks = drawer.querySelectorAll("a");
        /* ==================================================
        FECHAR AO CLICAR NO LINK
        ================================================== */

        navLinks.forEach(link => {

            link.addEventListener("click", closeDrawer);

        });

        /* ==================================================
   FECHAR COM ESC
================================================== */

        document.addEventListener("keydown", (event) => {

            if (

                event.key === "Escape" &&

                drawer.classList.contains("is-open")

            ) {

                closeDrawer();

            }

        });
    }

}



initMenu();