/* LOGIN FORM START*/


	function loginPls() {
	document.getElementById('id01').style.display='table';
};




var modal = document.getElementById('id01');
var textone = document.getElementById('t1');
var texttwo = document.getElementById('t2');


// Click on modal, close it
window.onclick = function(event) {

    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function headerBreak() {
	textone.style.display = "block";
	texttwo.style.display = "block";
}

/* LOGIN FORM END */


/* RESPONSIVE NAV START */


function respNav() {
    var x = document.getElementById("xdrop");
    if (x.className === "navbar sticky" || x.className === "navbar") {
        x.className += " responsive";
    } else if (x.className === "navbar sticky responsive"){
        x.className = "navbar sticky";
    } else if (x.className === "navbar responsive"){
        x.className = "navbar";
    }
}

/* RESPONSIVE NAV END */

/* SCROLL TO TOP START */

window.onscroll = function() {scrollTrigger()};

function scrollTrigger() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("btnScrollTop").style.display = "block";
    } else {
        document.getElementById("btnScrollTop").style.display = "none";
    }

}

var intervalAmt = 0;

function scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(intervalAmt);
    }
    window.scroll(0, window.pageYOffset - 50);
}

function toTop() {
    // Call the function toTop() every 5 milliseconds
    intervalAmt = setInterval(scrollStep, 5);
}


/* SCROLL TO TOP END */