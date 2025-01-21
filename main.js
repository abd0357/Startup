const Up = document.getElementById("Up");
const iconOpen = document.querySelector(".icon-menu");
const menuOpen = document.querySelector(".menu");
let removHidden = document.querySelector("#logo-nav");
//Form
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("massege");
//
// Up Button
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    Up.style.opacity = "1";
    Up.style.pointerEvents = "auto";
  } else {
    Up.style.opacity = "0";
    Up.style.pointerEvents = "none";
  }
});
Up.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// Menu
iconOpen.addEventListener("click", function () {
  iconOpen.classList.toggle("open");
  menuOpen.classList.toggle("open");
  removHidden.classList.toggle("open");
});
//Form
contactForm.addEventListener("submit", function (e) {
  // [1]
  e.preventDefault();
  //[2]
  clearErrors();
  //[3]
  let isValid = true;
  // [4] check name input and email input and message input
  if (nameInput.value.trim() === "") {
    showError(nameInput, "Name is required.");
    isValid = false;
  } else if (nameInput.value.trim().length < 3) {
    showError(nameInput, "Name must be at least 3 characters.");
    isValid = false;
  } else {
    markValid(nameInput);
  }

  if (emailInput.value.trim() === "") {
    showError(emailInput, "Email is required.");
    isValid = false;
  } else if (!validateEmail(emailInput.value.trim())) {
    showError(emailInput, "Please enter a valid email address.");
    isValid = false;
  } else {
    markValid(emailInput);
  }

  if (messageInput.value.trim() === "") {
    showError(messageInput, "Message is required.");
    isValid = false;
  } else if (messageInput.value.trim().length < 10) {
    showError(messageInput, "Message must be at least 10 characters.");
    isValid = false;
  } else {
    markValid(messageInput);
  }

  if (isValid) {
    alert("Form submitted successfully!");
    contactForm.reset();
    clearErrors();
  }
});

function showError(input, message) {
  const errorMessage = document.createElement("div");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = message;
  input.classList.add("error");
  input.parentElement.insertBefore(errorMessage, input.nextSibling);
}

function markValid(input) {
  input.classList.remove("error");
  input.classList.add("valid");
}

function clearErrors() {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((message) => message.remove());

  const inputs = document.querySelectorAll(".error, .valid");
  inputs.forEach((input) => {
    input.classList.remove("error");
    input.classList.remove("valid");
  });
}
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
