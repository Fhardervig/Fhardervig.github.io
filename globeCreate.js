function initGlobe() {
    var earth = WE.map('earth',tilting = false);
    var options = {sky: true,tilting: false, zooming: true, zoom: 3};
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);
    var marker = WE.marker([50.389960,12.506516], 'icons/camp-green50.png', 50, 50).addTo(earth);
    marker.bindPopup("<img src='/icons/IAYC.png'><br><a href='https://www.iayc.org/'>International Astronomical Youth Camp</a><br><span style='font-size:12px;color:#999'>The IAYC is an experience unlike any other; a place for unforgettable memories and lifelong friendships.Young and enthusiastic students come together from all corners of the world,aged between 16 and 24.The camp hosts around 65 participants for three weeks in a remote location,with access to some of the most spectacular skies you may have ever seen.</span>",{maxWidth: 300,closeButton: true});

    var marker2 = WE.marker([34.711438,-86.653934], 'icons/competition-yellow50-1.png', 50, 50).addTo(earth);
    marker2.bindPopup("<img src = '/icons/rover-cha140.jpg'><br><a href='https://www.nasa.gov/roverchallenge/registration/index.html'>NASA Human Exploration Rover Challenge</a><br><span style='font-size:12px;color:#999'>Design and build your human-powered rover! Pilot it at NASA at Huntsville through a course full of obstacles that simulate the harsh conditions of extraterrestrial surfaces, while completing mission tasks such as soil sample collection. Return to the mission base in less than seven minutes, so you don't die due to lack of oxygen! A lot of teamwork, strategical thinking, determination, and resilience are needed!</span>",{maxWidth: 300,closeButton:true});                                  
  
    var marker3 = WE.marker([37.802767, -122.460420], '/icons/stargazing.png', 50, 50).addTo(earth);
    marker3.bindPopup("<a href='/'>This is a try</a>",{maxWidth: 120,closeButton: true}); 
    
    var marker4 = WE.marker([-10.0,-40.0], '/icons/conference-blue.png', 50, 50).addTo(earth);
    marker4.bindPopup("<a href='/'>This is a try</a>",{maxWidth: 120,closeButton: true});                 
    
    var marker5 = WE.marker([50.0,50.0], '/icons/observatory-red.png', 50, 50).addTo(earth);
    marker5.bindPopup("<a href='/'>This is a try</a>",{maxWidth: 120,closeButton: true});
    
    return earth;
}
      
function setZoom(earth, zoom) {
    earth.setZoom(zoom);
}
function funcPanTo(earth, coords) {
    earth.panTo(coords);
}
