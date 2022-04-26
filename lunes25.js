function losAsincronicos()  {
    console.log("resultado", new Date())
    const artista = JSON.parse(this.responseText)
    const img = document.createElement("img")
    img.src = artista.artists[0].strArtistBanner
    const imagen = document.getElementById("imagen")
    imagen.appendChild(img)


}


const request = new XMLHttpRequest();
request.addEventListener('load', losAsincronicos);
request.open('GET', 'https://www.theaudiodb.com/api/v1/json/2/search.php?s=queen');
request.send();

