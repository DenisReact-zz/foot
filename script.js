const allBtn = document.querySelectorAll("#conditions-list li");
const allBackCard = document.querySelectorAll(".container .back div.description");

for (let i = 0; i < allBtn.length; i++) {
    const element = allBtn[i];
    element.childNodes[0].addEventListener("click", () => {
        document.querySelector(".conditions").classList.add("flip");
        // let activeBtn = allBtn.forEach((el, index) => {
        //     if(index === i){
        //         allBtn[index].childNodes[0].classList.add("active")
        //     }else{
        //         allBtn[index].childNodes[0].classList.remove("active");
        //     }
        // });
        for (let a = 0; a < allBackCard.length; a++) {
            const element = allBackCard[a];
            if(a === i){
                allBackCard[a].style.display = "block";
            }else{
                allBackCard[a].style.display = "none";
            }
        }

        const calcHeightText = (element) => {
            // console.log(element.childNodes[1].clientHeight)
            return document.querySelector(".illustration .conditions").clientHeight -
                (element.childNodes[1].offsetHeight +
                    document.querySelector(".illustration .conditions .back button").offsetHeight);

        }

        document.querySelectorAll(".illustration .conditions .description").forEach(el => {
            let heightText = calcHeightText(el);
            el.childNodes[3].style.maxHeight = `${heightText}px`;

        })
    })
}
const allDots = document.querySelectorAll("svg #hotspots > g");

for (let i = 0; i < allDots.length; i++) {
    const element = allDots[i];
    element.addEventListener("click", () => {
        //activate card
        document.querySelector(".conditions").classList.add("flip");
        for (let a = 0; a < allBackCard.length; a++) {
            const element = allBackCard[a];
            if (a === i) {
                allBackCard[a].style.display = "block";
            } else {
                allBackCard[a].style.display = "none";
            }
        }

        const calcHeightText = (element) => {
            // console.log(element.childNodes[1].clientHeight)
            return document.querySelector(".illustration .conditions").clientHeight -
                (element.childNodes[1].offsetHeight +
                    document.querySelector(".illustration .conditions .back button").offsetHeight);

        }

        document.querySelectorAll(".illustration .conditions .description").forEach(el => {
            let heightText = calcHeightText(el);
            el.childNodes[3].style.maxHeight = `${heightText}px`;

        })
    })
}

document.querySelector("#flip-back").addEventListener("click", () => {
    document.querySelector(".conditions").classList.remove("flip");
})

function changeBone(classN){
    removeActive();

    document.querySelectorAll(`.${classN}`).forEach(el => {
        if (!/active/.test(el.className.baseVal)) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    })
    if (classN === "A-S") {
        document.querySelector("svg #c1").classList.toggle("active");
        document.querySelector("#pa1").classList.toggle("active");
    }else if (classN === "A-P") {
        document.querySelector("svg #c2").classList.toggle("active");
        document.querySelector("#pa2").classList.toggle("active");
    } else if (classN === "P-T") {
        document.querySelector("svg #c3").classList.toggle("active");
        document.querySelector("#pa3").classList.toggle("active");
    } else if (classN === "A-T") {
        document.querySelector("svg #c4").classList.toggle("active_two");
        document.querySelector("#pa4").classList.toggle("active");
    } else if (classN === "A-T-I") {
        document.querySelector("svg #c5").classList.toggle("active");
        document.querySelector("#pa5").classList.toggle("active");
    } else if (classN === "P-F") {
        document.querySelector("svg #c6").classList.toggle("active");
        document.querySelector("#pa6").classList.toggle("active");
    } else if (classN === "M-N") {
        document.querySelector("svg #c7").classList.toggle("active");
        document.querySelector("#pa7").classList.toggle("active");
    } else if (classN === "Hamm") {
        document.querySelector("svg #c8").classList.toggle("active");
        document.querySelector("#pa8").classList.toggle("active");
    } else if (classN === "Bunion") {
        document.querySelector("svg #c9").classList.toggle("active");
        document.querySelector("#pa9").classList.toggle("active");
    }else if (classN === "Tailors") {
        document.querySelector("svg #c10").classList.toggle("active_two");
        document.querySelector("#pa10").classList.toggle("active");
    }else if (classN === "Bunionette") {
        document.querySelector("svg #c11").classList.toggle("active");
        document.querySelector("#pa11").classList.toggle("active");
    }else{
        removeActive();
    }
    
}

function activeBone(classN){
    document.querySelectorAll("svg .active").forEach(el => {
        let reg = new RegExp(`/${classN}/`, '');
        if (reg.test(el.className.baseVal)) {
            el.classList.add("active");
        }
    })
}

const removeActive = () => {
    document.querySelectorAll("svg .active").forEach(el => el.classList.remove('active'));
    document.querySelectorAll("svg .active_two").forEach(el => el.classList.remove('active_two'));
    // console.log(document.querySelectorAll(".conditions-list .active"))
    document.querySelectorAll("#conditions-list li.active").forEach(el => el.classList.remove('active'));
}

// const rightForButtonBook = (document.querySelector("#conditions-card").clientWidth / 2) - (document.querySelector("#book").clientWidth / 2);

// document.querySelector("#book").style.marginRight = `${rightForButtonBook - 5}px`;


// document.querySelectorAll(".illustration .conditions .body").forEach(el => el.style.height = `${heighText}px`)




for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].childNodes[2].addEventListener("mouseenter", () => {
        allBtn[i].childNodes[0].classList.add("active");
        // allBtn[i].childNodes[2].classList.add("active");
    })
    allBtn[i].childNodes[2].addEventListener("mouseleave", () => {
        allBtn[i].childNodes[0].classList.remove("active");
        // allBtn[i].childNodes[2].classList.remove("active");
    })
}