const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

btn.onclick = createcard

function createcard(){
    const card = document.createElement("div")
    card.className = "card"

    const img = document.createElement("img")
    img.src = "img.webp"
    img.alt = "cat photo";

    const h1 = document.createElement("h1");
    h1.innerText = "BMW"
    h1.className = "card-title";

    const p = document.createElement("p");
    p.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, magnam!"

    card.appendChild(img);
    card.appendChild(h1);
    card.appendChild(p);

    container.appendChild(card);
}