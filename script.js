
const welcomeMessage = document.getElementById("welcome-message");
const helloButton = document.getElementById("hello-button");

welcomeMessage.textContent =
    "Welcome to my lab. The journey starts here!";

helloButton.addEventListener("click", function () {
    alert(
        "Hello! Welcome to Sentinel Full-Stack Lab. " +
        "Keep learning, keep building, and stay secure!"
    );
});
