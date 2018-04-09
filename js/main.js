window.addEventListener("load", init);

function init() {
    var login=document.getElementById("login").addEventListener("click", showOverlay);
}


function showOverlay() {
    document.getElementById("overlay").style.display="block";
}
