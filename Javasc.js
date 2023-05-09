var button = document.createElement("button");
button.innerHTML = "Clique aqui";
button.onclick = function () {
  alert("Olá, mundo!");
};
document.body.appendChild(button);
