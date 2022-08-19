var containerEl = document.getElementById('container');
var url = `https://api.pokemontcg.io/v2/cards?pageSize=50`;


// fetch method using "async" and "await"
var findCard = async id => {
    
    var response = await fetch(url);
    var card = await response.json();
    // console.log(card);
    renderCard(card);
}

findCard();

function renderCard(card) {
    
    for (var i = 0; i < 50; i++) {
        var pokemonEl = document.createElement('div');
        pokemonEl.classList.add('pokemonCard');
        const urlImage = card.data[i].images.small
<<<<<<< HEAD
        // console.log(urlImage);
       
        var pokeInnerHTML = `
            <div class="cardBox">
                <div class="pokeImage"><img src=${urlImage}></div>
                <button class="collected btn">Have</button>
                <button class="wishlist btn">Want</button>
            </div>    
=======
        console.log(urlImage);
       
        var pokeInnerHTML = `
            <div class="pokeImage"><img src=${urlImage}/></div>
            <button class="collected btn" id="haveButton${i}">Have</button>
            <button class="wishlist btn" id="wantButton${i}">Want</button>
>>>>>>> 560b4a9c6a89d2383be1503d8df71b7b8975bfc8
        `;
        // console.log(pokeInnerHTML);
        pokemonEl.innerHTML = pokeInnerHTML;
        // console.log(pokemonEl);
        containerEl.appendChild(pokemonEl);
<<<<<<< HEAD
=======
        console.log(containerEl)
>>>>>>> 560b4a9c6a89d2383be1503d8df71b7b8975bfc8
    }
}


<<<<<<< HEAD

var HaveBtnEl = $('.collected');

$(document).on('click', HaveBtnEl, function(event) {
    // event.preventDefault();

    var imgEl = $(this).siblings('src').val();
    console.log(imgEl);
    localStorage.setItem('Have', JSON.stringify(imgEl));    
})


=======
var HaveBtnEl = $('.collected');

$(document).on('click', HaveBtnEl, function(event) {
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

var CollectedBtnEl = $(".wishlist");

$(document).on('click', CollectedBtnEl, function(event) {
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
>>>>>>> 560b4a9c6a89d2383be1503d8df71b7b8975bfc8
