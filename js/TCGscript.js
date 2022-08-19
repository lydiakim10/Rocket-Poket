var containerEl = document.getElementById('container');
var url = `https://api.pokemontcg.io/v2/cards?pageSize=50`;

var findCard = async id => {
    
    var response = await fetch(url);
    var card = await response.json();
    console.log(card);
    renderCard(card);
}
findCard();
function renderCard(card) {
    
    for (var i = 0; i < 50; i++) {
        var pokemonEl = document.createElement('div');
        pokemonEl.classList.add('pokemonCard');
        const urlImage = card.data[i].images.small
        console.log(urlImage);
       
        var pokeInnerHTML = `
            <div class="pokeImage"><img src=${urlImage}/></div>
            <button class="collected btn" id="haveButton${i}">Have</button>
            <button class="wishlist btn" id="wantButton${i}">Want</button>
        `;
        console.log(pokeInnerHTML);
        pokemonEl.innerHTML = pokeInnerHTML;
        console.log(pokemonEl);
        containerEl.appendChild(pokemonEl);
        console.log(containerEl)
    }
}
var HaveBtnEl = $('.collected');

$(document).on('click', HaveBtnEl, function(event) {
    // event.preventDefault();
    if (event.target.matches('a')) {
        event.preventDefault();
    } else {
    console.log(event)
    var imgEl = event.target.id
    var cardImage = document.getElementById(imgEl);
    console.log(cardImage);
    var cardEl = cardImage.parentNode.children[0].children[0].getAttribute("src")
    console.log(cardEl)
    console.log(imgEl)
    localStorage.setItem(imgEl, JSON.stringify(cardEl));    
    localStorage.setItem(imgEl, JSON.stringify(cardEl));
    }    
})

var CollectedBtnEl = $(".wishlist");

$(document).on('click', CollectedBtnEl, function(event) {
    // event.preventDefault();
    if (event.target.matches('a')) {
        event.preventDefault();
    } else {
    console.log(event)
    var imgEl = event.target.id
    var cardImage = document.getElementById(imgEl);
    console.log(cardImage);
    var cardEl = cardImage.parentNode.children[0].children[0].getAttribute("src")
    console.log(cardEl)
    console.log(imgEl)
    localStorage.setItem(imgEl, JSON.stringify(cardEl));  
    }  
})
