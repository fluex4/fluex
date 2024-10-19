// let banner = document.getElementById('hero ');
let canvas = document.getElementById('dotsCanvas');
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
let ctx = canvas.getContext('2d');
let ctx2 = canvas.getContext('2d');
let dots = [];
let mouse = {
    x: 0, y: 0
}
let dots2 = []
let sp = 2;
// let arrayColors = ['rgb(170, 170, 170)', 'rgb(46, 46, 243)', 'rgb(73, 182, 245)']
let arrayColors = ["#4B9CD3", "#00BFFF", "#A7C6ED", "#A1C6E7"]
for (let i = 0; i < 50; i++) {
    dots.push({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        size: Math.random() + 0.6,
        color: arrayColors[Math.floor(Math.random() * 5)],
        speed: Math.floor(Math.random() * 5 + 1),
        speedd: Math.floor(Math.random() * 2 - 1)
    });

}
for (let i = 0; i < 50; i++) {
    dots2.push({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        size: Math.random() + 0.6,
        color: arrayColors[Math.floor(Math.random() * 5)],
        speed: Math.floor(Math.random() * 5 + 1)
    });
}
const drawDots2 = () => {
    dots2.forEach(dot => {
        ctx2.fillStyle = dot.color;
        ctx2.beginPath();
        ctx2.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx2.fill();
    })
}
const drawDots = () => {
    dots.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
    })
}
function drawSpaceGradient() {
    // Create a radial gradient
    const gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width);
    gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
    gradient.addColorStop(0.5, 'rgba(20, 20, 50, 1)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');

    // Fill the canvas with the gradient
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// drawSpaceGradient();
drawDots();
drawDots2();

document.addEventListener('mousemove', event => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    // drawSpaceGradient();
    // drawDots();
    let dif = {
        x: mouse.x - event.pageX,
        y: mouse.y - event.pageY
    }
    mouse.x = event.pageX;
    mouse.y = event.pageY;
    // if (diff.x + diff.y > 2) {

    dots.forEach(dot => {
        dot.y += dif.y * dot.speed / 100;
        dot.x += dif.x * dot.speed / 100;
        // if (dot.x < 0 || dot.y < 0 || dot.y > canvas.width || dot.x > canvas.height)
        // dot.speed *= -1;
    })
    dots2.forEach(dot => {
        dot.y -= dif.y * dot.speed / 100;
        dot.x -= dif.x * dot.speed / 100;
        // if (dot.x < 0 || dot.y < 0 || dot.y > canvas.width || dot.x > canvas.height)
        // dot.speed *= -1;
    })
    drawDots();
    drawDots2();
    // }
})

// setTimeout(() => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx2.clearRect(0, 0, canvas.width, canvas.height);
//     // drawSpaceGradient();
//     // drawDots();
//     // let dif = {
//     //     x: mouse.x - event.pageX,
//     //     y: mouse.y - event.pageY
//     // }
//     // mouse.x = event.pageX;
//     // mouse.y = event.pageY;
//     dots.forEach(dot => {
//         dot.y += dot.speedd * dot.speed / 100;
//         dot.x += dot.speedd * dot.speed / 100;
//         // if (dot.x < 0 || dot.y < 0 || dot.y > canvas.width || dot.x > canvas.height)
//         // dot.speed *= -1;
//     })
//     dots2.forEach(dot => {
//         dot.y -= dot.speedd * dot.speed / 100;
//         dot.x -= dot.speedd * dot.speed / 100;
//         // if (dot.x < 0 || dot.y < 0 || dot.y > canvas.width || dot.x > canvas.height)
//         // dot.speed *= -1;
//     })
//     drawDots();
//     drawDots2();
// })
let inY = 0;
let inYY = 0;
window.addEventListener('scroll', e => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    diff = window.scrollY - inY;
    inY = window.scrollY;
    dots.forEach(dot => {
        dot.y += diff * dot.speed / 50;
        // dot.x += dif.x * dot.speed / 100;

    })
    dots2.forEach(dot => {
        dot.y -= diff * dot.speed / 50;
        // dot.x -= dif.x * dot.speed / 100;

    })
    drawDots();
    drawDots2();
})
// window.addEventListener('scrollend', () => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx2.clearRect(0, 0, canvas.width, canvas.height);
//     diff = window.scrollY - inYY;
//     inYY = window.scrollY;
//     dots.forEach(dot => {
//         // dot.y += diff * dot.speed / 50;
//         // dot.x += dif.x * dot.speed / 100;
//         dot.speed *= -1;

//     })
//     dots2.forEach(dot => {
//         dot.y -= diff * dot.speed / 50;
//         // dot.x -= dif.x * dot.speed / 100;
//         dot.speed *= -1;

//     })
//     drawDots();
//     drawDots2();
// })

window.addEventListener('resize', (e) => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    drawDots();
    drawDots2();
})

function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent) || 'ontouchstart' in window;
}

if (isMobile()) {
    setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx2.clearRect(0, 0, canvas.width, canvas.height);
        // drawSpaceGradient();
        // drawDots();
        // let dif = {
        //     x: mouse.x - event.pageX,
        //     y: mouse.y - event.pageY
        // }
        // mouse.x = event.pageX;
        // mouse.y = event.pageY;
        dots.forEach(dot => {
            dot.y += 200 * dot.speed / 100;
            dot.x += 200 * dot.speed / 100;
            // if (dot.x < 0 || dot.y < 0 || dot.y > canvas.width || dot.x > canvas.height)
            // dot.speed *= -1;
        })
        dots2.forEach(dot => {
            dot.y -= 200 * dot.speed / 100;
            dot.x -= 200 * dot.speed / 100;
            // if (dot.x < 0 || dot.y < 0 || dot.y > canvas.width || dot.x > canvas.height)
            // dot.speed *= -1;
        })
        drawDots();
        drawDots2();
        console.log("User is not on a mobile device.");

    }, 10);
}

setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    // drawSpaceGradient();
    // drawDots();
    // let dif = {
    //     x: mouse.x - event.pageX,
    //     y: mouse.y - event.pageY
    // }
    // mouse.x = event.pageX;
    // mouse.y = event.pageY;
    dots.forEach(dot => {
        dot.y += sp * dot.speed / 100;
        dot.x += sp * dot.speed / 100;
        // if (dot.x < 0 || dot.y < 0 || dot.y > canvas.width || dot.x > canvas.height)
        // dot.speed *= -1;
    })
    dots2.forEach(dot => {
        dot.y -= sp * dot.speed / 100;
        dot.x -= sp * dot.speed / 100;
        // if (dot.x < 0 || dot.y < 0 || dot.y > canvas.width || dot.x > canvas.height)
        // dot.speed *= -1;
    })
    drawDots();
    drawDots2();
    // console.log("User is not on a mobile device.");

}, 10);
setInterval(() => {
    sp * (-1);
}, 2000)