window.onload=function() {

}
function showMenu() {
    var menu = document.getElementById("navIdCollapse");
    if (menu.hasAttribute("style")){
        if (menu.style.display=="none"){
            menu.style.display = "flex";
        }
        else {
            menu.style.display = "none";
        }
    }
    else {
        menu.style.display = "flex";
    }
}