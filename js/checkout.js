
// Exercise 7
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");

	// Validate fields entered by the user: name, phone, password, and email
	const form = document.querySelector(".form");

	const regExp = {
		name: /^[a-zA-ZÀ-ÿ\s]{3,}$/,
		email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{3,}$/,
		password: /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]{4,8}$/,
		phone:/^([\d]){9,}$/
	}

	if (fName.value == "" || !regExp.name.test(fName.value)) {
		error++;
		fName.classList.add("is-invalid");
		fName.classList.remove("is-valid");
		errorName.style.display = "block";
	} else {
		fName.classList.add("is-valid");
		fName.classList.remove("is-invalid");
		errorName.style.display = "none";
	}

	if (fEmail.value == "" || !regExp.email.test(fEmail.value)) {
		error++;
		fEmail.classList.add("is-invalid");
		fEmail.classList.remove("is-valid");
		errorEmail.style.display = "block";
	} else {
		fEmail.classList.add("is-valid");
		fEmail.classList.remove("is-invalid");
		errorEmail.style.display = "none";
	}

	if (fAddress.value == "" || fAddress.value.length < 3) {
		error++
		fAddress.classList.add("is-invalid");
		fAddress.classList.remove("is-valid");
		errorAddress.style.display = "block";
	} else {
		fAddress.classList.add("is-valid");
		fAddress.classList.remove("is-invalid");
		errorAddress.style.display = "none";
	}

	if (fLastN.value == "" || fLastN.value.length < 3) {
		error++
		fLastN.classList.add("is-invalid");
		fLastN.classList.remove("is-valid");
		errorLastN.style.display = "block";
	} else {
		fLastN.classList.add("is-valid");
		fLastN.classList.remove("is-invalid");
		errorLastN.style.display = "none";
	}

	if (fPassword.value == "" || !regExp.password.test(fPassword.value)) {
		error++
		fPassword.classList.add("is-invalid");
		fPassword.classList.remove("is-valid");
		errorPassword.style.display = "block";
	} else {
		fPassword.classList.add("is-valid");
		fPassword.classList.remove("is-invalid");
		errorPassword.style.display = "none";
	}

	if (fPhone.value == "" || !regExp.phone.test(fPhone.value)) {
		error++
		fPhone.classList.add("is-invalid");
		fPhone.classList.remove("is-valid");
		errorPhone.style.display = "block";
	} else {
		fPhone.classList.add("is-valid");
		fPhone.classList.remove("is-invalid");
		errorPhone.style.display = "none";
	}

	if (error > 0) {
		alert("Error");
	} else {
		alert("OK");
	}
	
	form.addEventListener("submit", (e) => {
		e.preventDefault();
	})
}