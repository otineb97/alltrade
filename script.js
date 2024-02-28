// Detalles del producto Carrusel
function changeImage(element) {
    var mainImage = document.getElementById('mainImage');
    mainImage.style.opacity = 0;
    setTimeout(function () {
        mainImage.src = element.src;
        mainImage.style.opacity = 1;
    }, 500);
}

// Mostrar y ocultar contenido
function toggleContent() {
    var additionalContent = document.getElementById("additional-content");
    var toggleButton = document.getElementById("toggle-button");

    if (additionalContent.style.display === "none") {
        additionalContent.style.display = "block";
        toggleButton.textContent = "Ocultar";
    } else {
        additionalContent.style.display = "none";
        toggleButton.textContent = "Ver más";
    }
}

// Seccion de comentarios
document.getElementById('reviewForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var rating = document.getElementById('rating').value;
    var comment = document.getElementById('comment').value;
    var date = new Date(); // Obtener la fecha actual

    // Formatear la fecha como "Calificado el DD de Mes de YYYY"
    var formattedDate = `Calificado el ${date.getDate()} de ${obtenerNombreMes(date.getMonth())} de ${date.getFullYear()}`;

    // Limpiar el formulario
    document.getElementById('name').value = '';
    document.getElementById('rating').value = '1';
    document.getElementById('comment').value = '';

    // Construir el HTML de las estrellas
    var starsHTML = '';
    for (var i = 0; i < rating; i++) {
        starsHTML += '<span class="gold-star">★</span>';
    }
    for (var i = rating; i < 5; i++) {
        starsHTML += '<span class="gray-star">☆</span>';
    }

    // Agregar la nueva reseña a la sección de reseñas
    var review = document.createElement('div');
    review.className = 'card mb-3';
    review.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text"><small class="text-muted">${formattedDate}</small></p>
        <p class="card-text">${comment}</p>
        <p class="card-text"><small class="text-muted">Calificación:</small> ${starsHTML}</p>
      </div>
    `;
    document.getElementById('reviews').prepend(review);

    // Cerrar el modal después de enviar el formulario
    var modalElement = document.getElementById('modalAgregarReseña');
    var modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
});

// Función para obtener el nombre del mes
function obtenerNombreMes(month) {
    var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    return meses[month];
}
