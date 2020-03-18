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



