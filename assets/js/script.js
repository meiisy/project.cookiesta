// toggle class active //
const navbarNav = document.querySelector('.navbar-nav');

// ketika menu diklik //
document.querySelector('#menu-ham').onclick = () => {
   navbarNav.classList.toggle('active');
};

document
    .getElementById("menu-ham")
    .addEventListener("click", function (event) {
        event.preventDefault();
        //kode lainnya untuk menampilkan menu
    });

// klik diluar slidebar untuk menghilangkan nav//
const menuham = document.querySelector ('#menu-ham');

document.addEventListener('click', function(e) {
    if(!menuham.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});