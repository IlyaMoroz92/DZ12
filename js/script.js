class Pokemons {
    constructor (pokeHealth, pokeImg, pokeName, pokeFood, pokeClean, pokePlay ) {
        this.pokeHealth = pokeHealth;
        this.pokeImg = pokeImg;
        this.pokeName = pokeName;
        this.pokeFood = pokeFood;
        this.pokeClean = pokeClean;
        this.pokePlay = pokePlay;
    } 
}


function addPokemon () {
    let i = arr[(Math.floor(Math.random(0, arr.length)*(arr.length-1)))];
    console.log(i.pokeImg)
/*     let a=prompt('Имя покемона', '')
    if (a>'') { */
    let body = document.querySelector('body');
    let divPokemon = document.createElement('div');
    let divHealth = document.createElement('div');
    let spanHealth = document.createElement('span');
    let divImg = document.createElement('div');
    let img = document.createElement('img');
    let divName = document.createElement('div');
    let spanName = document.createElement('span');
    let divButtons = document.createElement('div');
    let divFood = document.createElement('div');
    let btnFood = document.createElement('button');
    let divClean = document.createElement('div');
    let btnClean = document.createElement('button');
    let divPlay = document.createElement('div');
    let btnPlay = document.createElement('button');
    let divMain = document.createElement('div');

    spanName.innerText= i.pokeName.toUpperCase();
    img.src= i.pokeImg;
    btnFood.innerText= 'FOOD';
    btnClean.innerText= 'CLEAN';
    btnPlay.innerText= 'PLAY';
    spanHealth.innerText= 'HEALTH ' + i.pokeHealth;
    divHealth.appendChild(spanHealth);
    divImg.appendChild(img);
    divName.appendChild(spanName);
    divFood.appendChild(btnFood);
    divClean.appendChild(btnClean);
    divPlay.appendChild(btnPlay);
    divButtons.className = 'buttons';
    divButtons.appendChild(divFood);
    divButtons.appendChild(divClean);
    divButtons.appendChild(divPlay);
    divPokemon.className = 'pokemon';
    divMain.className = 'divmain';
    divPokemon.appendChild(divName);
    divPokemon.appendChild(divImg);
    divPokemon.appendChild(divHealth);
    divPokemon.appendChild(divButtons);
    divMain.appendChild(divPokemon);
    body.appendChild(divMain);
/*     } else {
        alert('Введите имя своего покемона');
    }  */
}







