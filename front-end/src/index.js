import './style.css';
import { aboutPageLoad } from './aboutPage';
import { historyPageLoad } from './historyPage';
import { columnPageLoad } from './columnPage';
import { formPageHTML } from './formPage';


// save all static parts of webpage as variables
const contentDiv = document.getElementById("content");
const homeBtn = document.getElementById("home-button");
const aboutBtn = document.getElementById("about-button");
const historyBtn = document.getElementById("history-button");


// function to remove all style classes from contentDiv
function cleanUpStyles() {
    contentDiv.classList.remove("history-page");
    contentDiv.classList.remove("form-page");
    contentDiv.classList.remove("about-page");
    contentDiv.classList.remove("form-page")
    contentDiv.classList.remove("column-page");
}

homeBtn.addEventListener("click", () => {cleanUpStyles(); formPageLoad(contentDiv)});
aboutBtn.addEventListener("click", () => {cleanUpStyles(); aboutPageLoad(contentDiv)});
historyBtn.addEventListener("click", () => {cleanUpStyles(); historyPageLoad(contentDiv)});

function formPageLoad(){
    cleanUpStyles();
    contentDiv.innerHTML = formPageHTML;
    contentDiv.classList.add("form-page");
    let innerFunction = () => {
        const formBtn = document.getElementById("compare-btn");
        formBtn.addEventListener("click", () => {cleanUpStyles(); columnPageLoad(contentDiv)});
    }
    innerFunction();
}


// always start user on the form page
formPageLoad();






