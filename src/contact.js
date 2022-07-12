const loadContact = (() => {
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
    title.textContent = "Contact";
    headline.appendChild(title);

    content.appendChild(headline);

    const contactInfo = document.createElement("div");

    const data = ["0810-555-333", "Av. de Mayo 55"]
    data.forEach((item) => {
        const para = document.createElement("p");
        para.textContent = item;
        contactInfo.appendChild(para);
    });

    content.appendChild(contactInfo);
});

export {loadContact};