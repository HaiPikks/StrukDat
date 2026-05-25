// =======================
// NAVBAR EFFECT
// =======================

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("active");

    } else {

        navbar.classList.remove("active");

    }

});


// =======================
// CARD ANIMATION
// =======================

const cards =
document.querySelectorAll(".card");

function revealCards(){

    cards.forEach((card) => {

        const windowHeight =
        window.innerHeight;

        const cardTop =
        card.getBoundingClientRect().top;

        if(cardTop < windowHeight - 100){

            card.classList.add("show");

        }

    });

}

window.addEventListener(
    "scroll",
    revealCards
);

revealCards();


// =======================
// SMOOTH SCROLL
// =======================

const anchors =
document.querySelectorAll('a[href^="#"]');

anchors.forEach((anchor) => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});


// =======================
// TYPING EFFECT
// =======================

const typingElement =
document.querySelector(".typing");

if(typingElement){

    const text =
    "Website Struktur Data & Algoritma";

    let index = 0;

    function typingEffect(){

        if(index < text.length){

            typingElement.innerHTML +=
            text.charAt(index);

            index++;

            setTimeout(
                typingEffect,
                70
            );

        }

    }

    typingEffect();

}