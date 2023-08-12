let prevTitle = document.title

window.addEventListener('blur', function() {
    prevTitle = document.title
    document.title = 'No te vayas, ¡vuelve! 😨'

});

window.addEventListener('focus', function () {
    document.title = prevTitle
});


