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
  
document.querySelector('.logo').addEventListener('click', function() {
    window.location.href = '../Home-Page/Home-Page.html';
});


// Check
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;
    let emailInput = document.getElementById("email");
    let email = emailInput.value.trim();
    let emailError = emailInput.parentElement.querySelector(".error-message");
    emailError.textContent = "";

    if(email === "") {
        emailError.textContent = "Email is required.";
        valid = false;
    }else {
        let foundAt = false;
        let foundDotAfter = false;

        for(let i = 0; i < email.length; i++) {
            if (email[i] === "@") {
                foundAt = true;
            } else if (email[i] === "." && foundAt) {
                foundDotAfter = true;
            }
        }

        if(!foundAt || !foundDotAfter || email[0] === "@" || email[email.length - 1] === ".") {
            emailError.textContent = "Invalid email format.";
            valid = false;
        }
    }
    
    let titleInput = document.getElementById("title");
    let title = titleInput.value.trim();
    let titleError = titleInput.parentElement.querySelector(".error-message");
    titleError.textContent = "";

    if(title === "") {
        titleError.textContent = "Title is required.";
        valid = false;
    }else if (title.length < 7) {
        titleError.textContent = "Title must be more than 6 characters.";
        valid = false;
    }

    let tagField = document.getElementById("tag");
    let tagValue = tagField.value.trim();
    let tagWarning = tagField.parentElement.querySelector(".error-message");
    tagWarning.textContent = "";

    if (tagValue === "") {
        tagWarning.textContent = "Please enter at least one tag.";
        valid = false;
    } else if (!tagValue.startsWith("#")) {
        tagWarning.textContent = "The first tag must start with '#'.";
        valid = false;
    } else {
        let individualTags = tagValue.split(" ");
        for (let i = 0; i < individualTags.length; i++) {
            let currentTag = individualTags[i];
            if (!currentTag.startsWith("#") || currentTag.length <= 1) {
                tagWarning.textContent = "Each tag must have at least one character after it.";
                valid = false;
                break;
            }
        }
    }



    let fileInput = document.getElementById("file-upload");
    let fileError = fileInput.parentElement.querySelector(".error-message");
    fileError.textContent = "";

    if(fileInput.files.length === 0) {
        fileError.textContent = "Please upload a file.";
        valid = false;
    }

    let radioButtons = document.getElementsByName("ai-generated");
    let radioSelected = false;
    for(let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            radioSelected = true;
            break;
        }
    }

    let radioGroup = document.querySelector(".radio-group");
    let radioError = radioGroup.querySelector(".error-message");

    if(!radioError) {
        radioError = document.createElement("div");
        radioError.className = "error-message";
        radioGroup.appendChild(radioError);
    }

    radioError.textContent = "";

    if(!radioSelected) {
        radioError.textContent = "Please select Yes or No.";
        valid = false;
    }

    if(valid) {
        alert("Form submitted successfully!");
    }
});

// Drag & Drop File 
const dropTheFile = document.getElementById("drop-area");
const fileInput = document.getElementById("file-upload");
const selectFileButton = document.querySelector(".select-file");
const fileNameDisplay = dropTheFile.querySelector(".file-name-display");

function showFileName(file) {
    fileNameDisplay.textContent = `Selected file: ${file.name}`;
}

dropTheFile.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropTheFile.classList.add("dragover");
});

dropTheFile.addEventListener("dragleave", () => {
    dropTheFile.classList.remove("dragover");
});

dropTheFile.addEventListener("drop", (e) => {
    e.preventDefault();
    dropTheFile.classList.remove("dragover");

    const files = e.dataTransfer.files;
    if (files.length > 0) {
        fileInput.files = files; 
        showFileName(files[0]);
        console.log("File ", files[0].name);
    }
});

selectFileButton.addEventListener("click", () => {
    console.log("File : ", selectFileButton);
    fileInput.click();
});

fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
        showFileName(fileInput.files[0]);
    }
});

// Animation 
const animasiMasuk = new IntersectionObserver((entries) =>
    entries.forEach(e => e.isIntersecting && e.target.classList.add('visible'))
);
  
document.querySelectorAll('.fade-in').forEach(el => animasiMasuk.observe(el));

