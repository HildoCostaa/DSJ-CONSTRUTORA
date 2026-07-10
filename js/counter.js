/*
==========================================
COUNTER
==========================================
*/
function initCounter() {

    const counters = document.querySelectorAll(".stat-number");

    if (!counters.length) return;

    const observer = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) return;

                animateCounter(entry.target);

                observer.unobserve(entry.target);

            });

        },

        {
            threshold: 0.4
        }

    );
    counters.forEach((counter) => {

        observer.observe(counter);
    });

}
function animateCounter(element) {

    const target = Number(element.dataset.counter);

    const suffix = element.dataset.suffix || "";

    const format = element.dataset.format || "";

    const duration = 1500;

    const startTime = performance.now();

    function update(currentTime) {

        const progress = Math.min(

            (currentTime - startTime) / duration,

            1

        );

        const value = Math.floor(progress * target);

        if (format === "k") {

            element.textContent =
                Math.floor(value / 1000) + "K" + suffix;

        } else {

            element.textContent =
                value + suffix;

        }

        if (progress < 1) {

            requestAnimationFrame(update);

        }

    }

    requestAnimationFrame(update);

}

initCounter();