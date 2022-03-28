/*=============== JQUERY ===============*/
$(function() {  // jquery
    /*=============== CHANGE BACKGROUND HEADER ===============*/
    $(window).scroll( async () => {
        if(window.scrollY >= 50)
            $("#header").addClass('scroll-header');
        else
            $("#header").removeClass('scroll-header');
    }); // scrollheader


    /*=============== SERVICES MODAL ===============*/
    $(".services__button").click(async (event) => {
        $(event.target).parent().find(".services__modal").addClass('active-modal');
    });

    $(".services__modal-close").click( async () => {
        $(".services__modal").removeClass('active-modal');
    });

    
    /*=============== MIXITUP FILTER PORTFOLIO ===============*/
    let mixerPortfolio = mixitup('.work__container', {
        selectors: {
            target: '.work__card'
        },
        animation: {
            duration: 300
        }
    });

    /* Link active work */ 
    $(".work__item").click(async (event) => {
        $(".work__item").removeClass('active-work');
        $(event.target).addClass('active-work');
    });

    
    /*=============== SWIPER TESTIMONIAL ===============*/
    let swiperTestimonial = new Swiper(".testimonial__container", {
        spaceBetween: 24,
        loop: true,
        grabCursor: true,
    
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 48,
            },
        },
    });


    /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
    $(window).scroll( async () => {
        const scrollY = $(window).scrollTop();

        $("section").each(async (idx) => {
            let current = $("section")[idx];
            const sectionHeight = current.offsetHeight,
                  sectionTop = current.offsetTop - 58,
                  sectionId = current.attributes.id.nodeValue;


            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                $('.nav__menu a[href*=' + sectionId + ']').addClass('active-link');
                return false;
            } else {
                $('.nav__menu a[href*=' + sectionId + ']').removeClass('active-link');
            }
        });
    });


    /*=============== LIGHT DARK THEME ===============*/ 
    const toggleTheme = async () => {
        let currentTheme = $("body").hasClass("light-theme") ? 'light':'dark'; // determine current theme
        
        // enable light-theme
        if (currentTheme === 'dark') {
            // Add the light / icon theme
            $("body").addClass("light-theme");
            $("#theme-button").addClass("bxs-sun");
        } else {
            // Remove the light / icon theme
            $("body").removeClass("light-theme");
            $("#theme-button").removeClass("bxs-sun");
        }
    };

    // when the theme change button is pressed
    $("#theme-button").click( async () => {
        let currentTheme = $("body").hasClass("light-theme") ? 'light':'dark'; // determine current theme
        
        // enable light-theme
        if (currentTheme === 'dark') {
            // Add the light / icon theme
            $("body").addClass("light-theme");
            $("#theme-button").addClass("bxs-sun");
        } else { // disable light theme
            // Remove the light / icon theme
            $("body").removeClass("light-theme");
            $("#theme-button").removeClass("bxs-sun");
        }
    }); // toggle theme when theme button pressed


    /*=============== SCROLL REVEAL ANIMATION ===============*/
    const sr = ScrollReveal ({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
        //reset: true,
    })
    
    sr.reveal(`.home__data`);
    sr.reveal(`.home__handle`, {delay: 700});
    sr.reveal(`.home__social, .home__scroll`, {delay: 900, origin: 'bottom'});
    
    
    

}); //jquery

/*=============== LIGHT DARK THEME ===============*/ 
// const themeButton = document.getElementById('theme-button')
// const lightTheme = 'light-theme'
// const iconTheme = 'bxs-sun'

// // Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// // We obtain the current theme that the interface has by validating the light-theme class
// const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bxs-moon' : 'bx bxs-sun'

// // We validate if the user previously chose a topic
// if (selectedTheme) {
//   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
//   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
//   themeButton.classList[selectedIcon === 'bx bxs-moon' ? 'add' : 'remove'](iconTheme)
// }

// // Activate / deactivate the theme manually with the button
// themeButton.addEventListener('click', () => {
//     // Add or remove the light / icon theme
//     document.body.classList.toggle(lightTheme)
//     themeButton.classList.toggle(iconTheme)
//     // We save the theme and the current icon that the user chose
//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// })


/*=============== SCROLL REVEAL ANIMATION ===============*/
// const sr = ScrollReveal ({
//     origin: 'top',
//     distance: '60px',
//     duration: 2500,
//     delay: 400,
//     //reset: true,
// })

// sr.reveal(`.home__data`)
// sr.reveal(`.home__handle`, {delay: 700})
// sr.reveal(`.home__social, .home__scroll`, {delay: 900, origin: 'bottom'})


