var containerEl = document.getElementById('container');

var capturePokemon = async () => {
    for (var i = 1; i <= 150; i++) {
        await findPokemon(i);
    }
}

// fetch method using "async" and "await"
var findPokemon = async id => {
    var url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    var response = await fetch(url);
    var pokemon = await response.json();
    console.log(pokemon);
    renderPokemon(pokemon);
}

capturePokemon();

function renderPokemon(pokemon) {
    var pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const name =  pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    var pokeInnerHTML = `
        <div class="pokeImage"><img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png'></div>
        ${name}
    `;

    pokemonEl.innerHTML = pokeInnerHTML;

    containerEl.appendChild(pokemonEl);
}

