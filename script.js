document.addEventListener('DOMContentLoaded', () => {
    const projectImages = document.querySelectorAll('.projectItem img');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('enlargedImage');
    const body = document.querySelector('body');

    // Trigger opening animation
    body.classList.add('animate-on-load');

    projectImages.forEach(img => {
        img.addEventListener('click', () => {
            modal.classList.add('active');
            modalImg.src = img.src;
            modalImg.alt = img.alt;
        });
    });

    modal.addEventListener('click', () => {
        modal.classList.remove('active');
    });
});

tsParticles.load("tsparticles", {
    background: {
        color: {
            value: "#0d1512" // match your current background
        }
    },
    fpsLimit: 60,
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 1.2,      // smooth escape time
                speed: 0.4,         // smoother repulse
                easing: "ease-out-quad" // adds soft motion
            }
        }
    },
    particles: {
        number: {
            value: 40,
            density: {
                enable: true,
                area: 800
            }
        },
        color: {
            value: "#1fd8a4"
        },
        opacity: {
            value: 0.6
        },
        size: {
            value: { min: 1, max: 3 }
        },
        move: {
            enable: true,
            speed: 0.4,
            direction: "none",
            straight: false,
            outModes: {
                default: "out"
            },
            random: true
        },
        shape: {
            type: "circle"
        },
        links: {
            enable: false
        }
    },
    detectRetina: true
});

