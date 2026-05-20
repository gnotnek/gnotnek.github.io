function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var yearElements = document.querySelectorAll('[data-current-year]');
    var currentYear = new Date().getFullYear();

    yearElements.forEach(function (element) {
        element.textContent = currentYear;
    });
});
