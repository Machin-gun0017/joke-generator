const jokeElement = document.getElementById("joke");
const newJokeButton = document.getElementById("newJokeBtn");

async function fetchJoke() {
  try {
    jokeElement.textContent = "Loading a joke...";
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Any?type=single&blacklistFlags=nsfw,religious,political,rude,sexist"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch joke");
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(data.message || "Something went wrong");
    }

    jokeElement.textContent = data.joke;
  } catch (error) {
    jokeElement.textContent = "Sorry, I couldn't load a joke right now.";
    console.error(error);
  }
}

newJokeButton.addEventListener("click", fetchJoke);

fetchJoke();