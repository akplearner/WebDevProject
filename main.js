function windowFun( ) {
    var header= window.document.getElementById("windowD");
    var height= window.innerHeight;
    var width= window.innerWidth;
    var x = document.getElementById("windowD");
    x.innerHTML= "<h2>BROWSER WINDOW</h2>Browser Width:"+width+" & Height:"+height;
}

function screenFun( ){
    document.getElementById("screenW").innerHTML ="<h2>BROWSER SCREEN</h2>Screen Width: " + screen.width;
    document.getElementById("screenH").innerHTML ="Screen Height: " + screen.height;
}

function browserFun( ){
    document.getElementById("locHref").innerHTML = "<h2>BROWSER SCREEN</h2>The full URL of this page is:<br>" + window.location.href
    document.getElementById("locHostName").innerHTML ="Page hostname is " + window.location.hostname;
    document.getElementById("locPath").innerHTML ="Page path is " + window.location.pathname;
    document.getElementById("locProtocol").innerHTML ="Page protocol is " + window.location.protocol;
    document.getElementById("locPort").innerHTML ="Port number is " + window.location.port;
}



function getLocation() {
    var x = document.getElementById("geoLoc");
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    var x = document.getElementById("position");
  x.innerHTML = "<h2>Latitiude</h2>"+"Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}


  }