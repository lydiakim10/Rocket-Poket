function getGame(){
  fetch('https://pokeapi.co/api/v2/version/?limit=40')
  .then(function (response) {
    return response.json();
  })
   .then(function(data){
   data.results.forEach(function(version){
     fetchPokemonData(version);
   })
  })
}
getGame();
function fetchPokemonData(version){
var url = version.url
  fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function(pokeData){
    renderPokemon(pokeData)
    console.log(pokeData)
  })

}
function renderPokemon(pokeData){
  var pokeDataName = pokeData.name
  console.log(pokeDataName)
  var allPokemonContainer = document.getElementById('poke-container');
  var pokeContainer = document.createElement("div")
  // var gameLink = document.createElement('a')
  // gameLink.classList.add('gameLink')
  pokeContainer.classList.add('game')
  var cardContainer = document.createElement('div')
  cardContainer.classList.add('game-card', 'card')
  //  gamesImage(pokeContainer);

  // gameLink.href = '#'

  const images = {
    red: './images/0_Pokemon_Red.webp',
    blue: './images/1_Pokemon_Blue.webp',
    yellow: './images/2_Pokemon_Yellow.webp',
    gold: './images/3_Pokemon_Gold.webp',
    silver: '/images/4_Pokemon_Silver.webp',
    crystal: './images/5_Pokemon_Crystal.webp',
    ruby: './images/6_Pokemon_Ruby.webp',
    sapphire: './images/7_Pokemon_Sapphire.webp',
    emerald: './images/8_Pokemon_Emerald.webp',
    firered: './images/9_Pokemon_FireRed_.webp',
    leafgreen: './images/10_Pokemon_LeafGreen.webp',
    diamond: './images/11_Pokemon_Diamond.webp',
    pearl: './images/12_Pokemon_Pearl.webp',
    platinum: './images/13_Pokemon_Platinum.webp',
    heartgold: './images/14_Pokemon_HeartGold.webp',
    soulsilver: './images/15_Pokemon_SoulSilver.webp',
    black: './images/16_Pokemon_Black.webp',
    white: './images/17_Pokemon_White.jpg',
    colosseum: './images/18_Pokemon_Colosseum.webp',
    xd: './images/19_Pokemon_XD_Gale_of_Darkness.webp',
    'black-2': './images/20_Pokemon_Black_2.webp',
    'white-2': './images/21_Pokemon_White_2.webp',
    x: './images/22_Pokemon_X.webp',
    y:'./images/23_Pokemon_Y.webp',
    'omega-ruby': './images/24_Pokemon_Omega_Ruby.jpg',
    'alpha-sapphire': './images/25_Pokemon_Alpha_Sapphire.jpg',
    sun: './images/26_Pokemon_Sun.webp',
    moon: './images/27_Pokemon_Moon.webp',
    'ultra-sun': './images/28_Pokemon_Ultra_Sun.webp',
    'ultra-moon': './images/29_Pokemon_Ultra_Moon.webp',
    'lets-go-pikachu': './images/30_Pokemon_Lets_Go_Pikachu.webp',
    'lets-go-eevee': './images/31_Pokemon_Lets_Go_Eevee.jpg',
    sword: './images/32_Pokemon_Sword.webp',
    shield: './images/33_Pokemon_Shield.webp',
    'the-isle-of-armor': './images/34_Pokemon_The_Isle_Of_Armor.webp',
    'the-crown-tundra': './images/35_Pokemon_The_Crown_Tundra.webp',
    'brilliant-diamond': './images/36_Pokemon_Brilliant_Diamond.webp',
    'shining-pearl': './images/37_Pokemon_Shining_Pearl.webp',
    'legends-arceus': './images/38_Pokemon_Legends_Arceus.webp',
  }
  var createImg = document.createElement('img')
  createImg.setAttribute('src', images[pokeDataName])
  createImg.classList.add('gameImage')
  pokeContainer.append(createImg)

  var pokeName = document.createElement('h4')
  pokeName.innerText = pokeDataName

  const hyphenRemove = pokeDataName.replace(/-/g, ' ');
  pokeName.innerText = hyphenRemove

  pokeName.classList.add('gameTitle')

  var i = 0;
$('.game').each(function() {
  var customID = 'game' + String(i)
  $(this).attr('id', customID)
  i++;
  // console.log(this)
});
 
  pokeContainer.append(pokeName);
  // gameLink.append(pokeContainer)
  cardContainer.append(pokeContainer)   
  allPokemonContainer.appendChild(cardContainer);

  var buttonDiv = document.createElement('div')

  var haveBtn = document.createElement('button')
  haveBtn.classList.add('have', 'btn')
  haveBtn.innerText = 'Have'
  var wantBtn = document.createElement('button')
  wantBtn.classList.add('want', 'btn')
  wantBtn.innerText = 'Want'

  buttonDiv.append(haveBtn);
  buttonDiv.append(wantBtn);
  cardContainer.append(buttonDiv);
}

// var HaveBtnEl = $('.have');

// $(document).on('click', HaveBtnEl, function(event) {
//     console.log(event)
//     var imgEl = event.target.id
//     var cardImage = document.getElementById(imgEl);
//     console.log(cardImage);
//     var cardEl = cardImage.parentNode.children[0].children[0].getAttribute("src")
//     console.log(cardEl)
//     console.log(imgEl)
//     localStorage.setItem(imgEl, JSON.stringify(cardEl));    
//     localStorage.setItem(imgEl, JSON.stringify(cardEl));
//     }    
// )

// var CollectedBtnEl = $(".wishlist");

// $(document).on('click', CollectedBtnEl, function(event) {
//     console.log(event)
//     var imgEl = event.target.id
//     var cardImage = document.getElementById(imgEl);
//     console.log(cardImage);
//     var cardEl = cardImage.parentNode.children[0].children[0].getAttribute("src")
//     console.log(cardEl)
//     console.log(imgEl)
//     localStorage.setItem(imgEl, JSON.stringify(cardEl));  
//     }  
// )


  // var haveBtn = $('.have');

  // $(document).on('click', haveBtn, function(event) {
  //   if (e.target.matches('a')) {
  //      event.preventDefault();
  //   }
  //   var cardEl = $(this).siblings('div').val();
  //   console.log(cardEl);
  //   localStorage.setItem('Have', JSON.stringify(cardEl));
  // })