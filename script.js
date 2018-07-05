// Exercise 1
var number = prompt("Please give a number greater than 0");

var total = 0;

for (var i = 0; i <= number; i++) {
    total = total + i;
}

console.log("The total is: " + total);

// -----------------------------------------------------------------------


// Exercise 2
var userString = "";


do {
userPlay = prompt("Would you like to play? Type 'yes' or 'no'.");
  if (userPlay === "yes") {
    userWord = prompt("Enter any word") + " ";
    userString += userWord;
  }
} while (userPlay === "yes");

console.log("The words you chose are: " + userString);



// -------------------------------------------------------------------------



// Exercise 3
var name = "My name is " + prompt("What is your name?");
var toPrint = prompt("Would you like to print your name? Please type 'yes' or 'no'.");

while (toPrint === "yes") {
    name = name += "!";
    console.log(name);
    toPrint = prompt("Would you like to print your name again? Please type 'yes' or 'no'.");
}

alert("Thanks for playing!");


// -----------------------------------------------------------------------------------------


// Exercise 4
var shouldEat = "You should be eating ";
var suggest = "I suggest you try ";

var breakfastFood = "oatmeal & strawberries.";
var lunchFood = "a sandwich and Soup.";
var dinnerFood = "pizza and a salad.";

var timeOfDay = prompt("Is it currently morning, afternoon, or evening?");


if (timeOfDay === "morning") {
    console.log(shouldEat + "breakfast. " + suggest + breakfastFood);

} else if (timeOfDay === "afternoon") {
    console.log(shouldEat + "lunch. " + suggest + lunchFood);

} else if (timeOfDay === "evening") {
    console.log(shouldEat + "dinner. " + suggest + dinnerFood);
}