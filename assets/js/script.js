let score = 0;//this counts the score of the user, initialized as 0 once the game is begun
let counter = 0;//a total of 10 questions will load, this keeps track of how many questions have been answered, initialized as 0 for the start of the game
let country;//this will hold the country being viewed in the gameplay
let countries = [];//the list to contain all countries featured in the game; initialized when the game is begun to be played

let gameText = document.getElementById('game-text');
let innerDiv = document.getElementById('inner-div');


function startGame() {
    score = 0;
    counter = 0;
    country = null;
    countries = []; //all these reset these respective values in the event of the game being restarted from within the game
    populateCountries();
    gameText.innerHTML = "What country is this?";
    nextQuestion();
}

function nextQuestion() {
    counter++;
    country = pickRandomCountry();
    innerDiv.innerHTML = `
        ${country.flagHtml}
          <div id="options-div">
            <span class="options-span">
                <input type="radio" class="answer-selections" id="first" name="options" value="" />
                <label for="first">${country.optionA}</label>
            </span>
            <span class="options-span">
                <input type="radio" class="answer-selections" id="second" name="options" value="" />
                <label for="second">${country.optionB}</label>
            </span>
            <span class="options-span">
                <input type="radio" class="answer-selections" id="third" name="options" value="" />
                <label for="third">${country.optionC}</label>
            </span>
            <span class="options-span">
                <input type="radio" class="answer-selections" id="fourth" name="options" value="" />
                <label for="fourth">${country.optionD}</label>
            </span>
            
          </div>
          <button
            id="next-button"
            class="small-button"
            onclick="checkAnswer();"
          >
            <!--This is the button that starts the game-->
            Next
          </button>
    `;
}

function checkAnswer() {
    let correctAnswer = country.country;//takes the value of the correct country with which it will compare with the user choice
    let chosenAnswer = "";//to store the answer that the user has chosen
    let valid = false; //to check to ensure the user hasn't made an invalid selection

    let choiceButtons = document.getElementsByTagName('input');
    let choiceLabels = document.getElementsByTagName('label');
    //the block below takes the user's selection
    if (choiceButtons[0].checked) {
        chosenAnswer = choiceLabels[0].innerHTML;
    } else if (choiceButtons[1].checked) {
        chosenAnswer = choiceLabels[1].innerHTML;
    } else if (choiceButtons[2].checked) {
        chosenAnswer = choiceLabels[2].innerHTML;
    } else if (choiceButtons[3].checked) {
        chosenAnswer = choiceLabels[3].innerHTML;
    }

    if (chosenAnswer === correctAnswer) {
        score++;
        alert("Correct!");
        valid = true;
    } else if (chosenAnswer === "") {
        alert("You haven't chosen an option! Please try again!");
    } else {
        alert("Sorry, incorrect!");
        valid = true;
    }

    //the below block is run if the user has selected a valid answer
    if (valid) {
        if (counter === 10) {
            endOfGame();
        } else {
            nextQuestion();
        }
    }

}

function endOfGame() {
    gameText.innerHTML = "Game Over";
    innerDiv.innerHTML = `
    <h2>Your Score:</h2>
    <h4>${score}</h4>
    <button id="restart-button" class="small-button" onclick="startGame();">
    <!--This is the button that starts the game-->
    Play Again
    </button>
    `;
}

