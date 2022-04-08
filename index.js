const sidebar = document.querySelector('.sidebar');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', ()=> {
    const visibility = sidebar.getAttribute('data-visible')

    if(visibility == 'false'){
        sidebar.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)

    } else if ( visibility == 'true') {
        sidebar.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)

    }

    console.log(visibility)
})