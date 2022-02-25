const loadMeal = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then((response) => response.json())
    .then((data) => displayMeal(data.meals))
    .catch((err) => {
      console.log(err);
    });
};

loadMeal();

const displayMeal = (items) => {
  for (const item of items) {
    console.log(item);
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
