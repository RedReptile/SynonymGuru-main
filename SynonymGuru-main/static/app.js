let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.intro-logo');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 2000);

        setTimeout(()=>{
            intro.style.top = '-100vh'
        }, 2300)
    })
})


// Contact Us Validation Setup  //

document.addEventListener("DOMContentLoaded", () => {
    const intro = document.querySelector('.intro');
    const logoSpan = document.querySelectorAll('.intro-logo');

    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2300);
    });

    const form = document.querySelector('.form');
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        checkInputs();
    });

    function checkInputs() {
        const items = document.querySelectorAll(".items");
        items.forEach(item => {
            if (item.value.trim() === "") {
                item.classList.add("error");
            } else {
                item.classList.remove("error");
            }
        });
    }
});
