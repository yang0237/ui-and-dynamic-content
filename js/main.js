
//Open closure
/*global document, window, console*/
(function () {
//Access new-item button. 
	"use strict";
	
//Access unordered list.
//Declare variable list-item.
	var btn, ul, item;

//Define function removeItem (use event object to find out which item is clicked).
	btn = document.querySelector("button");
	ul = document.querySelector("ul");

//Remove clicked item from unordered list. 
	function removeItem(ev) {

//End function removeItem.
		ul.removeChild(ev.target);
	}

//Define function addItem.
	function addItem() {

//Create list item and store output in a variable.
		item = document.createElement("li");
	
//Use innerHTML on created list item and assign it with user input 
//from prompt("Enter a new item for to-do list:").
		item.innerHTML = prompt("Enter a new item to your shopping list:");

//If list item has a content:   
//Append list item to unordered list.
		if (item.innerHTML !== "") {
			ul.appendChild(item);
			item.addEventListener("click", removeItem);
		}
	}

//Add event listener to the added list-item to listen for click event - event     
//handler will be removeItem function.  
//End if. 
	btn.addEventListener("click", addItem)

}());
//Close and immediately invoke closure