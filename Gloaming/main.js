const img = document.querySelector("img");
let i = 0;
const images = ["./img/sunset.jpg", "./img/sunset2.jpg", "./img/sunset3.jpg", "./img/sunset4.jpg"];

document.slide.src = images[0];

function editClass() {
    img.classList.add("fade");

    setTimeout(() => {
        document.slide.src = images[i];
        img.classList.remove("fade");
    }, 1000);
}

function imgNext(){
    if(i === 3) {
        i = 0;
    } else {
        i++;
    };
    editClass();
    console.log(`imgNext run! ${i}`);
};

function imgLast(){
    if(i === 0) {
        i = 3;
    } else {
        i--;
    };
    editClass();
    console.log(`imgLast run! ${i}`);
};