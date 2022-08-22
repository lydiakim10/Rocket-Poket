var leftsideEl = document.getElementById('leftside');
var rightsideEl = document.getElementById('rightside');
var url = `https://api.pokemontcg.io/v2/cards?pageSize=50`;

var findCard = async id => {
    
    var response = await fetch(url);
    var card = await response.json();
    renderCard(card);
}

findCard();

// function to render card image
function renderCard(card) { 
    for (var i = 0; i < localStorage.length; i++) {
        var pokemonEl = document.createElement('div');
        pokemonEl.classList.add('pokemon', 'gameImage');
        const wantButton = card.data[i].images.small

        // k represents the keys that are stored in local storage
        var k = Object.keys(localStorage)[i];
        
        // store K into wishlist 
        $('.wishlist').val(localStorage.getItem(localStorage.getItem(k)));
        

        pokemonEl.innerHTML = `<img src=${localStorage.getItem(k)}>`;

        // if k includes want, we store them onto the rightside()
        if (k.includes('want')) {
            rightsideEl.appendChild(pokemonEl);
        }
        else {leftsideEl.appendChild(pokemonEl)}
    }
}