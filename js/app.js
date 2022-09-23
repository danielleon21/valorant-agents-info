(function () {
    document.addEventListener('DOMContentLoaded', obtenerDatos)


    function obtenerDatos() {
        const url = 'https://valorant-api.com/v1/agents?language=es-MX'
        fetch(url)
            .then(response => response.json())
            .then(data => imprimirResultados(data))
    }


    function imprimirResultados(data) {
        const arrayAgents = data.data
        const listadoAgentes = document.querySelector('.listado-agentes')

        arrayAgents.forEach(agent => {
            const { displayName, displayIconSmall, isPlayableCharacter, uuid } = agent

            //Contenedor agentes
            if (isPlayableCharacter) {
                const contenedorAgente = document.createElement('div')
                contenedorAgente.classList.add('agente')

                //imagen agente
                const imgAgente = document.createElement('img')
                imgAgente.src = displayIconSmall

                //nombre agente
                const nombreAgente = document.createElement('li')
                nombreAgente.textContent = displayName


                //boton ver informacion
                const enlaceInfo = document.createElement('a')
                enlaceInfo.href = `mostrar-agente.html?id=${uuid}`
                enlaceInfo.textContent = 'Informacion'

                //mostrar en el listado
                contenedorAgente.appendChild(imgAgente)
                contenedorAgente.appendChild(nombreAgente)
                contenedorAgente.appendChild(enlaceInfo)
                listadoAgentes.appendChild(contenedorAgente)
            }
        })
    }

})()