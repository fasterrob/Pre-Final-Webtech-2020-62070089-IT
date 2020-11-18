let requestURL = "https://dd-wtlab2020.netlify.app/pre-final/ezquiz.json";
let request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
        dataReportStatus(JSON.parse(request.responseText));
    }
};
request.open("GET", requestURL, true);
request.send();

function dataReportStatus(data) {
    console.log(data.tracks.items[0].album.available_markets.length)
    for (let i = 0; i < data.tracks.items.length; i++) {
        document.getElementById("doc").innerHTML += `<div class="col-4">
        <div class="box-music">
        <img src="${data.tracks.items[i].album.images["0"].url}">
        <h5>${data.tracks.items[i].name}</h5>
        <p>Artists: ${data.tracks.items[i].album.artists["0"].name}</p>
        <p>Release date: ${data.tracks.items[0].album.release_date}</p>
        <p>Avaliable: ${data.tracks.items[0].album.available_markets.length}</p>
        </div></div>`;
    }
}

function search() {
    document.getElementById("gogo").val;
    document.getElementById("doc").innerHTML = '';
}