function populateCountries() {
    /*i'm putting this function here to populate the countries list so as to avoid the code getting all messy when 
    trying to work with it. the countries list is initialized when the game is begun, because as each country is 
    featured it will be removed from the list.
    the list is made of country objects which follow the same format: the name of the country, the HTML for the
    country flag, and the various options, of which the correct one is marked as this.country*/
    countries = [{
        country: "United Kingdom",
        flagHtml: `<img
  src="https://flagcdn.com/h120/gb.png"
  srcset="https://flagcdn.com/h240/gb.png 2x"
  height="120"
  alt="United Kingdom">`,
        optionA: "Canada",
        optionB: "The Netherlands",
        optionC: "United Kingdom",
        optionD: "Brazil"
    },
    {
        country: "The Netherlands",
        flagHtml: `<img
  src="https://flagcdn.com/h120/nl.png"
  srcset="https://flagcdn.com/h240/nl.png 2x"
  height="120"
  alt="Netherlands">`,
        optionA: "Belgium",
        optionB: "The Netherlands",
        optionC: "Luxembourg",
        optionD: "Slovakia"
    },
    {
        country: "Belgium",
        flagHtml: `<img
  src="https://flagcdn.com/h120/be.png"
  srcset="https://flagcdn.com/h240/be.png 2x"
  height="120"
  alt="Belgium">`,
        optionA: "Germany",
        optionB: "Liechtenstein",
        optionC: "Belgium",
        optionD: "Poland"
    },
    {
        country: "Germany",
        flagHtml: `<img
  src="https://flagcdn.com/h120/de.png"
  srcset="https://flagcdn.com/h240/de.png 2x"
  height="120"
  alt="Germany">`,
        optionA: "Germany",
        optionB: "Poland",
        optionC: "Belgium",
        optionD: "Austria"
    },
    {
        country: "Austria",
        flagHtml: `<img
  src="https://flagcdn.com/h120/at.png"
  srcset="https://flagcdn.com/h240/at.png 2x"
  height="120"
  alt="Austria">`,
        optionA: "Australia",
        optionB: "Austria",
        optionC: "Germany",
        optionD: "Hungary"
    },
    {
        country: "Australia",
        flagHtml: `<img
  src="https://flagcdn.com/h120/au.png"
  srcset="https://flagcdn.com/h240/au.png 2x"
  height="120"
  alt="Australia">`,
        optionA: "New Zealand",
        optionB: "Austria",
        optionC: "Solomon Islands",
        optionD: "Australia"
    },
    {
        country: "New Zealand",
        flagHtml: `<img
  src="https://flagcdn.com/h120/nz.png"
  srcset="https://flagcdn.com/h240/nz.png 2x"
  height="120"
  alt="New Zealand">`,
        optionA: "Fiji",
        optionB: "Australia",
        optionC: "Austria",
        optionD: "New Zealand"
    },
    {
        country: "Ireland",
        flagHtml: `<img
  src="https://flagcdn.com/h120/ie.png"
  srcset="https://flagcdn.com/h240/ie.png 2x"
  height="120"
  alt="Ireland">`,
        optionA: "Côte d'Ivoire",
        optionB: "Iceland",
        optionC: "Ireland",
        optionD: "Portugal"
    },
    {
        country: "Côte d'Ivoire",
        flagHtml: `<img
  src="https://flagcdn.com/h120/ci.png"
  srcset="https://flagcdn.com/h240/ci.png 2x"
  height="120"
  alt="Côte d'Ivoire">`,
        optionA: "Peru",
        optionB: "Côte d'Ivoire",
        optionC: "Niue",
        optionD: "Ireland"
    },
    {
        country: "Japan",
        flagHtml: `<img
  src="https://flagcdn.com/h120/jp.png"
  srcset="https://flagcdn.com/h240/jp.png 2x"
  height="120"
  alt="Japan">`,
        optionA: "Japan",
        optionB: "Belgium",
        optionC: "Bangladesh",
        optionD: "Latvia"
    },
    {
        country: "Russia",
        flagHtml: `<img
  src="https://flagcdn.com/h120/ru.png"
  srcset="https://flagcdn.com/h240/ru.png 2x"
  height="120"
  alt="Russia">`,
        optionA: "Poland",
        optionB: "The Netherlands",
        optionC: "Czechia",
        optionD: "Russia"
    },
    {
        country: "Luxembourg",
        flagHtml: `<img
  src="https://flagcdn.com/h120/lu.png"
  srcset="https://flagcdn.com/h240/lu.png 2x"
  height="120"
  alt="Luxembourg">`,
        optionA: "The Netherlands",
        optionB: "Russia",
        optionC: "Luxembourg",
        optionD: "Slovenia"
    },
    {
        country: "Czechia",
        flagHtml: `<img
  src="https://flagcdn.com/h120/cz.png"
  srcset="https://flagcdn.com/h240/cz.png 2x"
  height="120"
  alt="Czechia">`,
        optionA: "Switzerland",
        optionB: "United States",
        optionC: "Czechia",
        optionD: "South Africa"
    },
    {
        country: "Nigeria",
        flagHtml: `<img
  src="https://flagcdn.com/h120/ng.png"
  srcset="https://flagcdn.com/h240/ng.png 2x"
  height="120"
  alt="Nigeria">`,
        optionA: "Algeria",
        optionB: "Niger",
        optionC: "Ghana",
        optionD: "Nigeria"
    },
    {
        country: "Israel",
        flagHtml: `<img
  src="https://flagcdn.com/h120/il.png"
  srcset="https://flagcdn.com/h240/il.png 2x"
  height="120"
  alt="Israel">`,
        optionA: "Lebanon",
        optionB: "Israel",
        optionC: "Jordan",
        optionD: "Egypt"
    },
    {
        country: "Palestine",
        flagHtml: `<img
  src="https://flagcdn.com/h120/ps.png"
  srcset="https://flagcdn.com/h240/ps.png 2x"
  height="120"
  alt="Côte d'Ivoire">`,
        optionA: "Jordan",
        optionB: "Palestine",
        optionC: "Kuwait",
        optionD: "Sudan"
    },
    {
        country: "Sudan",
        flagHtml: `<img
  src="https://flagcdn.com/h120/sd.png"
  srcset="https://flagcdn.com/h240/sd.png 2x"
  height="120"
  alt="Sudan">`,
        optionA: "South Sudan",
        optionB: "Palestine",
        optionC: "Jordan",
        optionD: "Sudan"
    },
    {
        country: "Indonesia",
        flagHtml: `<img
  src="https://flagcdn.com/h120/id.png"
  srcset="https://flagcdn.com/h240/id.png 2x"
  height="120"
  alt="Indonesia">`,
        optionA: "Indonesia",
        optionB: "Mexico",
        optionC: "Poland",
        optionD: "Lithuania"
    },
    {
        country: "Poland",
        flagHtml: `<img
  src="https://flagcdn.com/h120/pl.png"
  srcset="https://flagcdn.com/h240/pl.png 2x"
  height="120"
  alt="Poland">`,
        optionA: "Ukraine",
        optionB: "Indonesia",
        optionC: "Slovakia",
        optionD: "Poland"
    },
    {
        country: "China",
        flagHtml: `<img
  src="https://flagcdn.com/h120/cn.png"
  srcset="https://flagcdn.com/h240/cn.png 2x"
  height="120"
  alt="China">`,
        optionA: "Singapore",
        optionB: "China",
        optionC: "Mongolia",
        optionD: "Taiwan"
    },
    {
        country: "Taiwan",
        flagHtml: `<img
  src="https://flagcdn.com/h120/tw.png"
  srcset="https://flagcdn.com/h240/tw.png 2x"
  height="120"
  alt="Poland">`,
        optionA: "Japan",
        optionB: "China",
        optionC: "East Timor",
        optionD: "Taiwan"
    },];
}

function pickRandomCountry() {//this function returns a randomly selected country
    let randomIndex = Math.floor(Math.random() * countries.length);//selects a random index number for the list
    let country = countries[randomIndex];//retrieves the item stored in this index
    countries.splice(randomIndex, 1);//removes this country from the list so it's not selected again
    return country;
}