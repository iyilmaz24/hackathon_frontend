

// for use in MVP presentation
import fsuIcon from "./resources/demo/fsu-logo.png";
import ufIcon from "./resources/demo/uf-logo.png";


const pageHTML = `<div id="column-grid">

<div class="school-header">
    <img src=${fsuIcon} alt="FSU-logo" width="100">
    <div>Florida State University, #53</div>
</div>
<div class="school-header">    
    <img src=${ufIcon} alt="UF-logo" width="100">
    <div>University of Florida, #28</div> 
</div>

<div>Tallahassee, Florida</div>
<div>Gainesville, Florida</div>

<div>Enrollment: 44,000</div>
<div>Enrollment: 53,000</div>

<div>Tuition: $19,084</div>
<div>Tuition: $25,694</div>

<div>Acceptance Rate: 25%</div>
<div>Acceptance Rate: 23%</div>

<div>Total: 87 / 100</div>
<div>Total: 91 / 100</div>

</div>`;



function columnPageLoad(contentDiv)
{
    contentDiv.classList.add("column-page");
    contentDiv.innerHTML = pageHTML;
}



export {columnPageLoad};
