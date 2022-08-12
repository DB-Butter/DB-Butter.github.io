const enlightenmentResult = document.querySelector('.enlightenmentResult');
const highSpan = document.querySelector('.high');
const hungerSpan = document.querySelector('.hunger');
const backpainSpan = document.querySelector('.backpain');
const moodSpan = document.querySelector('.mood');
const tirednessSpan = document.querySelector('.tiredness');
const btnSmokeUp = document.querySelector('.smokeUp');
const btnEatABurger = document.querySelector('.eatABurger');
const btnPlayGames = document.querySelector('.playGames');
const btnGamerStretches = document.querySelector('.gamerStretches');
const btnNap = document.querySelector('.nap');
const btnEnterTheVoid = document.querySelector('.enterTheVoid');
const god = document.querySelector('.god');
const startBtn = document.querySelector('.startBtn');
const endText = document.querySelector('.endText');
const startAgainBtn = document.querySelector('.startAgain');
const extendedCut = document.querySelector('.extendedCut');
const theGrassyGlideBtn = document.querySelector('.theGrassyGlide');
const extendedResults = document.querySelector('.extendedResults');
const chooseAgainBtn = document.querySelector('#chooseAgain');
const theSmokeyStreamBtn = document.querySelector('.theSmokeyStream');
const theJaggedCracksBtn = document.querySelector('.theJaggedCracks');
const theSlipperySlopeBtn = document.querySelector('.theSlipperySlope');
const theAdHominemBtn = document.querySelector('.theAdHominem');
const theTrollBtn = document.querySelector('.theTroll');
const whatBtn = document.querySelector('.whatButton');

let enlightenment = 0;
let highLevel = 0;
let hungerLevel = 0;
let backpainLevel = 0;
let moodLevel = 0;
let tirednessLevel = 0;
let insanity = 0;

function smokeUp () {
    highLevel += 10;
    highSpan.innerHTML = `${highLevel}`;
    hungerLevel += 5;
    hungerSpan.innerHTML = `${hungerLevel}`;
    tirednessLevel += 1;
    tirednessSpan.innerHTML = `${tirednessLevel}`;
    moodLevel += 1;
    moodSpan.innerHTML = `${moodLevel}`;
};

function eatABurger () {
    hungerLevel -= 10;
    hungerSpan.innerHTML = `${hungerLevel}`;
    highLevel -= 3;
    highSpan.innerHTML = `${highLevel}`;
    moodLevel += 1;
    moodSpan.innerHTML = `${moodLevel}`;
    tirednessLevel += 1;
    tirednessSpan.innerHTML = `${tirednessLevel}`;
};

function playGames () {
    moodLevel += 5;
    moodSpan.innerHTML = `${moodLevel}`;
    backpainLevel += 10;
    backpainSpan.innerHTML = `${backpainLevel}`
    hungerLevel += 5;
    hungerSpan.innerHTML = `${hungerLevel}`;
    highLevel -= 3;
    highSpan.innerHTML = `${highLevel}`;
    tirednessLevel += 1;
    tirednessSpan.innerHTML = `${tirednessLevel}`;
};

function gamerStretches () {
    backpainLevel -= 10;
    backpainSpan.innerHTML = `${backpainLevel}`;
    highLevel -= 3;
    highSpan.innerHTML = `${highLevel}`;
    tirednessLevel += 1;
    tirednessSpan.innerHTML = `${tirednessLevel}`;
};

function nap () {
    tirednessLevel -= 10;
    tirednessSpan.innerHTML = `${tirednessLevel}`;
    highLevel -= 8;
    highSpan.innerHTML = `${highLevel}`;
    hungerLevel += 5;
    hungerSpan.innerHTML = `${hungerLevel}`;
    backpainLevel += 2;
    backpainSpan.innerHTML = `${backpainLevel}`;
};

function enterTheVoid () {
    if (hungerLevel > 0) {
        god.innerHTML = `Unsatiated, the mind cannot feed upon the wisdom of God`;
    }
    if (backpainLevel > 0) {
        god.innerHTML = `Pained by the weight of the world... Does Atlas even know the strength of his shoulder?`;
    }
    if (hungerLevel < 1 && backpainLevel < 1 && tirednessLevel <= 41 && highLevel >= 0 && moodLevel >= 0) {
        enlightenment = highLevel * moodLevel;
        enlightenmentResult.innerHTML = `${enlightenment}`;
        highLevel = 0;
        highSpan.innerHTML = `${highLevel}`;
        hungerLevel = 0;
        hungerSpan.innerHTML = `${hungerLevel}`;
        backpainLevel = 0;
        backpainSpan.innerHTML = `${backpainLevel}`;
        moodLevel = 0;
        moodSpan.innerHTML = `${moodLevel}`;
        tirednessLevel = 0;
        tirednessSpan.innerHTML = `${tirednessLevel}`;
        god.innerHTML = 'The path forever clears before the open eye...'
    } else if (tirednessLevel > 41) {
        enlightenmentResult.innerHTML = 'Corrupted';
        god.innerHTML = 'Mytama never slept. He never found God. Instead he found the Devil. He traded his chance at salvation for higher power in this world.... Cod lobbies shall fear his wrath until the end of time....... Mytama is upon us.....'
        highLevel = 0;
        highSpan.innerHTML = `${highLevel}`;
        hungerLevel = 0;
        hungerSpan.innerHTML = `${hungerLevel}`;
        backpainLevel = 0;
        backpainSpan.innerHTML = `${backpainLevel}`;
        moodLevel = 0;
        moodSpan.innerHTML = `${moodLevel}`;
        tirednessLevel = 0;
        tirednessSpan.innerHTML = `${tirednessLevel}`;
    } else {
        highLevel = 0;
        highSpan.innerHTML = `${highLevel}`;
        hungerLevel = 0;
        hungerSpan.innerHTML = `${hungerLevel}`;
        backpainLevel = 0;
        backpainSpan.innerHTML = `${backpainLevel}`;
        moodLevel = 0;
        moodSpan.innerHTML = `${moodLevel}`;
        tirednessLevel = 0;
        tirednessSpan.innerHTML = `${tirednessLevel}`;
    }
    if (enlightenment > 9000) {
        document.querySelector('.entireGame').style.display = "none";
        endText.style.display = "block";
    }
};

