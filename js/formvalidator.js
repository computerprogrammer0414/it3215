const myForm = document.querySelector("form");
        const inputs = document.querySelectorAll("input");
        const errors = document.querySelectorAll(".error");
const required = ["username", "password",  "firstname","lastname", "email","phone"];
myForm.addEventListener("submit", validation);

        function validation(e) {
            let data = {};
            e.preventDefault();
            errors.forEach(function (item) {
                item.classList.add("hide");
            })
            let error = false;
            inputs.forEach(function (el) {
                let tempName = el.getAttribute("name");
                if (tempName != null) {
                    el.style.borderColor = "#ddd";
                    if (el.value.length == 0 && required.includes(tempName)) {
                        addError(el, "Required Field", tempName);
                        error = true;
                    }

                    if (tempName == "password") {
                        let exp = /[A-Za-z0-9]+$/;
                        let result = exp.test(el.value);
                        if (!result) {
                            addError(el, "Only numbers and Letters", tempName);
                            error = true;
                        }
                        if (!(el.value.length > 3 && el.value.length < 9)) {
                            addError(el, "Needs to be between 3-8 characters", tempName);
                            error = true;
												}
                    }

                    if (tempName == "email") {
                        let exp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
                        let result = exp.test(el.value);
                        if (!result) {
                            addError(el, "Invalid Email", tempName);
                            error = true;
                        }
                    }
                   
                    if (tempName == "phone") {
                        let exp = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
                        let result = exp.test(el.value);
                        if (!result) {
                            addError(el, "Invalid Phone", tempName);
                            error = true;
                        }
                    }

                   
                    data[tempName] = el.value;
                }
            })
            if (!error) {
                myForm.submit();
            }
        }

        function addError(el, mes, fieldName) {
            let temp = el.nextElementSibling;
            temp.classList.remove("hide");
            temp.textContent = fieldName.toUpperCase() + " " + mes;
            el.style.borderColor = "red";
            el.focus();
				}
				
			
			
		