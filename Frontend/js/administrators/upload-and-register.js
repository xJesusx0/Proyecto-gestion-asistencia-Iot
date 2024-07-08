console.log(userData)
document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('name-container').innerText += userData.names
    const form = document.getElementById('formulario');
    form.setAttribute('action', `${config.baseUrl}/admin/upload-and-register-users`)
})

const sendFile = () => {
    const url = `${config.baseUrl}/admin/upload-and-register-users`
    const formData = new FormData();
    const fileField = document.getElementById('file');

    formData.append('csvFile', fileField.files[0]);

    fetch(url, {
        headers: {'token': config.SECRET_TOKEN},
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if(data['response'] === 'ok'){
            alert('Archivo subido correctamente')
            return;
        }

        alert(data['response'])
        console.log(data)
    })
    .catch(error => {
        console.error('Error:', error);
    });
}