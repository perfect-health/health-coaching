'use strict'


var sites = [
    'https://jordan.fitnessfirstme.com/',
    'http://goldsgym.jo/',
    'http://www.magmalifestyle.com/',
    'http://vegafitness.com/',

];

function randomSite() {
    var i = parseInt(Math.random() * sites.length);
    location.href = sites[i];
}
var sites2 = [
    'https://ruba-maaly.business.site/',
    'https://www.rubadiet.com/',
    'https://www.nutricenterjo.com/',

];

function randomSite2() {
    var i = parseInt(Math.random() * sites2.length);
    location.href = sites2[i];
}
var sites3 = [
    'https://www.cochrane.org/',
    'https://naturalmedicines.therapeuticresearch.com/',
    'https://guides.himmelfarb.gwu.edu/CAM/websites',

];

function randomSite3() {
    var i = parseInt(Math.random() * sites3.length);
    location.href = sites3[i];
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "30px 10px";
        document.getElementById("logo").style.fontSize = "25px";
    } else {
        document.getElementById("navbar").style.padding = "50px 10px";
        document.getElementById("logo").style.fontSize = "35px";
    }
}