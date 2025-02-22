// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    480: { slidesPerView: 1 },
  },
});

function downloadCV() {
  const link = document.createElement("a");
  link.href = "/Muhammad_Ruhunul_Luthfi_certificed-1.png";
  link.download = "CV_Anda.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function viewTranscript() {
  window.open("transcript.pdf", "_blank");
}

function printTranscript() {
  var transcriptWindow = window.open("transcript.pdf", "_blank");
  transcriptWindow.onload = function () {
    transcriptWindow.print();
  };
}

const _0x4f8d = ["NjI4MTI4NjAzODEyMw=="];

const getWhatsAppNumber = () => {
  try {
    return atob(_0x4f8d[0]);
  } catch {
    return "";
  }
};

const inputs = document.querySelectorAll("input, textarea");
inputs.forEach((input) => {
  input.addEventListener("input", function () {
    validateField(this);
  });

  input.addEventListener("blur", function () {
    validateField(this);
  });
});

function validateField(field) {
  const errorElement = document.getElementById(`${field.id}Error`);

  field.classList.remove("is-invalid", "is-valid");
  errorElement.style.display = "none";

  let isValid = true;
  if (field.value.trim() === "") {
    isValid = false;
  } else {
    switch (field.id) {
      case "name":
        isValid = /^[A-Za-z\s]{3,50}$/.test(field.value);
        break;
      case "phone":
        isValid = /^[0-9]{10,15}$/.test(field.value);
        break;
      case "email":
        isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(field.value);
        break;
      case "message":
        isValid = field.value.length >= 10;
        break;
    }
  }

  if (!isValid) {
    field.classList.add("is-invalid");
    errorElement.style.display = "block";
  } else {
    field.classList.add("is-valid");
  }

  return isValid;
}

function validateAndSend() {
  let isValid = true;
  const fields = ["name", "phone", "email", "message"];

  fields.forEach((field) => {
    const input = document.getElementById(field);
    const error = document.getElementById(field + "Error");
    if (!validateField(input)) {
      isValid = false;
    }
  });

  if (isValid) {
    sendToWhatsApp();
  }
}

function sendToWhatsApp() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const formattedMessage = `Name: ${name}%0A` + `Phone: ${phone}%0A` + `Email: ${email}%0A` + `Message: ${message}`;

  const whatsappNumber = getWhatsAppNumber();

  if (!whatsappNumber) {
    alert("Sorry, there was an error. Please try again later.");
    return;
  }

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${formattedMessage}`;
  window.open(whatsappUrl, "_blank");
}
