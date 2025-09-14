const baskets = [
    {
    name: "Basket 1",
    hasFruit: false
    },
 
    {
    name: "Basket 2",
    hasFruit: true
    },
 
    {
    name: "Basket 3",
    hasFruit: false
    }
];
 
 
function checkBasket(basketNumber) {
    const instructions = prompt("You have 3 choices: Basket 1 or Basket 2 or Basket 3. " + " Choose your basket")
    let basketNumber
 
    if (baskets) {
        if (instructions == baskets[0].name && baskets[0].hasFruit == true) {
            console.log("Correct choice of Basket");
        } else {
            console.log("Sorry your choosen basket is empty")
        }
 
        if (instructions == baskets[1].name && baskets[1].hasFruit == true) {
            console.log("Correct choice of Basket");
        } else {
            console.log("Sorry your choosen basket is empty")
        }
 
        if (instructions == baskets[2].name && baskets[2].hasFruit == true) {
            console.log("Correct choice of Basket");
        } else {
            console.log("Sorry your choosen basket is empty")
        }
 
    }else {
        console.log("Basket does not exist");
    }
   
}
 
checkBasket()