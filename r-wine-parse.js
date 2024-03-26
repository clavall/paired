// Fetch JSON data
fetch('r-wine-pairings.json')
  .then(response => response.json())
  .then(data => {
    const redWines = data['red-wines'];
    const pairingsGrid = document.getElementById('redPairingsGrid');

    // Loop through the pairings and create HTML elements
    redWines.forEach(pairing => {
      const grapeVariety = pairing.grapeVariety;
      const foods = pairing.foods;

      // Create a div element for each pairing
      const pairingDiv = document.createElement('div');
      pairingDiv.classList.add('pairing');

      // Create a div element for the card
      const card = document.createElement('div');
      card.classList.add('card');

      // Create a div element for the front side of the card
      const front = document.createElement('div');
      front.classList.add('front');
      front.textContent = grapeVariety;

      // Create a div element for the back side of the card
      const back = document.createElement('div');
      back.classList.add('back');
      back.textContent = foods.join(', ');

      // Append the front and back sides to the card
      card.appendChild(front);
      card.appendChild(back);

      // Append the card to the pairing div
      pairingDiv.appendChild(card);

      // Append the pairing div to the grid container
      pairingsGrid.appendChild(pairingDiv);
    });
  })
  .catch(error => {
    console.error('Error fetching JSON data:', error);
  });