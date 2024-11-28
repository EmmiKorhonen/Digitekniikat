fetch('https://jaakkola.github.io/json/digitekniikat.json')

// Muunnetaan vastaus JSON muotoon
.then(function (response) {
return response.json();
})

// Muutetaan vastaus JSON muotoon
.then(function (responseJson) {
kerro(responseJson);
})
// Jos tuli jokin virhe
.catch(function (error) {
document.getElementById("vastaus").innerHTML =
"<p>Tietoa ei pystytä hakemaan</p>";
})

function kerro(data){
  //muuttujatesti, johon tulostettava tieto kerätään
  var teksti="";
  teksti = "<h1>"+data.otsikko+"</h1>";
  teksti = teksti + "<p>" + data.kuvaus + "</p>";
  teksti = teksti + "<p><img src='" + data.kuva + "' alt='kuva' ></p>";
  teksti = teksti + "<h3>Opintojakso: "+data.opintojakso.nimi +" "+data.opintojakso.tunnus+" "+data.opintojakso.opintopisteet+" op</h3>"

  //Taulukon sisältö listaelementtiin
  teksti = teksti + "<ul>";

  //Taulukon käsittely for-lauseella
  for (var i=0; i<data.sisalto.length; i++){
    teksti = teksti + "<li>" + data.sisalto[i] + "</li>";

  }

  //Objektitaulukon käsittely
  teksti = teksti + "<h3>Linkit</h3><ul>";
  for (var i=0; i<data.tekniikat.length; i++){
    teksti = teksti + "<li>" +data.tekniikat[i].aihe+"<a href='"+data.tekniikat[i].linkki+"'> "+data.tekniikat[i].linkki+" </a></li>";
  }

  //Listaelementti kiinni
  teksti = teksti + "</ul>"

  //tulostus sivulle
  document.getElementById("vastaus").innerHTML=teksti;
}
