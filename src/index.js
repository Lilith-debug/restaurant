import {loadHome} from "./home.js";
import {loadMenu} from "./menu.js";
import {loadContact} from "./contact.js";

loadHome();

const loadPage = (() => {
    //DOM Cache
    const home = document.querySelector("#home");
    const menu = document.querySelector("#menu");
    const contact = document.querySelector("#contact");

    home.addEventListener("click", () => {
        switchTab(1);
        loadPage();
    });
    menu.addEventListener("click", () => {
        switchTab(2);
        loadPage();
    });
    contact.addEventListener("click", () => {
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
        }
    }
})();
 

