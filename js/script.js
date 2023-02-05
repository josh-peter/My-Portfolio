const header = document.querySelector("header");

// skills rotate

const first_skill = document.querySelector(".skills:first-child");
const sk_counter = document.querySelectorAll(".counter span");
const progress_bar = document.querySelectorAll(".skills svg circle");
const ml_selections = document.querySelector(".milestones");
const ml_counter = document.querySelectorAll(".number span");
const prt_section = document.querySelector(".portfolio");
const zoom_icons = document.querySelectorAll(".zoom-icon");
const Modal_overlay = document.querySelector(".modal-overlay");
const images = document.querySelectorAll(".images img");
const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn");

window.addEventListener("scroll", () => {
    if (!skilledPlay) skillsCounter()
    if(!mlplayed) mlcounter()
})

function updateCount(num, maxNum) {
    let currentNum = +num.innerText;
    // console.log(currentNum);

    if (currentNum < maxNum) {
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num, maxNum);
        }, 12)
    }
}


// sticky navbar here

function stickyHeader() { 
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyHeader();

window.addEventListener("scroll", stickyHeader);

// scroll animation

let scr = ScrollReveal({
    duration: 2500,
    distance: "60px"
})

scr.reveal(".showcase-info", {delay: 600})
scr.reveal(".showcase-image", { origin: "top", delay: 700 })


// skills progress bar animation

function hasReached(el) {
    let topPosition = el.getBoundingClientRect().top;
    if (window.innerHeight >= topPosition + el.offsetHeight) {
        return true;
    } else {
        return false;
    }
}

let skilledPlay = false;

function skillsCounter() {
    if (!hasReached(first_skill)) return;
    
    skilledPlay = true;

    sk_counter.forEach((counter, i) => {
        let target = +counter.dataset.target;
        // console.log(typeof target);
        let strokeValue = 427 - 427 * (target / 100);
        
        progress_bar[i].style.setProperty("--target", strokeValue);

        setTimeout(() => {
            updateCount(counter, target)
        }, 400)
    })

    progress_bar.forEach((p) => (p.style.animation = "progress 2s ease-in-out forwards"))
}

// services animation counter

let mlplayed = false;

function mlcounter() {
    if (!hasReached(ml_selections)) return;

    let mlplayed = true;
    
    ml_counter.forEach((ctr) => {
        let target = ctr.dataset.target;
        
        setTimeout(() => {
            updateCount(ctr, target);
        }, 400);
    })
}

// portfolio filter animation here

let mixer = mixitup('.portfolio-gallery', {
    selectors: {
        target: '.prt-card',
    },
    animation: {
        duration: 500
    }
});


// modal popup animation animation here

let currentIndex = 0;

zoom_icons.forEach((icn, i) => icn.addEventListener("click", () => {
    prt_section.classList.add("open")
    document.body.classList.add("stopScrolling")
    
    currentIndex = i;
    changeImage(currentIndex);
}));


Modal_overlay.addEventListener("click", () => {
    prt_section.classList.remove("open")
    document.body.classList.remove("stopScrolling")
});

prev_btn.addEventListener("click", () => {

    if (currentIndex === 0) {
        currentIndex = 5;
    } else {
        currentIndex--;
    }

    changeImage(currentIndex);
})

next_btn.addEventListener("click", () => {

    if (currentIndex === 0) {
        currentIndex = 5;
    } else {
        currentIndex ++;
    }

    changeImage(currentIndex);
})

function changeImage(index) {
    images.forEach(img => img.classList.remove("showImage"));
    images[index].classList.add("showImage");
}

// slider animation animation here


const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 500,
    autoplay: true,
  
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  });











































// let mixer = mixitup('.portfolio-gallery', {
//     selectors: {
//         target: '.prt-card'
//     },
//     animation: {
//         duration: 500,
//     }
// });


// // pop up animation counter

// let currentIndex = 0;

// zoom_icons.forEach((icn, i) => icn.addEventListener("click", () => {
//     prt_section.classList.add("open")

//     document.body.classList.add("stopScrolling")

//     currentIndex = i;
//     changeImage(currentIndex);
// }));

// Modal.addEventListener("click", () => {
//     prt_section.classList.remove("open")
//     document.body.classList.add("stopScrolling")
// });


// function changeImage(index) {
    
// }