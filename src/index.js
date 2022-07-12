import {loadHome} from "./home.js";
import {loadMenu} from "./menu.js";
import {loadContact} from "./contact.js";

loadHome();

function loadPage() {
    //DOM Cache
    const content = document.querySelector("#content");
    const home = document.querySelector("#home");
    const menu = document.querySelector("#menu");
    const contact = document.querySelector("#contact");

    console.log("ok");    

    home.addEventListener("click", () => {
        erasePage();
        switchTab(1);
        loadPage();
     });
    menu.addEventListener("click", () => {
        erasePage();
        switchTab(2);
        loadPage();
    });
    contact.addEventListener("click", () => {
        erasePage();
        switchTab(3);
        loadPage();
    });
    

    function switchTab(tab) {
        switch (tab) {
            case 1:
                loadHome();
                break;
            case 2:
                loadMenu();
                break;
            case 3:
                loadContact();
                break;
            default:
                loadHome();
                load();
        }
    }

    function erasePage() {
        let contentChildren = content.children;
        contentChildren = Array.from(contentChildren);
        console.log(contentChildren);
        contentChildren.forEach(child => {
            console.log(child);
            content.removeChild(child);
        });
    }
}

loadPage();
 

