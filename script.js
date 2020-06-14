// Defines all DOM elements
const title = document.querySelector("h1");
const content = document.querySelector("p");
const btn = Array.from(document.querySelectorAll(".btn"));
const check = document.querySelector("input");


// Function that adss and removes the "fade" class in order to create a transition whilst inner html is changing
function editClass() {
    // Adds class to elements
    title.classList.add("fade");
    content.classList.add("fade");
    
    // Waits 1000 milliseconds to remove class, and set menu to unchecked, therefore closing the menu
    setTimeout(() => {  
        title.classList.remove("fade");
        content.classList.remove("fade");
        check.checked = false
    }, 1000);
}

// Functions that HTML buttons call on
function homeFunc() {
    // Calls edit class function defined on line 9
    editClass();
    setTimeout(() => {
        // Changes inner html of elements after 500 milliseconds (when completely faded out)
        title.innerText = "Hello!";
        content.innerText = "Hello, my name is Finn, and this is my website.";
    }, 500);
    
}

function aboutFunc() {
    console.log(title);
    editClass();
    setTimeout(() => {  
        title.innerHTML = "About";
        content.innerHTML = "I'm Finn. I like to think I can write useful and clean programs in Python and Javascript, as well as cool websites with vanilla HTML, CSS and JS.";
    }, 500);
    
}

function futureFunc() {
    editClass();
    setTimeout(() => {  
        title.innerText = "Plans For The Future"
        content.innerHTML = "Eventually, I'd like to be a full stack web developer, or program developer. I currently know vanilla HTML, CSS and JavaScript, but I'm currently working on learning a back-end language (node.js) and a query languge (MySQL)."
    }, 500);
}

function contactFunc() {
    editClass();
    setTimeout(() => {  
        title.innerHTML = "Contact"
        content.innerHTML = "Email: <a href='mailto:llewellynfinn@gmail.com'>llewellynfinn@gmail.com</a> <br> Snapchat: fllewellyn8900"
    }, 500);
}
function resFunc() {
    editClass();
    setTimeout(() => {  
        title.innerHTML = "Resources"
        content.innerHTML = "Thanks to: <br> <a href='https://www.youtube.com/user/TechGuyWeb'>Traversy Media</a>: CSS only burger bar <br> <a href='https://www.pexels.com/'>Pexels</a>: background image <br> <a href='https://stackoverflow.com/'>Stack Overflow</a>: Random JS"
    }, 500);
}