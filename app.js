async function logMetar(airport) {
    const response = await fetch("https://aviationweather.gov/api/data/metar?ids="+ airport +"&format=json");
    const metar = await response.json();
    return metar;
}

var newMetar = logMetar("KRDU");
console.log(newMetar[0]);

