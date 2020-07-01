

//this example uses closure because:
//a function is defined inside another function
//the inner function has access to the outer functions variables, 'message'
//the outer function's variables can be accessed even after the outer function is called

function myEffort(topic){
	var message = "Today I am happy. Because I understood the concepts of " + topic;
  
  function revealMyEfforts(){
  	alert(message);
  }
  
  return revealMyEfforts;
}

var surprise = myEffort("CLOSURE");
surprise();


// The inner function has access not only to the outer function’s variables, 
// but also to the outer function's parameters
function showName (firstName, lastName) {
	var nameIntro = "Your name is ";
	
    	// this inner function has access to the outer function's variables, including the parameter​
	function makeFullName () {  
		return nameIntro + firstName + " " + lastName;
	}
	
	return makeFullName ();
}

showName ("Harsha", "Vardhan"); // Your name is Harsha Vardhan