/*
==========================================

PROJECT MODAL

==========================================
*/
import { projects } from "./project.js";

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

    let currentProject = null;
    
    let currentSlide = 0;

    // ==============================
    // ABRIR MODAL
    // ==============================

    function openModal(card) {

        const projectId = card.dataset.project;

        currentProject = projects[projectId];

        currentSlide = 0;
        if (!currentProject) {

            console.error(`Projeto "${projectId}" não encontrado.`);

            return;

        }

        renderCurrentSlide();
        modal.classList.add("is-open");

        document.body.classList.add("modal-open");

        modal.setAttribute("aria-hidden", "false");
        console.log(card);
        console.log(card.dataset);
        console.log("Project ID:", projectId);
        console.log("Projects:", projects);
        console.log("Projeto encontrado:", projects[projectId]);

    }

    // ==============================
    // FECHAR MODAL
    // ==============================

    function closeModal() {

        modal.classList.remove("is-open");

        document.body.classList.remove("modal-open");

        modal.setAttribute("aria-hidden", "true");

    }
// ===============================
// ======CURRENT
// ===============================
    function renderCurrentSlide(){

        const media = currentProject.slides[currentSlide];

        modalBody.innerHTML = renderProject(
            currentProject,
            media
        );
        bindGalleryEvents()
    }
    function renderIndicators() {

        return currentProject.slides
            .map((_, index) => {

                return `

                    <button
                        class="project-modal-dot ${index === currentSlide ? "is-active" : ""}"
                        data-index="${index}"
                        type="button"
                        aria-label="Ir para mídia ${index + 1}">
                    </button>

                `;

            })
            .join("");

    }

    function bindGalleryEvents() {
        const previousButton = modalBody.querySelector(".project-modal-prev");

        const nextButton = modalBody.querySelector(".project-modal-next");

        const dots = modalBody.querySelectorAll(".project-modal-dot");
        dots.forEach((dot) => {

            dot.addEventListener("click", () => {

                currentSlide = Number(dot.dataset.index);

                renderCurrentSlide();

            });

        });
     if(nextButton){

            nextButton.addEventListener("click",()=>{

                currentSlide++;

                if(currentSlide >= currentProject.slides.length){

                    currentSlide = 0;

                }

                renderCurrentSlide();

            });

        }

       if(previousButton){

            previousButton.addEventListener("click",()=>{

                currentSlide--;

                if(currentSlide < 0){

                    currentSlide = currentProject.slides.length - 1;

                }

                renderCurrentSlide();

            });

        }
    }
    // ==============================
    // RENDERIZAR
    // ==============================


    function renderProject(project, media) {
        const hasMultipleSlides = project.slides.length > 1;

        return `
            <div class="project-modal-media">

                <div class="project-modal-viewer">

                    ${renderMedia(media)}
                    ${hasMultipleSlides ? `

                        <button
                            class="project-modal-prev"
                            type="button"
                            aria-label="Mídia anterior">

                            ❮

                        </button>

                        ` : ""
                    }

                    ${hasMultipleSlides ? `

                        <button
                            class="project-modal-next"
                            type="button"
                            aria-label="Próxima mídia">

                            ❯

                        </button>

                        ` : ""
                    }
                </div>

                <div class="project-modal-indicators">

                    ${renderIndicators()}

                </div>  
                
            </div>

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

                    ${media.description}

                </p>

                <a
                    href="https://wa.me/65996954074"
                    class="button button-primary">

                    Solicitar orçamento

                </a>

            </div>

        `;

    }

    function renderMedia(media) {

        if (media.type === "video") {

            return `
                <video
                    class="project-modal-video"
                    controls
                    playsinline
                    preload="metadata">

                    <source
                        src="${media.src}"
                        type="video/mp4">

                </video>
            `;
        }

        return `
            <img
                src="${media.src}"
                alt=""
                class="project-modal-image">
        `;
    }

    // ==============================
    // EVENTOS DOS BOTÕES
    // ==============================

    buttons.forEach((button) => {

        button.addEventListener("click", () => {
            console.log("cclick identificado!")
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