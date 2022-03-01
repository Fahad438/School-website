function login() {
	var email = document.getElementById("inEmail").value;
	var psd = document.getElementById("inPsd").value;

	if (!email && !psd) {
		document.getElementById("errMsg").innerHTML = "Please enter in your email and password";
	} else if (!email && psd) {
		document.getElementById("errMsg").innerHTML = "Please enter in your email";
	} else if (email && !psd) {
		document.getElementById("errMsg").innerHTML = "Please enter in your password";
	} else if (email && psd) {
		document.getElementById("loginForm").submit();
	}
}



//We make sure that there are no digit in the name
function nodigit() {
	var name = document.getElementById("name").value;
	let hasnum = /\d/.test(name);
	if (hasnum) {
		document.getElementById("errName").innerHTML = "Please remove any digits in your name";
	} else {
		document.getElementById("errName").innerHTML = "";
	}
}


//To make sure that the information entered is correct in feedback
function valid() {



	var valid = true;


	// validate name
	var name = document.getElementById("name").value;
	if (!name) {
		valid = false;
		document.getElementById("errName").innerHTML = "Please enter in your Name";

	}
	else {
		document.getElementById("errName").innerHTML = "";

	}


	//validate email
	if (document.getElementById("email").value.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) != 0) {
		valid = false;
		document.getElementById("errEmail").innerHTML = "Please enter in your email";

	}
	else {
		document.getElementById("errEmail").innerHTML = "";

	}



	//validate Address
	var adr = document.getElementById("Address").value;
	if (!adr) {
		valid = false;
		document.getElementById("errAddress").innerHTML = "Please enter in your Address";


	}
	else {
		document.getElementById("errAddress").innerHTML = "";

	}



	//validate topic
	if (document.getElementById("topic").value == "Select a topic") {
		valid = false;
		document.getElementById("errtopic").innerHTML = "Please Choose a Topic ";

	}
	else {
		document.getElementById("errtopic").innerHTML = "";

	}


	//validate feedback
	var feed = document.getElementById("feedback").value;
	if (!feed) {
		valid = false;
		document.getElementById("errFeedback").innerHTML = "Please enter in your feedback";

	}
	else {
		document.getElementById("errFeedback").innerHTML = "";

	}

	if (valid == false) {
		return false;
	}
	else {
		return true;
	}

}
function change_back(elem) {
	elem.style.backgroundColor = 'white';
	elem.style.color = 'black';
}