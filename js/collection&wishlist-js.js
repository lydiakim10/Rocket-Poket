var leftsideEl = document.getElementById('leftside');
var rightsideEl = document.getElementById('rightside');
var url = `https://api.pokemontcg.io/v2/cards?pageSize=50`;

var findCard = async id => {
    
    var response = await fetch(url);
    var card = await response.json();
    console.log(card);
    console.log(localStorage.length)
    renderCard(card);
}

findCard();

// function to render card image
function renderCard(card) { 
    for (var i = 0; i < localStorage.length; i++) {
        console.log(Object.keys(localStorage))
        console.log(localStorage[i])
        console.log('localStorage.getItem')
        console.log(localStorage.getItem('wantButton0'))
        var pokemonEl = document.createElement('div');
        pokemonEl.classList.add('pokemon', 'gameImage');
        const wantButton = card.data[i].images.small
        console.log(wantButton[i]);

        // k represents the keys that are stored in local storage
        var k = Object.keys(localStorage)[i];
        
        // store K into wishlist 
        $('.wishlist').val(localStorage.getItem(localStorage.getItem(k)));
        

        console.log(i) 
        pokemonEl.innerHTML = `<img src=${localStorage.getItem(k)}>`;

        // if k includes want, we store them onto the rightside()
        console.log(pokemonEl);
        if (k.includes('want')) {
            rightsideEl.appendChild(pokemonEl);
        }
        else {leftsideEl.appendChild(pokemonEl)}
    }
}