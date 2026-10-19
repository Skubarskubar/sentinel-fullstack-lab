
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

function findLargest(a, b) {
    return a > b ? a : b;
}

const firstResult = findLargest(25, 70);
const secondResult = findLargest(90, 40);
const thirdResult = findLargest(50, 50);

console.log("SENTINEL ALGORITHM LAB");
console.log("Largest of 25 and 70:", firstResult);
console.log("Largest of 90 and 40:", secondResult);
console.log("Largest of 50 and 50:", thirdResult);

document.addEventListener("DOMContentLoaded", function () {
    let output = document.getElementById("algorithm-output");

    if (!output) {
        output = document.createElement("pre");
        output.id = "algorithm-output";
        document.body.appendChild(output);
    }

    output.textContent =
        "SENTINEL ALGORITHM LAB\n\n" +
        "Largest of 25 and 70: " + firstResult + "\n" +
        "Largest of 90 and 40: " + secondResult + "\n" +
        "Largest of 50 and 50: " + thirdResult;
});
