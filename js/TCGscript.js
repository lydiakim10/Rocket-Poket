var containerEl = document.getElementById('container');
var url = `https://api.pokemontcg.io/v2/cards?pageSize=50`;

var findCard = async id => {
    
    var response = await fetch(url);
    var card = await response.json();
    renderCard(card);
}
findCard();
function renderCard(card) {
    
    for (var i = 0; i < 50; i++) {
        var pokemonEl = document.createElement('div');
        pokemonEl.classList.add('pokemonCard');
        const urlImage = card.data[i].images.small
       
        var pokeInnerHTML = `
            <div class="pokeImage"><img src=${urlImage}/></div>
            <button class="collected btn" id="haveButton${i}">Have</button>
            <button class="wishlist btn" id="wantButton${i}">Want</button>
        `;
        pokemonEl.innerHTML = pokeInnerHTML;
        containerEl.appendChild(pokemonEl);
    }
}
var HaveBtnEl = $('.collected');

$(document).on('click', HaveBtnEl, function(event) {
    var imgEl = event.target.id
    var cardImage = document.getElementById(imgEl);
    var cardEl = cardImage.parentNode.children[0].children[0].getAttribute("src")
    localStorage.setItem(imgEl, JSON.stringify(cardEl));    
    }    
)

var CollectedBtnEl = $(".wishlist");

$(document).on('click', CollectedBtnEl, function(event) {
    var imgEl = event.target.id
    var cardImage = document.getElementById(imgEl);
    var cardEl = cardImage.parentNode.children[0].children[0].getAttribute("src")
    localStorage.setItem(imgEl, JSON.stringify(cardEl));  
    }  
)