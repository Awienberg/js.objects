"use strict";

//Assignment JS.OO.0 
let Song = {
    songInfo: function(title, artist, year) { //Song properties
        this.title = title;
        this.artist = artist;
        this.year = year;
    },

    fullSongInfo: function(){ 
      return this.title + " " + this.artist + " " + this.year;
   }

}

let songs = []; //empty array with songs
let createSong = function () { //add song to array

    let song = Object.create(Song);
    song.songInfo(title, artist, year);
}


let submitSong  = function () {

    let title = document.getElementById('songTitle').value;
    let artist = document.getElementById('songArtist').value;
    let year = document.getElementById('releaseYear').value;

    if (title.length < 2 && artist.length < 2 && year < 2) {
    confirm('Enter Title, Artist and year');
    return; 
  } else {
    document.getElementById("title").innerHTML = document.getElementById('songTitle').value;
    document.getElementById("artist").innerHTML = document.getElementById('songArtist').value;
    document.getElementById("year").innerHTML = document.getElementById('releaseYear').value;

    }
}

let submit = function () {

    document.getElementById("submitSong").addEventListener('click', submitSong); 
} 

window.addEventListener("load", submit);


//Assignment JS.OO.1
let Planet = {                                                                      
    planetInfo: function (dist, sidereal, synodic, eccen, orbital) { //Planet properties   
        this.dist = dist;         
        this.sidereal = sidereal;
        this.synodic = synodic;
        this.eccen = eccen;
        this.orbital = orbital;
    },

    getPlanetInfo: function () {
        return "<h2>Planet Information</h2>" + "Distance: " + this.dist + "Sidereal Period: " + this.sidereal + "Synodic Period: " + this.synodic + "Eccentricity: " + this.eccen + "Orbital Inclination: " + this.orbital;
    }
}

let planets = []; //empty array
let createPlanets = function () { //add planet in the array

    let sun = Object.create(Planet);
    sun.planetInfo("0 AU ", "0 days ", "0 days ", "0 ", "0 ");

    let mercury = Object.create(Planet);
    mercury.planetInfo("0.3871 AU ", "87.97 days ", "115.88 days ", "0.206 ", "7.00° ");

    let venus = Object.create(Planet);
    venus.planetInfo("0.7233 AU ", "224.70 d ", "583.92 d ", "0.007 ", "3.39° ");

    let earth = Object.create(Planet);
    earth.planetInfo("1 AU ", "1 year ", "365 days ", "0.017 ", "0.00° ");

    let mars = Object.create(Planet);
    mars.planetInfo("1.5237 AU ", "1.8809 years ", "779.94 days ", "0.093 ", "1.85° ");

    let jupiter = Object.create(Planet);
    jupiter.planetInfo("5.2028 AU ", "11.862 years ", "398.9 days ", "0.048 ", "3.39° ");

    let saturn = Object.create(Planet);
    saturn.planetInfo("9.5388 AU ", "29.458 years ", "378.1 days ", "0.056 ", "2.49° ");

    let uranus = Object.create(Planet);
    uranus.planetInfo("19.1914 AU ", "84.01 years ", "369.7 days ", "0.046 ", "0.77° ");

    let neptune = Object.create(Planet);
    neptune.planetInfo("30.0611 AU ", "164.79 years ", "367.5 days ", "0.010 ", "1.77° ");

    let pluto = Object.create(Planet);
    pluto.planetInfo("39.5294 AU ", "248.5 years ", "366.7 days ", "0.248 ", "17.15° ");

}

let selectPlanet = function () { 

    document.getElementById("planetInformation").innerHTML = this.value;
    planetInformation.setAttribute('style', 'background-color: #fff');
}

let showInfo = function () {

    document.getElementById("sun").addEventListener("click", selectPlanet);
    document.getElementById("mercury").addEventListener("click", selectPlanet);
    document.getElementById("venus").addEventListener("click", selectPlanet);
    document.getElementById("earth").addEventListener("click", selectPlanet);
    document.getElementById("mars").addEventListener("click", selectPlanet);
    document.getElementById("jupiter").addEventListener("click", selectPlanet);
    document.getElementById("saturn").addEventListener("click", selectPlanet);
    document.getElementById("uranus").addEventListener("click", selectPlanet);
    document.getElementById("neptune").addEventListener("click", selectPlanet);
    document.getElementById("pluto").addEventListener("click", selectPlanet);
}

window.addEventListener("load", showInfo);


//Assignment JS.OO.2
let creditCard = {                                                                      
    cardInfo: function (name, cardNumber, expDate, cvv) { //card properties   
        this.name = name;         
        this.cardNumber = cardNumber;
        this.expDate = expDate;
        this.cvv = cvv;
    },

    isValid: function () {

    }
}