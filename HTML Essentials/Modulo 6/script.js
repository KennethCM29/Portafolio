document.querySelectorAll('area').forEach(area => {
    area.addEventListener('click', function() {
        alert("Has tocado el continente: " + this.id);
    });
});
