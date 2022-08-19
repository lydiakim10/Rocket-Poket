var containerEl = document.getElementById('container');
var url = `https://api.pokemontcg.io/v2/cards?pageSize=50`;


// var getCard = async () => {
//     for (var i = 1; i <= 50; i++) {
//         await findCard(i);
//     }
// }

// fetch method using "async" and "await"
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
            <button class="wishlist btn" id"wantButton${i}">Want</button>
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
    console.log(event)
    var imgEl = event.target.id
    var cardImage = document.getElementById(imgEl);
    console.log(cardImage);
    var cardEl = cardImage.parentNode.children[0].children[0].getAttribute("src")
    console.log(cardEl)
    // var imgEl = $(this).siblings('.pokeImage img');
    // var imgEl = (this.querySelector(".pokeImage img"));
    console.log(imgEl)
    // var imgEl = document.getElementsByClassName("pokeImage");
    localStorage.setItem(imgEl, JSON.stringify(cardEl));    
})
