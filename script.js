const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click',fetchRandomJoke)

async function fetchRandomJoke() {
    const url = `https://v2.jokeapi.dev/joke/Programming`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();

      // Print joke based on type
      if (data.type === 'single') {
        jokeEl.innerHTML = data.joke; //single joke
      } else if (data.type === 'twopart') {
        jokeEl.innerHTML = `${data.setup} - ${data.delivery}` // Two-part joke
      }
    } catch (error) {
      console.error('Failed to fetch the joke:', error);
    }
  }
  
  // Call the function
  fetchRandomJoke();
  