/* Var, Prompt and Alert Katas */

/* COLOR KATAS */

/* No Prompt */
var color = "red"; 
// alert the message" "My favorite color is " plus the color
alert("my favorite color is " + color);
/* Var Alert Prompt */
// make a string variable for color, prompt the user for their favorite
color = prompt("what is your favorite color");
// alert color " is a nice color!"
alert(color + "is a nice color!");

/* Prompt */

/* Prompt with Conditional */


/* AGE */
/* AGE KATAS */

/* Var Alert */
// make an integer variable for age, set it equal to your age
var age= 16;
// make a string variable for name, set it to your name
var myname= "Victoria";
// alert name is age years old
alert(myname + " is " + age + " years old" );
/* Var Alert Prompt */
// make an integer variable for age, prompt user for their age
var myage=prompt("How old are you?");
// make a string variable for name, prompt user for their name
var myname=prompt("What is your name?");
// alert name is age years old
if (myage > 16) alert("You dont look that old!");
else alert(myname + " is " + myage + " years old");

/* No Prompt */


/* Prompt */


/* Prompt with Conditional */


/* ICE CREAM */

/* No Prompt */


/* Prompt */
/* Var Alert Prompt */
// make a string variable for ice cream flavor, prompt user for it
var flavor= prompt(" What is your favorite flavor of icecream?");
// make an integer variable for scoops, prompt user for it
var scoops= prompt("How many scoops do you want?");
// alert "You want " scoops "scoops of " flavor
alert("You want "+ scoops + " scoops of " + flavor);

/* Prompt with Conditional */
var flavor= prompt("What flavor do you want?");
// make an integer variable for scoops, prompt user for it
var scoops= prompt("How many scoops do you want?");
// if scoop is creater than three, alert ("Max 3 scoops!")
if (scoops > 3) alert("MAX 3 SCOOPS! THE ICECREAM THEIF HAS STOLLEN MOST OF OUR ICECREAM");
// otherwise alert "You want " scoops "scoops of " flavor
else alert("Alright, you want " + scoops + " scoops of " + flavor);


/* PET */

/* No Prompt */


/* Prompt */
var pettype= prompt ("What pet type do you have?");
// make a variable for pet name, prompt user for it
var petname= prompt("whats their name?");
// alert "You have a pet type named pet name 
confirm("so you have a " + pettype + " named " + petname);

/* Prompt with Conditional */
// make a variable for pet type, prompt user for it 
var pettype= prompt("What type of pet do you have?");
console.log(pettype);
// make a variable for pet name, prompt user for it
var petname= prompt ("What is their name?");
// alert "You have a pet type named pet name 
alert("You have a " + pettype + " named " + petname);
// if pet is a dog, say "I like dogs, too!"
console.log(pettype);
if (pettype == "Dog" || pettype == "dog") alert("I like dogs but they keep stealing from the mysterious bone pile ");
// if it is a cat, say "I'm allergic to cats"
else if (pettype == "Cat" || pettype ==  "cat") alert("I'm allergic but they keep breaking into my house and eatting all the mice");
// If it is not a dog or a cat, say "what an interesting pet!"
else alert("wow cool! I heard " + pettype + "s" + " could learn human language!");