function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
}


// Disable right-click context menu
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});


/* Disable F12 key press */
window.addEventListener('keydown', function (event) {
    if (event.keyCode === 123) { 
        console.log('F12 key was pressed.'); 
        event.preventDefault(); 
        return false;
    }
  });
  
  
  /* Disable Ctrl+U (View Page Source) */
  document.onkeydown = function (event) {
    event = event || window.event;
    if (event.ctrlKey && event.keyCode == 85) { 
        return false;
    }
  };