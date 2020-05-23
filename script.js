const title = document.querySelector("h1");
const content = document.querySelector("p");
const btn = Array.from(document.querySelectorAll(".btn"));
const check = document.querySelector("input");

function homeFunc() {
    console.log(title);
    title.classList.add("fade")
    content.classList.add("fade")
    setTimeout(() => {  
        title.classList.remove("fade");
        content.classList.remove("fade");
        check.checked = false
    }, 1000);
    setTimeout(() => {  
        title.innerText = "Hello!";
        content.innerText = "Hello, my name is Finn, and this is my website.";
    }, 500);
    
}

function aboutFunc() {
    console.log(title);
    title.classList.add("fade")
    content.classList.add("fade")
    setTimeout(() => {  
        title.classList.remove("fade");
        content.classList.remove("fade");
        check.checked = false
    }, 1000);
    setTimeout(() => {  
        title.innerText = "About";
        content.innerText = "This will say things about me!";
    }, 500);
    
}

function futureFunc() {
    title.classList.add("fade")
    content.classList.add("fade")
    setTimeout(() => {  
        title.classList.remove("fade");
        content.classList.remove("fade");
        check.checked = false 
    }, 1000);
    setTimeout(() => {  
        title.innerText = "Plans For The Future"
        content.innerText = "This will tell you about my plan for the future."
    }, 500);
}

function contactFunc() {
    title.classList.add("fade")
    content.classList.add("fade")
    setTimeout(() => {  
        title.classList.remove("fade");
        content.classList.remove("fade");
        check.checked = false 
    }, 1000);
    setTimeout(() => {  
        title.innerText = "Contact"
        content.innerText = "This will have my contact details."
    }, 500);
}