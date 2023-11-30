const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

alert(
  "Hey! Happy to serve your pizza. On our menu we have " +
    vegetarian +
    ", " +
    hawaiian +
    ", and " +
    pepperoni +
    "."
);

const orderName = prompt("Enter the name of the pizza you want to order today");

const orderQuantity = prompt("How many of " + orderName + " do you want?");

const orderTotal = pizzaPrice * orderQuantity;

if (orderQuantity <= 2) {
  alert("The pizzas will take 10 minutes.");
} else if (orderQuantity >= 3 && orderQuantity <= 5) {
  alert("The pizzas will take 15 minutes.");
} else {
  alert("The pizzas will take 20 minutes.");
}

alert(
  "Great, I'll get started on your " +
    orderName +
    " right away, it will cost " +
    orderTotal +
    " kr."
);
