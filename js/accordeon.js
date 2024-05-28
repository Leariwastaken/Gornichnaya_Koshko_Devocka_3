window.addEventListener("DOMContentLoaded", function () {
    const accordion = () => {
		const btns = document.querySelectorAll(".ac_head");
		btns.forEach((btn) => {
			btn.addEventListener("click", function () {
				this.classList.toggle("ac_head__active");
				//Следующий элемент
				this.nextElementSibling.classList.toggle("ac_block__active");
				if (this.classList.contains("ac_head__active")) {
					this.nextElementSibling.style.maxHeight =
						this.nextElementSibling.scrollHeight + 50 + "px";
				} else {
					this.nextElementSibling.style.maxHeight = "0px";
				}
			});
		});
	};
	accordion();

	
});