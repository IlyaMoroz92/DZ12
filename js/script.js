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
    document.querySelector('audio').play()
    const i = arr[(Math.floor(Math.random()*(arr.length)))];
    const body = document.querySelector('body');
    const divPokemon = document.createElement('div');
    const divImg = document.createElement('div');
    const img = document.createElement('img');
    const divName = document.createElement('div');
    const spanName = document.createElement('span');
    const divButtons = document.createElement('div');
    const divFood = document.createElement('div');
    const btnFood = document.createElement('button');
    const divClean = document.createElement('div');
    const btnClean = document.createElement('button');
    const divPlay = document.createElement('div');
    const btnPlay = document.createElement('button');
    const divMain = document.createElement('div');
    const prHealth = document.createElement('progress');
    const prFood = document.createElement('progress');
    const prClean = document.createElement('progress');
    const prPlay = document.createElement('progress');
    const divLevels = document.createElement('div');
    const divHealthLevel = document.createElement('div');
    const divFoodLevel = document.createElement('div');
    const divCleanLevel = document.createElement('div');
    const divPlayLevel = document.createElement('div');
    prHealth.max = i.pokeHealth;
    prFood.max = i.pokeFood;
    prClean.max = i.pokeClean;
    prPlay.max = i.pokePlay;
    prHealth.value = i.pokeHealth;
    prFood.value = i.pokeFood;
    prClean.value = i.pokeClean;
    prPlay.value = i.pokePlay;
    

    divCleanLevel.className = 'cleanLevel'
    divPlayLevel.className = 'playLevel'
    divFoodLevel.className = 'foodLevel'
    divHealthLevel.className = 'healthLevel'
    divLevels.className = 'levels'
    prHealth.className = 'progress_health'
    spanName.innerText= i.pokeName.toUpperCase();
    spanName.className = 'spanName'
    img.src= i.pokeImg;
    btnFood.innerText= 'FEED';
    btnClean.innerText= 'CLEAN';
    btnPlay.innerText= 'PLAY';

    const spanFoodLevel = document.createElement('span');
    const spanCleanLevel = document.createElement('span');
    const spanPlayLevel = document.createElement('span');

    spanFoodLevel.innerText = ' Hunger';
    spanCleanLevel.innerText = ' Purity';
    spanPlayLevel.innerText = ' Mood';

    divHealthLevel.appendChild(prHealth);
    divFoodLevel.appendChild(prFood);
    divCleanLevel.appendChild(prClean);
    divPlayLevel.appendChild(prPlay);

    divFoodLevel.appendChild(spanFoodLevel);
    divCleanLevel.appendChild(spanCleanLevel);
    divPlayLevel.appendChild(spanPlayLevel);

    divLevels.appendChild(divHealthLevel);
    divLevels.appendChild(divFoodLevel);
    divLevels.appendChild(divCleanLevel);
    divLevels.appendChild(divPlayLevel);

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
    divPokemon.appendChild(divLevels);
    divPokemon.appendChild(divButtons);
    divMain.appendChild(divPokemon);
    body.appendChild(divMain);

    life();

    btnFood.addEventListener('click', () => {
        prFood.value = i.pokeFood;
    });

    btnClean.addEventListener('click', () => {
        prClean.value = i.pokeClean;
    })

    btnPlay.addEventListener('click', () => {
        prPlay.value = i.pokePlay;
    })

    function life () {
        setInterval(() =>{

            if (prFood.value > 0 && prClean.value > 0 && prPlay.value > 0) {
                prHealth.value ++;
            }
            if (prHealth.value > 0) {img.style.transform = 'scale(-1, 1)'}
            if(prHealth.value == 0) {
                return 0,
                divPokemon.style.backgroundColor = 'black',
                btnFood.disabled = 'disabled',
                btnClean.disabled = 'disabled',
                btnPlay.disabled = 'disabled'
            }
            prFood.value --;
            prClean.value --;
            prPlay.value --;

            if (prFood.value == 0) {
                prHealth.value --;
            } 
            if (prClean.value == 0) {
                prHealth.value --;
            }
            if (prPlay.value == 0) {
                prHealth.value --;
            }
        }, 100)
    } 

}

