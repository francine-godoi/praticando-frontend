function filter(event) {
  const filterOptions = ["daily", "weekly", "monthly"];
  const elemId = event.target.id;

  filterOptions.forEach((value) => {
    if (value === elemId) {
      document.getElementById(value).classList.add("active-filter");
    } else {
      document.getElementById(value).classList.remove("active-filter");
    }
  });

  fetch("data.json")
    .then((response) => response.json())
    .then((values) =>
      values.forEach((value) => {
        const title = value.title;
        const { current, previous } = value.timeframes[elemId];
        const parentElem = document.getElementById(title.toLowerCase());

        parentElem.children[0].textContent = `${current}hrs`;

        switch (elemId) {
          case "daily":
            parentElem.children[1].textContent = `Yesterday - ${previous}hrs`;
            break;
          case "weekly":
            parentElem.children[1].textContent = `Last Week - ${previous}hrs`;
            break;
          case "monthly":
            parentElem.children[1].textContent = `Last Month - ${previous}hrs`;
            break;
        }
      })
    );
}
