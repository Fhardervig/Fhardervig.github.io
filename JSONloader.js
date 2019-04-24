function loadOpportunities(){
  var requestURL = '/SpaceOpps.json';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'text';
  request.onload = function() {
    var opportunitiestext = request.response;
    var opportunities = JSON.parse(opportunitiestext);
    console.log("Opportunities loaded")
    console.log(typeof opportunities)
    console.log(opportunities)
  }
  request.send();
}
