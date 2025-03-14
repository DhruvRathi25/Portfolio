const Name = "DHRUV RATHI"; // Replace 'YourName' with your actual name
const displayName = document.querySelector("#name");
let index = 0;
function typeLetter() {
if (index < Name.length) {
    displayName.textContent += Name[index];
    index++;
    setTimeout(typeLetter, 200); // Adjust speed by changing the timeout value
    }
}
typeLetter();