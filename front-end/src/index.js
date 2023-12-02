import './style.css';
import { aboutPageLoad } from './aboutPage';
import { historyPageLoad } from './historyPage';
import { formPageLoad } from './formPage';


const contentDiv = document.getElementById("content");
const homeBtn = document.getElementById("home-button");
const aboutBtn = document.getElementById("about-button");
const historyBtn = document.getElementById("history-button");

homeBtn.addEventListener("click", () => {formPageLoad(contentDiv)});
aboutBtn.addEventListener("click", () => {aboutPageLoad(contentDiv)});

historyBtn.addEventListener("click", () => {
    historyPageLoad(contentDiv)
    contentDiv.classList.add("history-page");
});


