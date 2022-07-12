const loadMenu = (() => {
    const content = document.querySelector("#content");

    const tabMenu = document.createElement("ul");
    tabMenu.setAttribute("id", "tab-menu");

    const home = document.createElement("li");
    home.setAttribute("id", "home");
    home.textContent = "Home";
    tabMenu.appendChild(home);

    const menu = document.createElement("li");
    menu.setAttribute("id", "menu");
    menu.textContent = "Menu";
    tabMenu.appendChild(menu);

    const contact = document.createElement("li");
    contact.setAttribute("id", "contact");
    contact.textContent = "Contact";
    tabMenu.appendChild(contact);

    content.appendChild(tabMenu);


    const headline = document.createElement("div");
    headline.setAttribute("id", "headline");

    const title = document.createElement("h1");
    title.textContent = "Menu";
    headline.appendChild(title);

    content.appendChild(headline);


    const restaurantMenu = document.createElement("ul");
    restaurantMenu.setAttribute("id", "restaurant-menu");

    const data = ["10 Piece Chicken",
    "10 pieces of our freshly prepared chicken.",
    "14 Piece Chicken",
    "14 pieces of our freshly prepared chicken."];

    data.forEach((item) => {
        const para = document.createElement("li");
        para.textContent = item;
        restaurantMenu.appendChild(para);
    });
    
    content.appendChild(restaurantMenu);
    console.log(restaurantMenu);
    
});

export {loadMenu};