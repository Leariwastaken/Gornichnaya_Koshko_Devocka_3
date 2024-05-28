const hamb = document.querySelector("#burger_hamb");
const popup = document.querySelector("#burger_popup");
const menu = document.querySelector("#menu").cloneNode(1);
	
hamb.addEventListener("click", hambHandler);

function hambHandler() {
    popup.classList.toggle('popup-open');
    hamb.classList.toggle('hamb-open');
    renderPopup();
}
    
function renderPopup() {
    popup.appendChild(menu);
}