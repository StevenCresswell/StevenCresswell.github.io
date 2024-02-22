const projectOne = document.getElementById("project1")
const projectTwo = document.getElementById("project2")
const closeButtonOne = document.getElementById("close-button-one")
const closeButtonTwo = document.getElementById("close-button-two")

const openProject = (event) => {
    if (event.target === projectOne) {
        document.getElementById("project-info-one").style.display = "block"
        projectOne.style.listStyleImage = "url(Resources/Images/pointing-down-finger-svgrepo-com.svg)"
    } else if (event.target === projectTwo) {
        document.getElementById("project-info-two").style.display = "block"
        projectTwo.style.listStyleImage = "url(Resources/Images/pointing-down-finger-svgrepo-com.svg)"
    }
}

const closeProject = (event) => {
    if (event.target === closeButtonOne) {
        document.getElementById("project-info-one").style.display = "none"
        projectOne.style.listStyleImage = "url(Resources/Images/pointing-right-finger-svgrepo-com.svg)"
    } else if (event.target === closeButtonTwo) {
        document.getElementById("project-info-two").style.display = "none"
        projectTwo.style.listStyleImage = "url(Resources/Images/pointing-right-finger-svgrepo-com.svg)"
    }
}

projectOne.onclick = openProject

projectTwo.onclick = openProject

closeButtonOne.onclick = closeProject

closeButtonTwo.onclick = closeProject


const gnomedAudio = new Audio("Resources/Sound/gnome-sound-effect.mp3")
const gnomed = document.getElementById("gnomed")
const gnomedPic = document.getElementById("gnomedpic")

const getGnomed = () => {
    gnomedAudio.play()
    gnomedPic.style.display = "block"
}

gnomed.onclick = getGnomed

/*const skillsContainer = document.getElementById("skills-container");

const showSkill = (event) => {
    if (event.target === document.getElementById("icon-1")) {
        document.getElementById("skill-1").style.display = "block"
    }
    else if (event.target === document.getElementById("icon-2")) {
        document.getElementById("skill-2").style.display = "block"
    }
    else if (event.target === document.getElementById("icon-3")) {
        document.getElementById("skill-3").style.display = "block"
    }
    else if (event.target === document.getElementById("icon-4")) {
        document.getElementById("skill-4").style.display = "block"
    }
    else if (event.target === document.getElementById("icon-5")) {
        document.getElementById("skill-5").style.display = "block"
    }
    else if (event.target === document.getElementById("icon-6")) {
        document.getElementById("skill-6").style.display = "block"
    }
    else if (event.target === document.getElementById("icon-7")) {
        document.getElementById("skill-7").style.display = "block"
    }
}


const hideSkill = (event) => {
    if (event.target === document.getElementById("skill-1")) {
        document.getElementById("skill-1").style.display = "none"
    }
    else if (event.target === document.getElementById("skill-2")) {
        document.getElementById("skill-2").style.display = "none"
    }
    else if (event.target === document.getElementById("skill-3")) {
        document.getElementById("skill-3").style.display = "none"
    }
    else if (event.target === document.getElementById("skill-4")) {
        document.getElementById("skill-4").style.display = "none"
    }
    else if (event.target === document.getElementById("skill-5")) {
        document.getElementById("skill-5").style.display = "none"
    }
    else if (event.target === document.getElementById("skill-6")) {
        document.getElementById("skill-6").style.display = "none"
    }
    else if (event.target === document.getElementById("skill-7")) {
        document.getElementById("skill-7").style.display = "none"
    }
} 

skillsContainer.addEventListener("mouseover", (event) => {
        setTimeout(() => showSkill(event), 500);
});

skillsContainer.addEventListener("mouseout", (event) => {
        setTimeout(() => hideSkill(event), 500);
});
*/