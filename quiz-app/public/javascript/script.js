
const inputs = document.querySelectorAll("input");
const labels = document.querySelectorAll('p.formLabel');
const patterns = {
	telephone: /^\(*\+*[1-9]{0,3}\)*-*[1-9]{0,3}[-. /]*\(*[2-9]\d{2}\)*[-. /]*\d{3}[-. /]*\d{4} *e*x*t*\.* *\d{0,4}$/,
	username: /^[a-z\d]{5,12}$/i,
	password: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d]).{8,35}$/,
	slug: /^[a-z\d-]{8,20}$/,
	email: /^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
};

inputs.forEach(function(input) {
	input.addEventListener("keyup", function(action) {
		validate(action.target, patterns[action.target.attributes.name.value]);
	});
	input.addEventListener("focus", function(action) {
		animateLabelUp(action.target);
	})
	input.addEventListener("blur", function(action) {
		animateLabelDown(action.target);
	})
});

labels.forEach(function(label) {
	const labelInput = label.parentElement.querySelector(".form-style")
	label.addEventListener("click", function () {
		animateLabelUp(labelInput);
	})
});

function validate(field, regexPattern) {
	if (regexPattern.test(field.value)) {
		field.classList.remove("invalid");
		field.classList.add("valid");
	} else {
		field.classList.add("invalid");
	}
}

function animateLabelUp(field) {
	const parentDiv = field.parentElement
	parentDiv.querySelector("p.formLabel").classList.add('formTop');
	document.querySelector("div#formWrapper").classList.add('darken-bg');
}

function animateLabelDown(field) {
	if (field.value.length == 0) {
		const parentDiv = field.parentElement
		parentDiv.querySelector("p.formLabel").classList.remove('formTop');
		document.querySelector("div#formWrapper").classList.remove('darken-bg');
	}
}
