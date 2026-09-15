const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

const today = new Date();

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

currentYear.textContent = today.getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

