/******************
  Dark mode button 
*******************/

function initDarkMode() {
  const switchBtn = document.querySelector('.switch-button');
  if (!switchBtn) return;

  let darkModeOn = JSON.parse(localStorage.getItem('mode')) || false;

/*   if (darkModeOn) {
    document.documentElement.classList.add('dark-mode');
    switchBtn.classList.add('slide');
  } */

  switchBtn.addEventListener('click', () => {
    darkModeOn = !darkModeOn;
    document.documentElement.classList.toggle('dark-mode', darkModeOn);
    switchBtn.classList.toggle('slide', darkModeOn);
    localStorage.setItem('mode', JSON.stringify(darkModeOn));
  });
}
// toggle('class', condition); documentElement returns <html>

initDarkMode();
document.addEventListener('astro:page-load', initDarkMode);

/****************
  COPYRIGHT DATE
*****************/
/* 
const copyrightDate = document.querySelector('.copyright-date');
copyrightDate.innerHTML = new Date().getFullYear(); */

/********************
  BACK-TO-TOP button
*********************/

/* const backToTopBtn = document.querySelector('.back-to-top-button');

function btnVisibleOnScroll() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    backToTopBtn.style.opacity = 1;
    backToTopBtn.style.visibility = "visible";
  } else {
    backToTopBtn.style.opacity = 0;
    backToTopBtn.style.visibility = "hidden";
  }
};

window.addEventListener('scroll', btnVisibleOnScroll); */