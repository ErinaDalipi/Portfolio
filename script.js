
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
const downloadBtn = document.getElementById('downloadBtn');

  downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'Erina Dalipi-CV.pdf'; 
    link.download = 'MyCV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  });