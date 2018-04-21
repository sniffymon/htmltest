


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