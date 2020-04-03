const motd = document.querySelector("#MOTD");

const msg = [
    "No, I am your father",
    "Never gonna give you up",
    "MUM GET THE CAMERA!",
    "1.21 Giggawatts!?!?!",
    "Asta la vista, baby",
    "Somebody once told me",
    "Did you ever hear the tragedy of Dart Plagius the wise?",
    "In space, no one can hear you scream",
    "sudo rm-rf",
    "rm C:\Windows\System32",
    "I use Arch btw",
    "Fitter, happier and more productive..."
];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
};

const rndmMsgNum = getRandom(0, (msg.length));

console.log(rndmMsgNum)

motd.textContent = `${msg[rndmMsgNum]}`;

console.log(document.querySelector("#dev"));

document.querySelector("#dev").addEventListener("click", (e) => {
    alert("I haven't finished that yet, sorry.")
});