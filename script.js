var button = document.createElement("button");
button.innerHTML = "Clique aqui";
button.onclick = function () {
  alert("Olá, mundo!");
};
document.body.appendChild(button);

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("open");
});
<script>
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })
</script>

