const inputs = document.querySelectorAll("input");

const patterns = {
  telephone: /\d{11}$/,
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\d\w@-]{8,20}$/i,
  slug: /^[a-z\d-]{8,20}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
  //             yourname @ domain   .  com          ( .uk )
};

function validate(field, regexPattern) {
  if (regexPattern.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

inputs.forEach(function(input) {
  input.addEventListener("keyup", function(e) {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
