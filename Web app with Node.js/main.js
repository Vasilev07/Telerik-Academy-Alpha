window.addEventListener("load", function() {
    var f = document.getElementById('falsh');
    setInterval(function() {
        f.style.display = (f.style.display == 'none' ? '' : 'none');
    }, 100);

}, false);
console.log('hahaha');
