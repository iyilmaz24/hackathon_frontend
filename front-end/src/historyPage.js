import Icon from './resources/history_FILL0_wght400_GRAD0_opsz24.svg';


const fillerHTML = `<div>HISTORY1</div>
<div>HISTORY1</div>
<div>HISTORY2</div>
<div>HISTORY2</div>
<div>grid will auto fill each time we upload a pair of schools</div>
<div>lets display the history, but if no history, display the black history svg icon</div>`;


const myIcon = new Image();
myIcon.src = Icon;
const pageHTML = `<div id="history-grid">${fillerHTML}</div>`;


function historyPageLoad(contentDiv)
{
    contentDiv.classList.add("history-page");
    contentDiv.innerHTML = pageHTML;
    contentDiv.prepend(myIcon);
}


export {historyPageLoad};

