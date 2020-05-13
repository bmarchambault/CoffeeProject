"use strict";

//taking array input from 'rendered coffees' and organizing it
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<p>' + '<b>' + coffee.name + '</b>' + ' ' + coffee.roast + '</p>';
    // html += '<p>' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}
//taking data from coffee array and giving it to 'rendered coffee'
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
//first form
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var userInput = userSearch.value.toLowerCase();
    var filteredCoffees = []; //create empty array to hold the for each return value
    coffees.forEach(function(coffee) {
        var arrayNameLower = coffee.name.toLowerCase();
        if (arrayNameLower.startsWith(userInput)  && coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeListBody.innerHTML = renderCoffees(filteredCoffees);
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


//create a function that makes just a name array to reference in th add coffee function
function coffeeNameList(coffees){
    coffees.forEach(function(coffee){
        if(userInput.value !== coffee.name) {
            var newCoffee = {
                id: id,
                name: userValue,
                roast: userInputRoast
            };

}

        //need to complete
function addUsersCoffee(e){
    e.preventDefault();
    var userInput = document.getElementById('user-addCoffee');
    var msg = document.querySelector('.msg')
    var userInputRoast = roastSelection2.value;
    var id = coffees.length - 1;
    if (userInput.value === '') {
        msg.innerHTML = "please enter a new coffee name";

        setTimeout(function () {
            msg.remove();
        }, 3000);
    }else {
            coffees.push(newCoffee);
            updateCoffees();
        }
    });
}


var coffeeListBody = document.querySelector('#coffees');
var roastSelection = document.querySelector('#roast-selection');
var userSearch = document.querySelector('#user-search');
var roastSelection2 = document.querySelector('#roast-selection2');

var submitButton = document.querySelector('#submit');
submitButton.addEventListener('submit', addUsersCoffee);

coffeeListBody.innerHTML = renderCoffees(coffees); //displaying the output from the 'rendered coffee & rendered coffees' functions to html table

roastSelection.addEventListener('change', updateCoffees); //updates user selection list using the top three functions...
userSearch.addEventListener('keyup', updateCoffees);