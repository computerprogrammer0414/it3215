let lastImg = 1; //Set initial thumbnail and preview
document.getElementById(0).src = document.getElementById(lastImg).src;
document.getElementById(lastImg).className = "thumb selected";

function preview(img) {
    document.getElementById(lastImg).className = "thumb normal";
    img.className = "thumb selected";
    document.getElementById(0).src = img.src;
    lastImg = img.id
}