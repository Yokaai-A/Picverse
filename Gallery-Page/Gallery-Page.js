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


// Tags
const tagElements = document.querySelectorAll('.tag');
const categorySections = document.querySelectorAll('.category-section');

tagElements.forEach(function(tagElement) {
    tagElement.addEventListener('click', function() {
        const tagText = tagElement.textContent.trim();
        const targetSection = Array.from(categorySections).find(function(section) {
            const categoryTag = section.querySelector('.category-tag');
            return categoryTag && categoryTag.textContent.trim() === tagText;
        });
        if (targetSection) {
            const yOffset = -80; 
            const PosisiY = targetSection.getBoundingClientRect().top + window.scrollY + yOffset;

            window.scrollTo({
                top: PosisiY,
                behavior: 'smooth'
            });
        }
    });
});

// Animation
const animasiMasuk = new IntersectionObserver((entries) =>
    entries.forEach(e => e.isIntersecting && e.target.classList.add('visible'))
);
  
document.querySelectorAll('.fade-in').forEach(el => animasiMasuk.observe(el));

// Climbing 
document.addEventListener('DOMContentLoaded', function () {
    const popupOverlay = document.getElementById('popupClimbing');
    const popupBackBtn = document.getElementById('popupBackBtnClimber');
    const climbingImage = document.querySelector('img[alt="Climbing"]');

    if (climbingImage) {
        climbingImage.addEventListener('click', function () {
            popupOverlay.style.display = 'flex';
        });
    }

    if (popupOverlay) {
        popupOverlay.addEventListener('click', function (e) {
            if (e.target === popupOverlay) {
                popupOverlay.style.display = 'none';
            }
        });
    }

    if (popupBackBtn) {
        popupBackBtn.addEventListener('click', function () {
            popupOverlay.style.display = 'none';
        });
    }
});

// Kimono 
document.addEventListener('DOMContentLoaded', function () {
    const popupOverlay = document.getElementById('popupKimono');
    const popupBackBtn = document.getElementById('popupBackBtnKimono');
    const climbingImage = document.querySelector('img[alt="Kimono Style"]');

    if (climbingImage) {
        climbingImage.addEventListener('click', function () {
            popupOverlay.style.display = 'flex';
        });
    }

    if (popupOverlay) {
        popupOverlay.addEventListener('click', function (e) {
            if (e.target === popupOverlay) {
                popupOverlay.style.display = 'none';
            }
        });
    }

    if (popupBackBtn) {
        popupBackBtn.addEventListener('click', function () {
            popupOverlay.style.display = 'none';
        });
    }
});

// Mosaic Fish
document.addEventListener('DOMContentLoaded', function () {
    const popupOverlay = document.getElementById('popupMosaicFish');
    const popupBackBtn = document.getElementById('popupBackBtnMosaicFish');
    const climbingImage = document.querySelector('img[alt="Mosaic Fish"]');

    if (climbingImage) {
        climbingImage.addEventListener('click', function () {
            popupOverlay.style.display = 'flex';
        });
    }

    if (popupOverlay) {
        popupOverlay.addEventListener('click', function (e) {
            if (e.target === popupOverlay) {
                popupOverlay.style.display = 'none';
            }
        });
    }

    if (popupBackBtn) {
        popupBackBtn.addEventListener('click', function () {
            popupOverlay.style.display = 'none';
        });
    }
});

// Red Panda
document.addEventListener('DOMContentLoaded', function () {
    const popupOverlay = document.getElementById('popupRedPanda');
    const popupBackBtn = document.getElementById('popupBackBtnRedPanda');
    const climbingImage = document.querySelector('img[alt="Red Panda"]');

    if (climbingImage) {
        climbingImage.addEventListener('click', function () {
            popupOverlay.style.display = 'flex';
        });
    }

    if (popupOverlay) {
        popupOverlay.addEventListener('click', function (e) {
            if (e.target === popupOverlay) {
                popupOverlay.style.display = 'none';
            }
        });
    }

    if (popupBackBtn) {
        popupBackBtn.addEventListener('click', function () {
            popupOverlay.style.display = 'none';
        });
    }
});