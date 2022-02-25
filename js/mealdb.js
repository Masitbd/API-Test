const loadMeal = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then((response) => response.json())
    .then((data) => displayMeal(data.meals))
    .catch((err) => {
      console.log(err);
    });
};

const displayMeal = (items) => {
  document.getElementById("meal-container").textContent = "";
  for (const item of items) {
    const mealContainer = document.getElementById("meal-container");
    const div = document.createElement("div");
    div.setAttribute("class", "mx-auto");
    div.setAttribute("id", "bgColor");

    div.innerHTML = `
    <img class="h-64 w-64 my-2 mx-auto"  src=${item.strMealThumb} alt="">
    <h3 class="mx-3 ">${item.strMeal}</h3>
    <p class="mx-3 mb-3">${item.strInstructions.slice(0, 100)}...</p>
    `;

    mealContainer.appendChild(div);
  }
};

const loadMealByName = async () => {
  const searchText = findText();
  if (searchText != "") {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    const response = await fetch(url);
    const data = await response.json();
    displayMeal(data.meals);
  } else {
    document.getElementById("meal-container").textContent = "";
  }
};

const findText = () => {
  const inputText = document.getElementById("search-text").value;
  document.getElementById("search-text").value = "";
  return inputText;
};
loadMeal();
