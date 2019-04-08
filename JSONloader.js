function loadOpportunities(){
  var requestURL = '/SpaceOpps.json';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'text';
  request.send();
  request.onload = function() {
    var opportunitiestext = request.response;
    var opportunities = JSON.parse(opportunitiestext);
  }
  console.log(opportunities);
  return opportunities;
}
