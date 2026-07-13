/*
==========================================

PROJECT MODAL

==========================================
*/

function initModal() {

    // ==============================
    // ELEMENTOS
    // ==============================

    const modal = document.querySelector("#project-modal");

    if (!modal) return;

    const modalBody = modal.querySelector(".project-modal-body");

    const overlay = modal.querySelector(".project-modal-overlay");

    const closeButton = modal.querySelector(".project-modal-close");

    const buttons = document.querySelectorAll(".portfolio-link");

    // ==============================
    // ABRIR MODAL
    // ==============================

    function openModal(card) {

        const project = {

            title: card.dataset.title,

            category: card.dataset.category,

            city: card.dataset.city,

            area: card.dataset.area,

            description: card.dataset.description,

            image: card.dataset.image

        };

        modalBody.innerHTML = renderProject(project);

        modal.classList.add("is-open");

        document.body.classList.add("modal-open");

        modal.setAttribute("aria-hidden", "false");
        console.log(card);
        console.log(card.dataset);

    }

    // ==============================
    // FECHAR MODAL
    // ==============================

    function closeModal() {

        modal.classList.remove("is-open");

        document.body.classList.remove("modal-open");

        modal.setAttribute("aria-hidden", "true");

    }

    // ==============================
    // RENDERIZAR
    // ==============================

    function renderProject(project) {

        return `

            <img
                src="${project.image}"
                alt="${project.title}"
                class="project-modal-image">

            <div class="project-modal-content">

                <span class="project-modal-category">

                    ${project.category}

                </span>

                <h2 id="project-modal-title">

                    ${project.title}

                </h2>

                <div class="project-modal-info">

                    <span>📍: ${project.city}</span>

                    <span>📐: ${project.area}</span>

                </div>

                <p>

                    ${project.description}

                </p>

                <a
                    href="https://wa.me/65996954074"
                    class="button button-primary">

                    Solicitar orçamento

                </a>

            </div>

        `;

    }

    // ==============================
    // EVENTOS DOS BOTÕES
    // ==============================

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            const card = button.closest(".portfolio-card");

            if (!card) return;

            openModal(card);

        });

    });

    // ==============================
    // FECHAR PELO X
    // ==============================

    closeButton.addEventListener("click", closeModal);

    // ==============================
    // FECHAR PELO OVERLAY
    // ==============================

    overlay.addEventListener("click", closeModal);

    // ==============================
    // FECHAR PELO ESC
    // ==============================

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            closeModal();

        }

    });

}

initModal();