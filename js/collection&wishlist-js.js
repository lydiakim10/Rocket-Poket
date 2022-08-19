var rowEl = document.getElementById('row');
var url = `https://api.pokemontcg.io/v2/cards?pageSize=50`;

var findCard = async id => {
    
    var response = await fetch(url);
    var card = await response.json();
    console.log(card);
    renderCard(card);
}

findCard();

function renderCard(card){ 
    for (var i = 0; i < 50; i++) {
        var pokemonEl = document.createElement('row');
        pokemonEl.classList.add('pokemon');
        const urlImage = card.data[i].images.small
        console.log(urlImage);

        // displays have & want cards
        var pokeInnerHTML = renderCard;

        $('.collected').val(localStorage.getItem('collected'));
        $('wishlist').val(localStoarage.getItem('wishlist'));
    
        console.log(pokeInnerHTML);
        pokemonEl.innerHTML = pokeInnerHTML;
        console.log(pokemonEl);
        console.log(rowEl)
        rowEl.appendChild(pokemonEl);
    }
}

// findGame();

// function renderGame(game){
//     for (var i = 0; i < 39; i++) {
//         var pokemonEl = document.createElement('row');
//         pokemonEl.classList.add('videogame');
//         const urlImage = videogame.data[i].images.small
//         console.log(urlImage);

//         var pokeInnerHTML = `
//        `; 
//     }   
// }