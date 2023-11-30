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

/*const checkOrderName = (orderName) => {
  return orderName;
};
*/
const totalCost = (orderQuantity) => {
  return pizzaPrice * orderQuantity;
  if (orderQuantity <= 2) {
    alert("The pizzas will take 10 minutes.");
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    alert("The pizzas will take 15 minutes.");
  } else {
    alert("The pizzas will take 20 minutes.");
  }
};

const cookingTime = (orderQuantity) => {
  if (orderQuantity <= 2) {
    alert("The pizzas will take 10 minutes.");
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    alert("The pizzas will take 15 minutes.");
  } else {
    alert("The pizzas will take 20 minutes.");
  }
};
