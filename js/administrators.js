fetch(window.jsonRoutes.usersData)
.then(response => {
    if (!response.ok) {
        throw new Error('No se pudo leer el archivo JSON')
    }
    return response.json()
})
.then(data => {
    const usersTableBody = document.getElementById('usersTableBody')

    data.forEach(user => {
        const row = document.createElement('tr')
        
        const nameCell = document.createElement('td')
        nameCell.textContent = user.username
        row.appendChild(nameCell)

        const roleCell = document.createElement('td')
        roleCell.textContent = user.role
        row.appendChild(roleCell)

        const passwordCell = document.createElement('td')
        passwordCell.textContent = user.password
        row.appendChild(passwordCell)

        const actionsCell = document.createElement('td')

        const editButton = document.createElement('button')
        editButton.textContent = 'Editar'
        editButton.classList.add('edit-button')
        actionsCell.appendChild(editButton)

        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'Eliminar'
        deleteButton.classList.add('delete-button')
        actionsCell.appendChild(deleteButton)

        row.appendChild(actionsCell)

        usersTableBody.appendChild(row)
    })
})
.catch(error => {
    console.error('Error al cargar el JSON:', error)
})



fetch('../json/administrators.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('No se pudo leer el archivo JSON')
    }

    return response.json()
  })

  .then(data => {
    for (let i = 0 ; i <  data.length ; i++) {

      admin = data[i]

      if (admin['name'] === localStorage.getItem('username')) {
        break
      }

    }

    console.log(admin['name'])
    document.getElementById('btnDesplegable').innerHTML = admin['name']
    document.getElementById('welcomeUser').innerHTML += ` ${admin['name']} 🌟`

    //Ejemplos
    
  })

  function alternarLista() {
    let table = document.getElementById('tableUsers');
      if (table.classList.contains('hidden')) {
          table.classList.remove('hidden');
          document.getElementById('btnToggle').innerHTML = 'Ocultar lista de usuarios'
        } else {
          table.classList.add('hidden');
          document.getElementById('btnToggle').innerHTML = 'Mostrar lista de usuarios'
      }
}



