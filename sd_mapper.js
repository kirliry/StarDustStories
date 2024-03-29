"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Ryne Kirlin
   Date:   10.24.21

*/

/*Determine the current Date and time */
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();
document.getElementById("timeStamp").innerHTML = timeStr;

/* Determine the sky map to use for the current date and time */
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
var mapNum = (thisMonth*2+thisHour) % 24;
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

/* Insert the HTML code for the inline image of the sky map */
document.getElementById("planisphere").insertAdjacentHTML('afterBegin', imgStr);

