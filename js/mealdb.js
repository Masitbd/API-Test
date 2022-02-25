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
  }
};
