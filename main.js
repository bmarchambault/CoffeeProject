"use strict";
//ORIGINAL GITHUB:  https://github.com/gocodeup/coffee-project.git

//6/   90b60a8aba6880677e1df4adeb14b2662717/  80e
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
    for (var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//first form
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;


    // var userInput = userSearch.value.toLowerCase();
    var filteredCoffees = []; //create empty array to hold the for each return value
    coffees.forEach(function (coffee) {
        var arrayNameLower = coffee.name.toLowerCase();
        if (arrayNameLower.startsWith(userSearchInputValueLower) && (coffee.roast === selectedRoast)) {
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

var coffeeExists = false;

function addUsersCoffee(e) {
    e.preventDefault();
    var userInput = document.getElementById('user-addCoffee').value;
    var msg = document.querySelector('.msg')
    var userSelectRoast = roastSelection2.value;
    var id = coffees.length - 1;
    // console.log(userInput);
    if (userInput !== null) {
        testCoffeeNameIsNew(userInput);

        if ((coffeeExists === false) && (userSelectRoast !== "select a roast")) {
            var newCoffee = {
                id: id,
                name: userInput,
                roast: userSelectRoast
            };
            coffees.push(newCoffee);
            // console.log(coffees);
            $('#myForm')[0].reset();
        }

        else {
            msg.innerHTML = "please enter a new coffee name";
            setTimeout(function () {
                msg.remove();
            }, 3000);
        }

    } else {
        msg.innerHTML = "please enter a coffee name";
        setTimeout(function () {
            msg.remove();
        }, 3000);
}
updateCoffees(e);
}


function testCoffeeNameIsNew(userInput) {
    // var coffeeExists = false;
    for (var i = 0; i < coffees.length; i++) {
        if (userInput === coffees[i].name) {
            coffeeExists = true;
        }
    }
    return coffeeExists;
}




var coffeeListBody = document.querySelector('#coffees');
var roastSelection = document.querySelector('#roast-selection');

// var userSearch = document.querySelector('#user-search')

var roastSelection2 = document.querySelector('#roast-selection2');
var submitButton = document.querySelector('#submitNewCoffee');
submitButton.addEventListener('click', addUsersCoffee);

coffeeListBody.innerHTML = renderCoffees(coffees); //displaying the output from the 'rendered coffee & rendered coffees' functions to html table

roastSelection.addEventListener('change', updateCoffees); //updates user selection list using the top three functions...
var userSearchInputField = document.getElementById('user-search');
var userSearchInputValue = document.getElementById('user-search').value;
var userSearchInputValueLower = userSearchInputValue.toString().toLowerCase();
userSearchInputField.addEventListener('keyup', updateCoffees);


//original bobbie and shelby function:
// function addUsersCoffee(e){
//     e.preventDefault();
//     var userValue = document.getElementById('user-addCoffee').value;
//     var userInputRoast = roastSelection2.value;
//     var id = coffees.length - 1;
//     coffees.forEach(function(coffee){
//         if(userValue !== coffee.name) {
//             var newCoffee = {
//                 id: id,
//                 name: userValue,
//                 roast: userInputRoast
//             };
//             coffees.push(newCoffee);
//             updateCoffees();
//         }
//     });
// }