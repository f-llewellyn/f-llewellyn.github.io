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
        content.innerText = "I'm Finn. I like to think I can write useful and clean programs in Python and Javascript, as well as cool websites with vanilla HTML, CSS and JS.";
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
        content.innerText = "Eventually, I'd like to be a full stack web developer, or program developer. I currently know vanilla HTML, CSS and JavaScript, but I'm currently working on learnin a back-end language (node.js) and some form of database languge (MySQL)."
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
        content.innerText = "Email: llewellynfinn@gmail.com \n Snapchat: fllewell8900"
    }, 500);
}
function resFunc() {
    title.classList.add("fade")
    content.classList.add("fade")
    setTimeout(() => {  
        title.classList.remove("fade");
        content.classList.remove("fade");
        check.checked = false 
    }, 1000);
    setTimeout(() => {  
        title.innerText = "Resources"
        content.innerText = "Thanks to: \n Traversy Media: CSS only burger bar \n Pexels: background image \n Stack Overflow: Random JS"
    }, 500);
}