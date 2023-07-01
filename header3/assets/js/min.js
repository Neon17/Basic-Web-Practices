window.onload = function() {
    var showit = document.getElementById("NavIdCollapse");
    if (window.innerWidth<=768){
        var showit = document.getElementById("NavIdCollapse");
        showit.style.display = "none";
        console.log("hello");
    }
   if (window.innerWidth>768){
        if (showit.hasAttribute("style")){
            showit.style.display = "flex";
        }
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