function desplegarResultado()  {
    const artista = JSON.parse(this.responseText);
    const img = document.createElement("img");
    img.src = artista.artists[0].strArtistThumb;
    const imagen = document.getElementById("imagen");
    imagen.innerHTML = "";
    imagen.appendChild(img);
}

function buscar()   {
    const condicion = document.getElementById("condicion").value
    const request = new XMLHttpRequest();
    request.addEventListener('load', desplegarResultado);
    request.open('GET', 'https://www.theaudiodb.com/api/v1/json/2/search.php?s=' + condicion);
    request.send();
}


