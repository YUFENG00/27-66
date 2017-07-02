var fixedHead = document.getElementById("table-head");
var fixedBody = document.getElementById("table-body")
window.addEventListener("scroll", winScroll, false);
function winScroll(e){
    var top = getElementViewTop(fixedBody);
    // console.log(top);
    top < 0 ? fixedHead.setAttribute("class","fixed") : fixedHead.removeAttribute("class","fixed");
    }

    function getElementViewTop(element){
　　　　var actualTop = element.offsetTop;
        var elementScrollTop = document.body.scrollTop;    
　　　　    return actualTop - elementScrollTop - 59;
　　}


var asideNav = document.getElementById("left-nav");
function setScroll() {
	window.removeEventListener("scroll", setHeight, false);
    asideNav.classList.add("addScroll");
    disableWindowScroll();
    // console.log(asideNav.style.height);
}

function removeScroll() {
	enableWindowScroll();
    asideNav.classList.remove("addScroll");
    window.addEventListener("scroll", setHeight, false);
}

function setHeight() {
var navScroll = document.body.scrollTop;
var navTop = asideNav.offsetTop;
var pageHeight = document.documentElement.clientHeight;
// console.log(pageHeight);
asideNav.style.height = (pageHeight - navTop + navScroll) + "px";
}   


function disableWindowScroll () {
    if (window.addEventListener) {
        window.addEventListener("DOMMouseScroll", onChildMouseWheel, false);
    }
    window.onmousewheel = document.onmousewheel = onChildMouseWheel;
}

function enableWindowScroll () {
    if (window.removeEventListener) {
        window.removeEventListener("DOMMouseScroll", onChildMouseWheel, false);    }
    window.onmousewheel = document.onmousewheel = null;
}

function onChildMouseWheel (event) {
    var scrollTgt = 0;
    event = window.event || event;
    if (event.detail) {
        scrollTgt = -40 * event.detail;
    } else {
        scrollTgt = event.wheelDeltaY;
    }

    if (scrollTgt) {
        preventDefault(event);
        asideNav.scrollTop = asideNav.scrollTop - scrollTgt;
    }
}

function preventDefault (event) {
    event = event || window.event;
    if (event.preventDefault) {
        event.preventDefault();
    }
    event.returnValue = false;
}
