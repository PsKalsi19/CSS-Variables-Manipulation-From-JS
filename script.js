// First we are selecting all the inputs
const sliderControls = document.querySelectorAll(".controls input");
const resetBtn = document.querySelector(".reset-btn");

// function for the process
function handleUpdate() {
    document.documentElement.style.setProperty(`--${this.name}`,`${this.value}${this.dataset.type}`);
}
function resetInputs() {
    sliderControls.forEach((slider) => (slider.value = 1));
    sliderControls.forEach((slider) => {
        document.documentElement.style.setProperty(`--${slider.name}`, '0px');
    });
}

sliderControls.forEach((input) => input.addEventListener("input", handleUpdate));
resetBtn.addEventListener("click", resetInputs);
