window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.btnTop')
        scroll.classList.toggle('active', window.scrollY > 450)
})