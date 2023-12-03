

const pageHTML = `<div id="column-grid">

<div>LOGO, NAME W LINK, RANKING1</div>
<div>LOGO, NAME W LINK, RANKING2</div>
<div>ENROLLMENT1</div>
<div>ENROLLMENT2</div>
<div>COST1</div>
<div>COST2</div>
<div>LOCATION1</div>
<div>LOCATION2</div>
<div>TOTAL PTS1</div>
<div>TOTAL PTS2</div>

</div>`;



function columnPageLoad(contentDiv)
{
    contentDiv.classList.add("column-page");
    contentDiv.innerHTML = pageHTML;
}



export {columnPageLoad};
