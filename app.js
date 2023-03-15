const header = document.querySelector("header");

header.setAttribute("id","header");

header.style.backgroundColor = "#000";
header.style.color = "#fff";
header.style.padding = "20px";

header.innerHTML = "<ul> <li> Item 4 </li> </ul>";

//Body Element
const bodyElement = document.querySelector("body");

const inputNome = document.querySelector("input[name='name']");
const inputLink = document.querySelector("input[name='link']");
const btnLink = document.querySelector("#createLink");
const divLinks = document.getElementsByClassName("links")[0];
const ul2Element = document.createElement("ul");

const createLink = () => {
    const hrefElement = document.createElement("a");

    const li2Element = document.createElement("li");

    hrefElement.innerHTML = inputNome.value;
    hrefElement.href = inputLink.value;
    hrefElement.target = "_blank";

    ul2Element.appendChild(li2Element);
    li2Element.appendChild(hrefElement);
}

//Main Elements
const mainElement = document.createElement("main");
const articleElement = document.createElement("article");
const pElement1 = document.createElement("p");
const pElement2 = document.createElement("p");
const sectionElement = document.createElement("section");
const divElement = document.createElement("div");


//Footer Elements
const footerElement = document.createElement("footer");
const ulElement = document.createElement("ul");
const liElement = document.createElement("li");
const imgElement = document.createElement("img");
imgElement.src = "logo.png";
imgElement.alt = "";
imgElement.srcset = "";

//Body
divLinks.appendChild(ul2Element);

//Article
bodyElement.appendChild(mainElement);
mainElement.appendChild(articleElement);
articleElement.appendChild(pElement1);
pElement1.innerHTML = "Texto Principal";

//Section
mainElement.appendChild(sectionElement);
sectionElement.appendChild(divElement);
divElement.appendChild(pElement2);
pElement2.innerHTML = "Texto Secundario";

//Footer
mainElement.after(footerElement);
footerElement.appendChild(ulElement);
ulElement.appendChild(liElement);
liElement.innerHTML = "Link Rodapé";
ulElement.after(imgElement);

btnLink.addEventListener("click", createLink);

console.log(header);