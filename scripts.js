async function buscarPelicula(event) {
    event.preventDefault()
    nombrePeli = document.getElementById("inputBuscar").value;
    resultPeli = document.querySelector(".pelicula");

    try{
        const respuesta = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${nombrePeli}`);


        if(!respuesta.ok){
            throw new Error("Pelicula no Encontrada ☹️")
        }

        const data = await respuesta.json()

        resultPeli.innerHTML = `
        <div>
            <img src="${data.image.medium}" alt="" class="imgPeli">
        </div>
        <div class="infoPeli">
            <p class="namePeli">${data.name}</p>
            <p class="año"><strong>Estreno:</strong> ${data.premiered}</p>
            <p class="genero"><strong>Genero:</strong> ${data.genres}</p>
            <p class="idioma"><strong>Idioma:</strong> ${data.language}</p>
            <p class="tipo"><strong>Tipo:</strong> ${data.type}</p>
            <p class="rate"><strong>Rating:</strong> ${data.rating.average}⭐</p>
        </div>
        <div class="sinopsisPeli">
            <p class="resumen"><strong>Sinopsis:</strong> <br><br> ${data.summary}</p>
        </div>
        `
    }catch(error) {
        console.error("Error: ", error)
        resultPeli.innerHTML = `Lo siento, ${nombrePeli} no se ha encontrado ☹️`
    }
}
