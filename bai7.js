var menuTitle = document.getElementById("menuTitle");
var menuList = document.getElementById("menuList");


menuTitle.addEventListener("click", function() {
   
    if (menuList.style.display === "none") {
        menuList.style.display = "block";
    } else {
        menuList.style.display = "none";
    }
});