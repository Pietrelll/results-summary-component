fetch("./data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("There was a problem fetching data");
    }
    return response.json();
  })
  .then((jsonData) => {
    const scoreList = document.querySelector(".score-list");
    function processObjects(objects, scoreList) {
      // Loop through each object in the array
      for (const obj of objects) {
        // Access the properties of the current object
        const category = obj.category;
        const score = obj.score;
        const icon = obj.icon;
        const liBackground = obj.background;
        const color = obj.color;
        const scoreP = document.createElement("p");
        scoreP.innerHTML = score;

        const maxScore = document.createElement("p");
        maxScore.innerHTML = "/ 100";
        maxScore.classList.add("max-score");

        const iconElement = document.createElement("img");
        iconElement.src = icon;
        iconElement.alt = "";
        iconElement.classList.add("icon");

        const liElement = document.createElement("li");

        const iconCategory = document.createElement("div");
        iconCategory.style.display = "inherit";

        const scoreWrapper = document.createElement("div");
        scoreWrapper.classList.add("score");
        // scoreWrapper.style.display = "inherit";/

        const categoryText = document.createElement("p");
        categoryText.classList.add("category");
        categoryText.innerHTML = category;
        categoryText.style.color = color;

        const scoreText = document.createElement("p");
        scoreText.classList.add("score-list__item__score");
        scoreText.innerHTML = score;

        iconCategory.appendChild(iconElement);
        iconCategory.appendChild(categoryText);

        scoreWrapper.appendChild(scoreP);
        scoreWrapper.appendChild(maxScore);

        liElement.style.backgroundColor = liBackground;
        liElement.appendChild(iconCategory);
        liElement.appendChild(scoreWrapper);
        // append everything to a list
        scoreList.appendChild(liElement);
      }
    }
    processObjects(jsonData, scoreList);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
