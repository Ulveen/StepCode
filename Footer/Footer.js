document.addEventListener("DOMContentLoaded", function() {
  fetch("../Footer/Footer.html")
    .then(response => response.text())
    .then(data => {
      const footerElement = document.createElement("div");
      footerElement.innerHTML = data;
      document.body.appendChild(footerElement);
      document.dispatchEvent(new Event("footerLoaded"));
    });
});