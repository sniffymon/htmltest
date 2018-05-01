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


//pagination

var $current_page = 1;
var $rowsperpage = 20;
var $Forum = document.getElementById("Forum");
var $rowCount = $Forum.rows.length;
var $tr = [];
var $rowindex;
var $trcount;
var $th = $Forum.rows[(0)].outerHTML;

function prevPage()
{
    if ($current_page > 1) {
        $current_page -= 1;
        changePage($current_page);
    }
}

function nextPage()
{
    if ($current_page < numPages()) {
        $current_page += 1;
        changePage($current_page);
    }
}    
function numPages()
{
    return Math.ceil($rowCount / $rowsperpage);
}


function changePage($page)
{
    var $nextbutton = document.getElementById("nextbutton");
    var $page_span = document.getElementById("page");
    var $prevbutton = document.getElementById("prevbutton");
    var $rowdisplay = $th;
    var $starting_row_no_of_the_page = ($page-1) * $rowsperpage;

    if ($page < 1) $page = 1;
    if ($page > numPages()) $page = numPages();

    for ($trindex = $starting_row_no_of_the_page; $trindex < ($starting_row_no_of_the_page + $rowsperpage) && $trindex < $tr.length; $trindex++){
        $rowdisplay += $tr[$trindex];
    }
    $Forum.innerHTML = $rowdisplay;
    $page_span.innerHTML = 	"Page:"+ $page + "/" + numPages();

   if ($page == 1) {
        $prevbutton.style.cssText = 'background-color: #dddddd; color: #000; border: none; cursor: default;text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 30px 10px; padding: 16px;';
    } else {
    	$prevbutton.style.cssText = 'background-color: #666; border: 1px solid; border-radius: 5px; color: white; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 30px 10px; cursor: pointer; padding: 16px;';
    }

    if ($page == numPages()) {
        $nextbutton.style.cssText = 'background-color: #dddddd; color: #000; border: none; cursor: default;text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 30px 10px; padding: 16px;';
    } else {
    	$nextbutton.style.cssText = 'background-color: #666; border: 1px solid; border-radius: 5px; color: white; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 30px 10px; cursor: pointer; padding: 16px;';
    }
}

window.onload = function() {
    if (numPages() > 1) {
    for ($rowindex = 1,$trcount = 0; $rowindex < $rowCount; $rowindex++, $trcount++)
        $tr[$trcount] = $Forum.rows[$rowindex].outerHTML;
    changePage(1);
}
};