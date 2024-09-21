// Task 1

const openCloseModal = () => {
  const openBtnEl = document.querySelector(`[data-action="open-modal"]`);
  const closeBtnEl = document.querySelector(`[data-action="close-modal"]`);

  openBtnEl.addEventListener("click", () => {
    document.body.classList.add("show-modal");
  });

  closeBtnEl.addEventListener("click", () => {
    document.body.classList.remove("show-modal");
  });

  // Task 2

  const backdropEl = document.querySelector(".js-backdrop");

  backdropEl.addEventListener("click", (event) => {
    if (event.target === backdropEl) {
      document.body.classList.remove("show-modal");
    }
  });
};

openCloseModal();

// Task 3

const changeBodyColor = () => {
  const radioBtns = document.querySelectorAll(`[name="color"]`);

  radioBtns.forEach((radioBtn) => {
    radioBtn.addEventListener("click", () => {
      document.body.style.backgroundColor = radioBtn.value;
    });
  });
};

changeBodyColor();

// Task 4.1

const greetUser = () => {
  const nameInputEl = document.querySelector("#name-input");
  const greetingsSpanEl = document.querySelector("#name-output");

  nameInputEl.addEventListener("input", () => {
    if (nameInputEl.value === "") {
      greetingsSpanEl.textContent = "незнайомець";
    } else {
      greetingsSpanEl.textContent = nameInputEl.value;
    }
  });
};

greetUser();

// Task 4.2

const validInput = () => {
  const inputEl = document.querySelector("#validation-input");

  inputEl.addEventListener("input", () => {
    if (inputEl.value.length === Number(inputEl.dataset.strLength)) {
      inputEl.classList.add("valid");
      inputEl.classList.remove("invalid");
    } else {
      inputEl.classList.add("invalid");
      inputEl.classList.remove("valid");
    }
  });
};

validInput();

// Task 5

const changeTextFontSize = () => {
  const fontSizeControlEl = document.querySelector("#font-size-control");
  const fontSizeValueEl = document.querySelector("#font-size-value");
  const textEl = document.querySelector("#text");

  fontSizeControlEl.addEventListener("input", () => {
    fontSizeValueEl.textContent = fontSizeControlEl.value;

    textEl.style.fontSize = `${fontSizeControlEl.value}px`;
  });
};

changeTextFontSize();
