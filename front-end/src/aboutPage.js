

const aboutBio = `This project was built in a 24 hour period by Jacky, Sarah, Michael, and Connor between Decemeber 2nd and Decemeber 3rd of 2024. 
The blending of multiple points of view, into a project that provides the small 
service of comparing 2 colleges. Limited by funds, we utilized free APIs, free vector images, free documentation, and a lot of
creativity. We hope that you enjoy using our project and get some value from it.`
const pageHTML = `<div>${aboutBio}</div>
<a href="https://github.com/yoyoconnor/SudoHackathon">Link to Github Repo</a>`;



function aboutPageLoad(contentDiv)
{
    contentDiv.classList.add("about-page");
    contentDiv.innerHTML = pageHTML;
}



export {aboutPageLoad};

