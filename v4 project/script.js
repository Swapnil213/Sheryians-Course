function imageContainerAnimation() {
    var vdocon = document.querySelector("#image-container");
    var play = document.querySelector("#play");

    vdocon.addEventListener("mouseenter", function () {
        gsap.to(play, {
            scale: 1,
            opacity: 1
        })
    });

    vdocon.addEventListener("mouseleave", function () {
        gsap.to(play, {
            scale: 0,
            opacity: 0
        })
    });

    vdocon.addEventListener("mousemove", function (dets) {
        console.log(dets);
        gsap.to(play, {
            scale: 1,
            opacity: 1,
            left: dets.x - 40,
            top: dets.y - 40,
        })
    });
}

function loadAnimation() {
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.3
    })
    gsap.from("#page1 #image-container", {
        scale: 0.9,
        opacity: 0,
        delay: 1.3,
        duration: 0.5
    })
}



loadAnimation();
imageContainerAnimation();