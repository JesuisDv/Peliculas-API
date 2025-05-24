async function buscarPelicula() {
    nombrePeli = document.getElementById("inputBuscar").value;
    resultPeli = document.querySelector(".pelicula");

    try{
        const respuesta = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${nombrePeli}`);


        if(!respuesta.ok){
            throw new Error("Pelicula no Encontrada ☹️")
        }

        const data = await respuesta.json()

        resultPeli.innerHTML = `
            <img src="${data.image.medium}" alt="">
            <p class="namePeli">${data.name}</p>
            <p class="año">${data.premiered}</p>
        `
    }catch(error) {
        console.error("Error: ", error)
        resultPeli.innerHTML = `Lo siento, ${nombrePeli} no se ha encontrado ☹️`
    }
}
