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

// Recent Activity
const recentBox = document.getElementById('recentBox');
const recentContent = document.getElementById('recentContent');
const enlargeNote = document.getElementById('enlargeNote');
const sectionDivide = document.getElementById('sectionDivide');

recentBox.addEventListener('click', () => {
    recentContent.classList.toggle('hidden');
    enlargeNote.classList.toggle('hidden');
    sectionDivide.classList.toggle('hidden');
});

// Comment
document.querySelectorAll('.post').forEach((post) => {
    const commentIcon = post.querySelector('.icon-comment');
    const commentSection = post.querySelector('.comment-section');

    commentIcon.addEventListener('click', () => {
        commentSection.classList.toggle('hidden');
    });
});

// Responsive
document.addEventListener('DOMContentLoaded', () => {
    const openSidebarBtn = document.getElementById('openMobileSidebar');
    const mobileSidebar = document.getElementById('mobileSidebar');
    const closeSidebar = document.querySelector('.close-sidebar');

    if (openSidebarBtn && mobileSidebar && closeSidebar) {
        openSidebarBtn.addEventListener('click', () => {
            mobileSidebar.classList.add('open');
            openSidebarBtn.classList.add('hidden'); 
        });

        closeSidebar.addEventListener('click', () => {
            mobileSidebar.classList.remove('open');
            openSidebarBtn.classList.remove('hidden'); 
        });
    }

    if (window.innerWidth <= 768) {
        document.querySelector('.sidebar')?.classList.add('hidden-mobile');
    }

    window.addEventListener('resize', () => {
        const mobileSidebar = document.getElementById('mobileSidebar');
        const openSidebarBtn = document.getElementById('openMobileSidebar');
    
        if (window.innerWidth > 768) {
            mobileSidebar?.classList.remove('open');
            openSidebarBtn?.classList.remove('hidden');
        }
    });    
});

// Animation 
const animasiMasuk = new IntersectionObserver((entries) =>
    entries.forEach(e => e.isIntersecting && e.target.classList.add('visible'))
);
  
document.querySelectorAll('.fade-in').forEach(el => animasiMasuk.observe(el));

// Like
document.querySelectorAll('.post').forEach((post) => {
    const likeIcon = post.querySelector('.icon-like');
    const likeCount = post.querySelector('.like-count');

    likeIcon.addEventListener('click', () => {
        let count = parseInt(likeCount.textContent);

        const liked = likeIcon.classList.toggle('liked'); 

        if (liked) {
            likeIcon.src = '../asset/Community/redLike.png'; 
            likeCount.textContent = count + 1;
        } else {
            likeIcon.src = '../asset/Community/like.png'; 
            likeCount.textContent = count - 1;
        }
    });
});

