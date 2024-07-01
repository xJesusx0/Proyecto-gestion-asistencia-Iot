const csvTextToJson = (csvText) => {
    // Eliminar cualquier caracter de retorno de carro adicional que pueda interferir
    const formattedCsv = csvText.replace(/\r/g, '');

    // Separar las líneas del CSV
    const lines = formattedCsv.split('\n');

    // Obtener los encabezados (primera línea del CSV)
    const headers = lines[0].split(',');

    const jsonArray = [];

    // Recorrer cada línea del CSV (empezando desde la segunda línea)
    for (let i = 1; i < lines.length; i++) {
        const json = {};
        const currentLine = lines[i].split(',');

        // Asignar cada valor al encabezado correspondiente
        for (let j = 0; j < headers.length; j++) {
            json[headers[j]] = currentLine[j];
        }
        jsonArray.push(json);
    }

    return (jsonArray);
}

const request = async (url) => {
    const headers = {
        'Content-Type': 'application/json',
    };

    const requestOptions = {
        method: 'GET',
        headers: headers
    };

    try {
        const response = await fetch(url, requestOptions);
        const responseData = await response.text();
        const responseToJson = csvTextToJson(responseData)
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${responseData.message || response.statusText}`);
        }
        return responseToJson;
    } catch (error) {
        throw new Error(`Request failed: ${error.message}`);
    }
};