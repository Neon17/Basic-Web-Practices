window.onload = function() {
    if (window.innerWidth<=768){
        var showit = document.getElementById("NavIdCollapse");
        showit.style.display = "none";
        console.log("hello");
    }
    
}
function showNavlists () {
    if (window.innerWidth<=768){
        var showit = document.getElementById("NavIdCollapse");
        if (showit.hasAttribute("style")){
            if (showit.style.display == "block"){
                showit.style.display = "none";
            }
            else {
                showit.style.display = "block"
            }
        }
        else {
            showit.style.display = "block";
        }
    }
}