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
else alert("wow cool! I heard thoose could learn human language!");