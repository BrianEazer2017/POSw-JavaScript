var total = 0;
var cart = [];
var items = [];
var prices = [];
var checkoutCart = [];
var elBill = document.getElementById("bill");
function addItem(item){
	cart.push(item);
	splitAndGetPrice(item);
}

function splitAndGetPrice(cartItem){
		var itemAndPrice = cartItem.split("=");
		var item = itemAndPrice[0];
		var price = parseInt(itemAndPrice[1]);
		total += price;
		var quantity = 0;
		var addMe = 0;
		//check to see if item is already in cart, and quantity should be incremented by one
		
		if (checkIfItemIsUnique(item) === true){
			console.log("item created");
			var myItem = new Item(item, price, 1);
			checkoutCart.push(myItem);
		} else {
			for(var i = 0; i < checkoutCart.length; i++){
				if (checkoutCart[i].item === item){
					checkoutCart[i].quantity++;
					console.log(checkoutCart[i].quantity);
				}
			}
		}
}

function checkIfItemIsUnique(item){
	for(var i = 0; i < checkoutCart.length; i++){
		if (checkoutCart[i].item === item){
			return false;
		}
	}
	return true;
}

function Item(item, price, quantity){
	this.item = item;
	this.price = price;
	this.quantity = quantity;
}
	
function cashier(){
	for (var i = 0; i < checkoutCart.length; i++){
		var o = checkoutCart[i];
		elBill.innerHTML += "<p>" + "Quantity: " + o.quantity+ ", Item: " + o.item + ", Price: " + o.price + "</p>";
	}
	var tax = (total*.06);
	var grandTotal = tax + total;
	console.log(typeof tax);
	console.log(typeof total);
	//var grandTotal = parseInt(total) + tax;
	
	elBill.innerHTML += "<p>" + "Sales tax is " + tax.toFixed(2) + "</p>";
	elBill.innerHTML += "<p>" + "Subtotal is " + total + "</p>";
	elBill.innerHTML += "<p>" + "Grand total is " + grandTotal.toFixed(2)  + "</p>";
}







//var elTruffle = document.getElementById("truffle"); 
//elTruffle.onclick= function(){
//cart.push(items[0]);
//cartPrice.push[prices[0]];
//console.log(items[0])
//console.log(cart[0]);
//}
//
//var elSlide = document.getElementById("slide"); 
//elSlide.onclick= function(){
//cart.push[items[1]];
//cartPrice.push[prices[1]];
//}
//
//var elBeer = document.getElementById("beer"); 
//elBeer.onclick= function(){
//cart.push[items[2]];
//cartPrice.push[prices[2]];
//}
//
//var elCocktail = document.getElementById("cocktail"); 
//elCocktail.onclick= function(){
//cart.push[items[3]];
//cartPrice.push[prices[3]];
//}
//
//var elQuesadilla = document.getElementById("quesadilla"); 
//elQuesadilla.onclick= function(){
//cart.push[items[4]];
//cartPrice.push[prices[4]];
//}
//
//var elPerfume = document.getElementById("perfume"); 
//elPerfume.onclick= function(){
//cart.push[items[5]];
//cartPrice.push[prices[5]];
//}
//
//var elMassage = document.getElementById("massage"); 
//elMassage.onclick= function(){
//cart.push[items[6]];
//cartPrice.push[prices[6]];
//}
//
//var elClass = document.getElementById("class"); 
//elClass.onclick= function(){
//cart.push[items[7]];
//cartPrice.push[prices[7]];
//}
//
//var elMelatonin = document.getElementById("melatonin"); 
//elMelatonin.onclick= function(){
//cart.push[items[8]];
//cartPrice.push[prices[8]];
//}
//
//var elNovel = document.getElementById("novel"); 
//elNovel.onclick= function(){
//cart.push[items[9]];
//cartPrice.push[prices[9]];
//}


	
	

