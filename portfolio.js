var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
const divs = document.querySelectorAll(".isShown");
const seeMore = document.querySelector(".seeMore");


function openTab(tabName){
    
    for(tablink of tabLinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabContents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab")
}



var sideMenu = document.getElementById("sideMenu");

function openMenu(){
    sideMenu.style.right = "0";
}
function closeMenu(){
    sideMenu.style.right = "-200px";
}



function toggleBtn(){
    for(let div of divs){
        div.classList.toggle("isShown");
           seeMore.textContent = div.classList.contains("isShown") ? "See More" : "Close";         
    }
}

