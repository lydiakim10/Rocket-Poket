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

function renderHaveCard(card) { 
    for (var i = 0; i < localStorage.length; i++) {
        console.log(localStorage.getItem('haveButton0'))
        var pokemonEl = document.createElement('collected');
        pokemonEl.classList.add('pokemon');
        const haveButton = card.data[i].images.small
        console.log(haveButton[i]);

        // displays have  cards
        var pokeInnerHTML = renderCard;

        // console.log(localStorage.key(1))
        // console.log(localStorage.length)
        
        // collections
        console.log('here i am')
        console.log(localStorage.getItem('haveButton0'))
        $('.collected').val(localStorage.getItem('haveButton0'));
        $('.collected').val(localStorage.getItem('haveButton1'));

        console.log(pokeInnerHTML);
        pokemonEl.innerHTML = `<img src=${haveButton[i]}>`;
        console.log(pokemonEl);
        leftsideEl.appendChild(pokemonEl);
        
    }
}

function renderCard(card) { 
    for (var i = 0; i < localStorage.length; i++) {
        console.log(Object.keys(localStorage))
        console.log(localStorage[i])
        console.log('localStorage.getItem')
        console.log(localStorage.getItem('wantButton0'))
        var pokemonEl = document.createElement('div');
        pokemonEl.classList.add('pokemon');
        const wantButton = card.data[i].images.small
        console.log(wantButton[i]);

        // display want cards
        // var pokeInnerHTML = renderCard;

        var k = Object.keys(localStorage)[i];
        
        // wishlist
        $('.wishlist').val(localStorage.getItem(localStorage.getItem(k)));
        

        console.log(i) 
        pokemonEl.innerHTML = `<img src=${localStorage.getItem(k)}>`;

        // console.log(pokeInnerHTML);
        console.log(pokemonEl);
        if (k.includes('want')) {
            rightsideEl.appendChild(pokemonEl);
        }
        else {leftsideEl.appendChild(pokemonEl)}
    }
}

// findGame();

// function renderGame(game){
//     for (var i = 0; i < 39; i++) {
//         var pokemonEl = document.createElement('row');
//         pokemonEl.classList.add('videogame');
//         const urlImage = videogame.data[i].images.small
//         console.log(urlImage);

//         var pokeInnerHTML = renderGame;
//  
//        $('.collected').val(localStorage.getItem('collected'));
//        $('.wishlist').val(localStorage.getItem('wishlist'));
//     }   
// }