function startGame () {
    document.querySelector('.startScreen').style.display = "none";
    document.querySelector('.entireGame').style.display = "block";
}

function startAgain () {
    god.innerHTML = 'You seem familiar...'
    enlightenment = 0;
    enlightenmentResult.innerHTML = `${enlightenment}`;
    highLevel = 0;
    highSpan.innerHTML = `${highLevel}`;
    hungerLevel = 0;
    hungerSpan.innerHTML = `${hungerLevel}`;
    backpainLevel = 0;
    backpainSpan.innerHTML = `${backpainLevel}`;
    moodLevel = 0;
    moodSpan.innerHTML = `${moodLevel}`;
    tirednessLevel = 0;
    tirednessSpan.innerHTML = `${tirednessLevel}`;
    endText.style.display = "none";
    extendedCut.style.display = "block";
    chooseAgainBtn.style.display = "none";
    document.querySelector('.secondPage').style.display = "none";
    whatBtn.style.display = "none";
}

function theGrassyGlide () {
    document.querySelector('.firstPage').style.display = "none";
    extendedResults.innerHTML = 'Your foot gets snagged in a grassy tumble, and you hurtle into oblivion... Absolutely lost in the sauce';
    chooseAgainBtn.style.display = "block";
}

function theSmokeyStream () {
    document.querySelector('.firstPage').style.display = "none";
    extendedResults.innerHTML = 'The Stream clears the stench... but the smoke is all surrounding... it would be so easy... to get lost .... in the sauce';
    chooseAgainBtn.style.display = "block";
}

function theJaggedCracks () {
    document.querySelector('.firstPage').style.display = "none";
    extendedResults.innerHTML = 'Why? Why the jagged cracks? You cannot stand the stench so you jump down a jagged crack... You land in a cavern lake... but the water... is sauce... and now you are lost';
    chooseAgainBtn.style.display = "block";
}

function chooseAgain () {
    if (insanity < 4) {
        chooseAgainBtn.style.display = "none";
        document.querySelector('.firstPage').style.display = "block";
        extendedResults.innerHTML = '';
        insanity += 1;
    } else {
        extendedResults.innerHTML = '';
        chooseAgainBtn.style.display = "none";
        document.querySelector('.secondPage').style.display = "block";
    }
}

function theSlipperySlope () {
    document.querySelector('.secondPage').style.display = "none";
    extendedResults.innerHTML = 'I think, therefor I am not';
    whatBtn.style.display = "block";
}

function theAdHominem () {
    document.querySelector('.secondPage').style.display = "none";
    extendedResults.innerHTML = 'Why should each path be beset by evil. forEach (joy) {a pain}?';
    whatBtn.style.display = "block";
}

function theTroll () {
    extendedResults.innerHTML = `The troll smashes your brain into a million pieces by whispering in your ear, "garlic smell". You died...`;
    document.querySelector('.secondPage').style.display = "none";
    document.querySelector('.finish').innerHTML = 'Your journey ends...'
}

function what () {
    document.querySelector('.secondPage').style.display = "block";
    whatBtn.style.display = "none";
}

extendedCut.style.display = "none";
document.querySelector('.entireGame').style.display = "none";
endText.style.display = "none";
startBtn.addEventListener('click', startGame);

btnSmokeUp.addEventListener('click', smokeUp);
btnEatABurger.addEventListener('click', eatABurger);
btnPlayGames.addEventListener('click', playGames);
btnGamerStretches.addEventListener('click', gamerStretches);
btnNap.addEventListener('click', nap);
btnEnterTheVoid.addEventListener('click', enterTheVoid);

startAgainBtn.addEventListener('click', startAgain);
chooseAgainBtn.addEventListener('click', chooseAgain);
theGrassyGlideBtn.addEventListener('click', theGrassyGlide);
theJaggedCracksBtn.addEventListener('click', theJaggedCracks);
theSmokeyStreamBtn.addEventListener('click', theSmokeyStream);
theSlipperySlopeBtn.addEventListener('click', theSlipperySlope);
theAdHominemBtn.addEventListener('click', theAdHominem);
whatBtn.addEventListener('click', what);
theTrollBtn.addEventListener('click', theTroll);
