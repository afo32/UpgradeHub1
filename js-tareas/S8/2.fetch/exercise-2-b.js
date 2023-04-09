const baseUrl = "https://api.nationalize.io?name=";

const button = document.getElementById("button");
button.addEventListener("click", handleClick);

function handleClick() {
  const input = document.getElementById("input");
  const results = document.getElementById("results");
  const name = input.value;
  const url = baseUrl + name;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const probabilities = data.country.map(
        (country) => `${country.country_id} (${(country.probability * 100).toFixed(2)}%)`
      );
      const message = `El nombre ${name} tiene un ${probabilities.join(" y un ")} de ser de ${probabilities.length > 1 ? "estos países" : "este país"}.`;
      const p = document.createElement("p");
      p.innerHTML = message;
      results.appendChild(p);
    })
    .catch((error) => console.error(error));
}