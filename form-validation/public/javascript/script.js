$(document).ready(function(){
	const inputs = document.querySelectorAll("input");
	const labels = document.querySelectorAll('p.formLabel');
	const patterns = {
		telephone: /\d{11}$/,
		username: /^[a-z\d]{5,12}$/i,
		password: /^[\d\w@-]{8,20}$/i,
		slug: /^[a-z\d-]{8,20}$/,
		email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
	};

	inputs.forEach(function(input) {
		input.addEventListener("keyup", function(e) {
			validate(e.target, patterns[e.target.attributes.name.value]);
		});
		input.addEventListener("focus", function(e) {
			animateLabelUp(e.target);
		})
		input.addEventListener("blur", function(e) {
			animateLabelDown(e.target);
		})
	});
	
	labels.forEach(function(label) {
		const labelInput = label.parentElement.querySelector(".form-style")
		label.addEventListener("click", function (e) {
			animateLabelUp(labelInput);
		})
	});

	function validate(field, regexPattern) {
		if (regexPattern.test(field.value)) {
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
});