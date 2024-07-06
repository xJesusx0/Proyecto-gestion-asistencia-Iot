const request = async (method, url, data = null) => {
    const token = config.SECRET_TOKEN;
    const headers = {
        'Content-Type': 'application/json',
        'token': token
    };

    const requestOptions = {
        method: method,
        headers: headers,
        credentials: 'include'  // Incluir credenciales para enviar cookies
    };

    if (method !== 'GET' && data) {
        requestOptions.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, requestOptions);
        const responseData = await response.json();
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${responseData.message || response.statusText}`);
        }
        return responseData;
    } catch (error) {
        throw new Error(`Request failed: ${error.message}`);
    }
};
