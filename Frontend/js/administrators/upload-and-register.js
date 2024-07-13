console.log(userData)
document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('name-container').innerText += userData.names
    const form = document.getElementById('formulario');
    form.setAttribute('action', `${config.baseUrl}/admin/upload-and-register-users`)
})

const sendFile = async () => {
    const url = `${config.baseUrl}/admin/upload-and-register-users`
    const formData = new FormData();
    const fileField = document.getElementById('file');
    const selectedTable = document.getElementById('tables').value;
    console.log(selectedTable)

    formData.append('csvFile', fileField.files[0]);
    formData.append('table',selectedTable)
    try{
        const response = await axios.post(url, formData, {
            headers : {
                'token':config.SECRET_TOKEN,
                'Content-Type':'multipart/form-data'
            }
        });

        const data = response.data;
        if (data.response === 'ok') {
            alert('Archivo subido correctamente');
        } else {
            alert(data.response);
            console.log(data);
        }
    } catch(error) {
        console.error('Error:', error);
    };
}