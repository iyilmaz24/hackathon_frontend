
// import Icon from './resources/history_FILL0_wght400_GRAD0_opsz24.svg';
    // deprecated icon, not currently needed

// const myIcon = new Image();
// myIcon.src = Icon;



import fsuIcon from "./resources/demo/fsu-logo.png";
import ufIcon from "./resources/demo/uf-logo.png";

const fakeHistory = `
<div class="school-header">
    <img src=${fsuIcon} alt="FSU-logo" width="100">
    <div>Florida State University, #53</div>
</div>
<div class="school-header">    
    <img src=${ufIcon} alt="UF-logo" width="100">
    <div>University of Florida, #28</div> 
</div>`;


const pageHTML = `<div id="history-grid">${fakeHistory}</div>`;


function historyPageLoad(contentDiv)
{
    contentDiv.classList.add("history-page");
    contentDiv.innerHTML = pageHTML;
    // contentDiv.prepend(myIcon);
}


export {historyPageLoad};

