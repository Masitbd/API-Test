function kanye() {
  fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((data) => display(data));
}

function display(data) {
  const quote = document.getElementById("quote");
  const p = document.createElement("p");
  console.log(data);
  p.innerText = `${data.quote}`;
  quote.appendChild(p);
  //p.innerText = "";
}

document.getElementById("new-code").addEventListener("click", () => {
  location.reload();
});
kanye();
