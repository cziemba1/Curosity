//Fullpage.js inicialization//

new fullpage("#fullpage", {
    anchors: ['home', 'complexion_cream', 'clarifying_cleanser', 'moisturising_mask', 'contact'],
    navigation: true,
    sectionsColor: ["#ffffff", "#211e36", "#ffffff", "#211e36", "#ffffff"],
    paddingTop: "0em",
    scrollingSpeed: 1000,
    onLeave: (origin, destination, direction) => { //animation for the rest of slides
        const section = destination.item;

        const tl2 = new TimelineMax({ delay: 0.8 });

        tl2.from(".title", 1,
            {
                x: 5,
                autoAlpha: 0,
                ease: Power2.easeOut
            })
            .from(".calories", 1, {
                autoAlpha: 0,
                y: 5,
                ease: Power2.easeOut
            }, "-= .8")
            .from(".right", 1.5,
                {
                    x: 10,
                    autoAlpha: 0,
                    ease: Power2.easeInOut
                }, "-=1.9")
            .from(".left", 1.5,
                {
                    x: -10,
                    autoAlpha: 0,
                    ease: Power2.easeInOut
                }, "-=1.9")
            .from(".item-info-flavor li", 2, {
                x: -200,
                autoAlpha: 0,
                ease: Expo.easeOut
            }, "-= 1")
            .from(".explore", 1,
                {
                    autoAlpha: 0,
                    ease: Power2.easeInOut
                }, "-=2")
    },
    afterLoad: function (origin, destination, direction) {
        if (origin.index === 0) {
            const tl3 = new TimelineMax();

            tl3.from(".logo", 1.5,
                {
                    autoAlpha: 0,
                    ease: Power2.easeInOut
                })
                .from(".nav-container", 1.5,
                    {
                        autoAlpha: 0,
                        ease: Power2.easeInOut
                    }, "-=1.5")
                .from(".water-title", 1.5,
                    {
                        y: -100,
                        autoAlpha: 0,
                        ease: Power2.easeInOut
                    }, "-=1.3")
                .from(".intro-sub", 1.5,
                    {
                        autoAlpha: 0,
                        ease: Power2.easeInOut
                    }, "-=1.3")
                .from(".water-text", 1.5,
                    {
                        y: 100,
                        autoAlpha: 0,
                        ease: Power2.easeInOut
                    }, "-=1.8")
                .from("#scene", 2,
                    {
                        x: 100,
                        autoAlpha: 0,
                        ease: Power2.easeInOut
                    }, "-=1")
                .from(".water-link", 1,
                    {
                        autoAlpha: 0,
                    }, "-=1.5")
        }
    }
})

//Parallax Drops//
const scene = document.querySelector("#scene")
var parallaxInstance = new Parallax(scene);



