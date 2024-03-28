import mainPage from "./mainPage.mjs";

export default function startPage() {
    const mainContainer = document.getElementById("renderedContent");
    mainContainer.classList.add("mainContainer");
    const startPageContainer = document.createElement("div");
    startPageContainer.classList.add("startPageContainer");
    const startPageText = document.createElement("p");
    startPageText.classList.add("startPageText");
    const startPageImg = createElement("img");
    startPageImg.classList.add("startPageImg");
    // add img src, aria, alt
    const readMoreBtn = document.createElement("button");
    readMoreBtn.classList.add("btn");
    readMoreBtn.textContent = "Read more";

    readMoreBtn.addEventListener("click", mainPage());
}
