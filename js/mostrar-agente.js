(function () {
    let idAgente
    const contenedor = document.querySelector('.container')
    document.addEventListener('DOMContentLoaded', () => {
        const parametos = new URLSearchParams(window.location.search)
        idAgente = parametos.get('id')
        buscarAgente(idAgente)
    })



    function buscarAgente(id) {
        const url = `https://valorant-api.com/v1/agents/${id}?language=es-MX`

        fetch(url)
            .then(response => response.json())
            .then(data => mostrarAgente(data))
    }


    function mostrarAgente(data) {
        mostrarInformacion(data.data)
        mostrarRol(data.data)
        mostrarHabilidades(data.data)
    }

    function mostrarInformacion({ displayName, fullPortrait, description, developerName }) {
        document.title = `${displayName} - Information`

        const contenedorImg = document.querySelector('.contenedor-img')
        const imgAgente = document.createElement('img')
        imgAgente.src = fullPortrait
        contenedorImg.appendChild(imgAgente)

        const contenedorInfo = document.querySelector('.contenedor-informacion')
        const h1 = document.createElement('h1')
        h1.textContent = displayName

        const h3 = document.createElement('h3')
        h3.textContent = developerName

        const desc = document.createElement('p')
        desc.classList.add('description')
        desc.textContent = description

        contenedorInfo.appendChild(h1)
        contenedorInfo.appendChild(h3)
        contenedorInfo.appendChild(desc)
    }

    function mostrarRol({ role: { description, displayIcon, displayName } }) {
        const contenedorInfo = document.querySelector('.contenedor-informacion')
        const h3 = document.createElement('h3')
        h3.classList.add('titulo-rol')
        h3.textContent = displayName
        const imgRol = document.createElement('img')
        imgRol.src = displayIcon
        imgRol.classList.add('img-rol')
        const desc = document.createElement('p')
        desc.classList.add('description')
        desc.textContent = description
        contenedorInfo.appendChild(h3)
        contenedorInfo.appendChild(imgRol)
        contenedorInfo.appendChild(desc)


    }

    function mostrarHabilidades({ abilities }) {
        const contenedorHabilidades = document.createElement('div')
        contenedorHabilidades.classList.add('contenedor-habilidades')

        const headingHabilidades = document.createElement('h2')
        headingHabilidades.textContent = 'Abilities'

        abilities.forEach(abilitie => {
            const { description, displayName, displayIcon } = abilitie
            const habilidad = document.createElement('div')
            habilidad.classList.add('habilidad')
            const habilidadHeading = document.createElement('h3')
            habilidadHeading.classList.add('nombre-habilidad')
            habilidadHeading.textContent = displayName

            const imgHabilidad = document.createElement('img')
            imgHabilidad.classList.add('img-habilidad')
            imgHabilidad.src = displayIcon ? displayIcon : ""


            const descripcion = document.createElement('p')
            descripcion.textContent = description


            habilidad.appendChild(habilidadHeading)
            habilidad.appendChild(imgHabilidad)
            habilidad.appendChild(descripcion)
            contenedorHabilidades.appendChild(habilidad)
        })
        contenedor.appendChild(headingHabilidades)
        contenedor.appendChild(contenedorHabilidades)
    }
})()