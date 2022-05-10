import githubImg from '../assets/github.png';

function footer(){
    const content = document.querySelector('.container');
    const foot = document.createElement("footer");
    foot.innerHTML = `<p>Copyright © 2022 zsoltizbekk</p>
    <a href="https://github.com/zsoltizbekk" target="_blank"><img class="footer-img" src="${githubImg}" alt="github" width="20px" height="20px"></a>`
    content.appendChild(foot);
}

export default footer;