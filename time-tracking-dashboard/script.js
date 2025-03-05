/* default filter on page load */
document.addEventListener("DOMContentLoaded", () => filter("weekly"));

function filter(chosenFilter) {
  /* add or remove the active effect on the filter options menu */
  const filterOptions = document.getElementById("filters").children;

  for (let optionElem of filterOptions) {
    if (optionElem.id === chosenFilter) {
      optionElem.classList.add("active-filter");
    } else {
      optionElem.classList.remove("active-filter");
    }
  }
  /* ---------------------------------------------------------------- */

  /* populate HTML with data from json based on filter chosen */
  fetch("data.json")
    .then((response) => response.json())
    .then((values) =>
      values.forEach((value) => {
        const title = value.title.toLowerCase();
        const { current, previous } = value.timeframes[chosenFilter];
        const parentElem = document.getElementById(title);

        parentElem.firstChild.textContent = `${current}hrs`;

        let previousHours = "";
        switch (chosenFilter) {
          case "daily":
            previousHours = `Yesterday - ${previous}hrs`;
            break;
          case "weekly":
            previousHours = `Last Week - ${previous}hrs`;
            break;
          case "monthly":
            previousHours = `Last Month - ${previous}hrs`;
            break;
        }
        parentElem.lastChild.textContent = previousHours;
      })
    );
  /* ---------------------------------------------------------------- */
}
