import startPage from "./startpage.mjs";

export default function mainPage() {
    const mainContainer = document.getElementById("renderedContent");
    mainContainer.classList.add("mainContainer");
    const mainPageContainer = document.createElement("div");
    mainPageContainer.classList.add("mainPageContainer");
    const mainPageTextOne = document.createElement("p");
    mainPageTextOne.classList.add("mainPageTextFirst");
    const mainPageTextTwo = document.createElement("p");
    mainPageTextTwo.classList.add("mainPageTextSecond");
    const mainPageImgOne = createElement("img");
    mainPageImgOne.classList.add("mainPageImgOne")
    // add img src, aria, alt
    const mainPageImgTwo = createElement("img");
    mainPageImgTwo.classList.add("mainPageImgTwo")
    // add img src, aria, alt
    const mainPageImgThree = createElement("img");
    mainPageImgThree.classList.add("mainPageImgThree");
    // add img src, aria, alt

    const backBtn = document.createElement("button");
    backBtn.classList.add("btn");
    backBtn.textContent = "Back to start";

    backBtn.addEventListener("click", startPage());
}