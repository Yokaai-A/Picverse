document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll(
        '.to-home-page, .to-gallery-page, .to-submission-page, .to-community-page, .to-about-us-page'
    );
  
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            const target = e.target.classList;
    
            if (target.contains('to-home-page')) {
                window.location.href = '../Home-Page/Home-Page.html';
            } else if (target.contains('to-gallery-page')) {
                window.location.href = '../Gallery-Page/Gallery-Page.html';
            } else if (target.contains('to-submission-page')) {
                window.location.href = '../Submission-Page/Submission-Page.html';
            } else if (target.contains('to-community-page')) {
                window.location.href = '../Community-Page/Community-Page.html';
            } else if (target.contains('to-about-us-page')) {
                window.location.href = '../About-Us-Page/About-Us-Page.html';
            }
        });
    });
    const hamburger = document.querySelector('.hamburger');
    const popupMenu = document.getElementById('mobilePopupMenu');
  
    hamburger.addEventListener('click', () => {
        popupMenu.classList.toggle('hidden');
    });
  
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            popupMenu.classList.add('hidden');
        }
    });
});
  
// Logo
document.querySelector('.logo').addEventListener('click', function() {
    window.location.href = '../Home-Page/Home-Page.html';
});