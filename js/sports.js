const loadAll = () => {
  fetch("https://www.thesportsdb.com/api/v1/json/2/all_sports.php")
    .then((response) => response.json())
    .then((data) => showAll(data.sports));
};

const showAll = (records) => {
  for (const sport of records) {
    console.log(sport);
    const sportContainer = document.getElementById("sport-container");
    const div = document.createElement("div");
    div.innerHTML = `
    <img class="h-64 w-64 my-2 mx-auto"  src=${sport.strSportThumb} alt="">
    <h3 class="mx-3 ">${sport.strSport}</h3>
    <p class="mx-3 mb-3">${sport.strSportDescription.slice(0, 200)}...</p>
    `;

    sportContainer.appendChild(div);
  }
};

loadAll();
