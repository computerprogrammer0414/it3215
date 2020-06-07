/* Jaime Smith
Last updated on 06/06/2020 */

let lastImg = 1; //Set initial thumbnail and preview
// Get Information from HTML INDEX file
document.getElementById(0).src = document.getElementById(lastImg).src;
document.getElementById(lastImg).className = "thumb selected";

// Function to process image by ID
function preview(img) {
    document.getElementById(lastImg).className = "thumb normal";
    img.className = "thumb selected";
    document.getElementById(0).src = img.src;
    lastImg = img.id
}