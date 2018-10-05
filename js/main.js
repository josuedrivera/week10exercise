// In JS: create five objects using object literal notation.

// Each object should have the following properties: 
// 	firstName, lastName,portrat, and title.
// 	find any image file paths for portrait 
//  		for title, be sure to use the following values: 
//  			co-founder, co-founder, cto, cfo, and cmo (keep them all lowercase).


// var person1 = {firstName:'', lastName:'', portrait:'', title:'co-founder'};
// var person2 = {firstName:'', lastName:'', portrait:'', title:'co-founder'};
// var person3 = {firstName:'', lastName:'', portrait:'', title:'cto'};
// var person4 = {firstName:'', lastName:'', portrait:'', title:'cfo'};
// var person5 = {firstName:'', lastName:'', portrait:'', title:'cmo'};






// Create the same five objects, with the same four properties,
// 	using constructor notation, and add them into an array. 

// 	Confirm that your objects were created and stored properly by your constructor using your console, 
	
// 	then comment out the five objects created using object literal notation. 
// 	Double-check your objects one more time using your console.



// this creates the arry i will store the new persons in
var array = [];

// this creates an object
function Persons(firstName, lastName, portrait, titles){
	this.firstName = firstName;
	this.lastName = lastName;
	this.portrait = portrait;
	this.titles = titles;

// better to be stored outside each object for better load time and less code
	// this.fullName = function(){
	// 	return this.firstName + ' ' + this.lastName;
	// }
	pushToArray(array, this); {

}
// this will add to the array
function pushToArray(arr, object){
	arr.push(object);
}

// Add your method to your objects’ prototype, 
// 	and remove the method from your constructor function
// 	Test the method on each object in your console again.
Persons.prototype.fullName = function(){
	return this.firstName + ' ' + this.lastName;
}


// add these to the array
var person1 = new Persons('Steve', 'Young', 'img/young.jpg', 'co-founder');
var person2 = new Persons('Jerry', 'Rice', 'img/rice.jpg', 'co-founder');
var person3 = new Persons('Joe', 'Montana', 'img/montana.jpg', 'cto');
var person4 = new Persons('Patrick', 'Willis', 'img/willis.jpg', 'cfo');
var person5 = new Persons('Frank', 'Gore', 'img/gore.jpg', 'cmo');

// will log in console if you did it right
console.log(array);


}


// In your constructor function, add to a method to each object. 
// The method should concatenate the team member’s first name and last name (and RETURN the result!).
// Test your new method on each of your objects using console.log(person1)

// to call whats inside the function
for(i=0; i<array.length; i++){
	console.log(array[i].fullName());
}

// console.log(array);




// Loop through the array of team member objects. 
// Create a parent element for each object 
// 	and a child element for each object property so you have a place to display each piece of information.

for(i = 0; i <= Persons.length; i++){
	var newDiv = document.createElement('div');
	var newH2 = document.createElement('h2');
	var newImg = document.createElement('img');
	var newH3 = document.createElement('h3');	
	var newH4 = document.createElement('h4');

// Still in the loop, 
// populate your new child elements with the properties of your objects. 
// (one should be an img, make sure you also populate your img’s alt attribute). 
// Be sure to include an element which contains the result of your objects’ prototype method. 
// Add the child elements to the parent element.

	// myDiv.className = 'bg-dark text-center text-white p-5 col-12 col-sm-5 mx-auto mb-5';

// add first name to an h2 ?why not innerText = ??
	newH2.textContent = array[i].firstName;
	newDiv.appendChild(newH2);

// add last name to an h2
	newH2.textContent = array[i].lastName;
	newDiv.appendChild(newH2);

// add portrait to img tag
	newImg.setAttribute('src', array[i].portrait);
	newDiv.appendChild(newImg);
	newImg.setAttribute('alt', array[i].fullName);
	newDiv.appendChild(newImg);

// add title to an h3
	newH3.textContent = array[i].titles;
	newDiv.appendChild(newH3);

// add fullName to h4
	newH4.textContent = array[i].fullName();
	newDiv.appendChild(newH4);

// change background color
	newDiv.style.backgroundColor = 'tan';
	document.body.appendChild(newDiv);

// adds newly created elemets to HTML div class = "row"
	// document.getElementsByClassName('row')[0].appendChild.(newDiv);




	// document.body.classList.add('img-responsive center-block text-center'); 




// Jump back inside your for loop, and 
// update your code so that each team member object’s parent element 
// contains Bootstrap classes which will allow them to line up horizontally 
// 	(they should display on your page in two rows — 
// 		three team members in one row and 
// 		two team members on the second row).










// BONUS: In JS: add a new method to your objects’ prototype which, if the team member’s role is “co-founder”, adds a new property, isFounder, equal to true. 
// Then add some code to your for loop which, if isFounder is true, gives the object’s parent element a box-shadow (in other words, when everything renders on your page, the two co-founders’ elements will have box-shadow, while the other team members will not).


// When finished, upload your exercise folder to a new Github repository.