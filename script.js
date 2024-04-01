function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

$(document).bind("contextmenu",function(e) {
 e.preventDefault();
});
