import Icon from './history_FILL0_wght400_GRAD0_opsz24.svg';

const myIcon = new Image();
myIcon.src = Icon;
const pageHTML = `<div class="title-text">Previous Searches...</div>`;


function historyPageLoad(contentDiv)
{
    contentDiv.innerHTML = pageHTML;
    contentDiv.prepend(myIcon);
}


export {historyPageLoad};

