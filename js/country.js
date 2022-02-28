const loadAllCountrues = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");

  const data = await response.json();
  showCountry(data);
};

const showCountry = (countries) => {
  document.getElementById("country-container").textContent = "";
  for (const country of countries) {
    const countryContainer = document.getElementById("country-container");
    const div = document.createElement("div");
    div.innerHTML = `
    <img width=300 src=${country.flags.png} alt=''  />
    <p>Name: ${country.name.common}</p>
    <p>Capital: ${country.capital}</p>
    `;
    countryContainer.appendChild(div);
  }
  toggleSpinner("none");
};

document.getElementById("seaech-btn").addEventListener("click", async () => {
  toggleSpinner("flex");
  const searchText = findText();
  if (searchText != "") {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${searchText}`
    );
    const data = await response.json();
    showCountry(data);
  } else {
    alert("No country name found");
  }
  toggleSpinner("none");
});

const findText = () => {
  const inputText = document.getElementById("find-text").value;
  document.getElementById("find-text").value = "";
  return inputText;
};

const toggleSpinner = (displayStyle) => {
  document.getElementById("loader").style.display = displayStyle;
};

loadAllCountrues();
