// JavaScript para obtener la fecha actual y mostrarla en el formulario
document.addEventListener('DOMContentLoaded', function() {
    var systemDateSpan = document.getElementById('systemDate');
    var currentDate = new Date();
    var formattedDate = currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear();
    systemDateSpan.textContent = formattedDate;
});
