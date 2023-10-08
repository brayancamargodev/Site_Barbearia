

const myobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const anim = document.querySelectorAll('.scroll')

anim.forEach((Element) => myobserver.observe(Element))