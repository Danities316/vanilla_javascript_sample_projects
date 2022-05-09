//TODO
//classList  ---- show or gets all class
// Contains --- check classlist for specific class
//add --- add class
//remove --- remove class
//toggle --- toggle clase

const toggleNav = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

toggleNav.addEventListener('click', function(){
    links.classList.toggle('show-links')
})

