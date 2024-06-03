function mostrarModal(studentList) {
    const modalContainer = document.querySelector('.students-container');
    modalContainer.innerHTML = ''; // Limpiar el contenido del contenedor modal antes de agregar elementos

    const orderedList = document.createElement('ol')
    modalContainer.appendChild(orderedList)

    studentList.forEach(student => {
        const studentElement = document.createElement('li');
        studentElement.textContent = student;
        modalContainer.appendChild(studentElement);
    });

    document.getElementById("myModal").style.display = "block";
}

function cerrarModal() {
    document.getElementById("myModal").style.display = "none";
}


window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}