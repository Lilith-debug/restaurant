import Logo from "./logo.jpg";
import "./style.css";

function loadHome() {

    const content = document.querySelector("#content");

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
}

export {loadHome};