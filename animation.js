//items animation//
const tl = new TimelineMax();

tl.from(".product-title", 2,
    {
        autoAlpha: 0,
        ease: Power2.easeOut
    })
    .from(".product-properties", 2,
        {
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=1.5")
    .from(".product-img", 2,
        {
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=1.5")
    .from(".product-info", 2,
        {
            autoAlpha: 0,
            ease: Power2.easeOut
        }, "-=1.9")


//Scroll Magic//
//------Scene 1-------//
const controller = new ScrollMagic.Controller();

const tl1 = new TimelineMax();
tl1.from(".product-info-p2", 3,
    {
        autoAlpha: 0,
        ease: Power2.easeInOut
    })
    .from(".product-ingridients", 3,
        {
            autoAlpha: 0,
            ease: Power2.easeInOut
        })
    .from(".product-social", 3,
        {
            autoAlpha: 0,
            ease: Power2.easeInOut
        })
    .from(".next-products", 3,
        {
            autoAlpha: 0,
            ease: Power2.easeInOut
        })

let scene1 = new ScrollMagic.Scene({
    triggerElement: ".product-info",
    triggerHook: .8,
    offset: 0
})
    .setTween(tl1)
    .addIndicators()
    .offset(100)
    .duration("100%")
    .triggerHook(.7)
    .addTo(controller);

