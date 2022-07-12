import Logo from "./logo.jpg";
import "./style.css";

const loadHome = (() => {
    const content = document.querySelector("#content");

    const tabMenu = document.createElement("ul");
    tabMenu.setAttribute("id", "tab-menu");

    const home = document.createElement("li");
    home.setAttribute("id", "home");
    home.textContent = "Home";
    tabMenu.appendChild(home);

    const menu = document.createElement("li");
    home.setAttribute("id", "menu");
    menu.textContent = "Menu";
    tabMenu.appendChild(menu);

    const contact = document.createElement("li");
    home.setAttribute("id", "contact");
    contact.textContent = "Contact";
    tabMenu.appendChild(contact);

    content.appendChild(tabMenu);


    const headline = document.createElement("div");
    headline.setAttribute("id", "headline");

    const pageLogo = new Image();
    pageLogo.src = Logo;

    headline.appendChild(pageLogo);
    
    const title = document.createElement("h1");
    title.textContent = "Los Pollos Amigos";
    headline.appendChild(title);

    content.appendChild(headline);


    const review = document.createElement("p");
    review.textContent = `This cozy restaurant has left the best impressions! 
    Hospitable hosts, delicious dishes, beautiful presentation, wide wine list 
    and wonderful dessert. I recommend to everyone! 
    I would like to come back here again and again.`;
    content.appendChild(review);
});

export {loadHome};