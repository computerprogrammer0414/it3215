        
/* -------------- Jaime C Smith - formvalidator.js - 06/12/2020 ------------- */
        
/* -- Creating all Variables to connect elements, to be used in this project - */
        const myForm = document.querySelector("form");
/* ------------------- Gathering all inputs in the webform ------------------ */
        const inputs = document.querySelectorAll("input");
        const errors = document.querySelectorAll(".error"); // Error messages information here
/* ----------- To list all elements with required fields list here ---------- */
        const required = ["username", "password",  "firstname","lastname", "email","phone"];
/* -------------- Adding an event listener to the Myform object ------------- */
        myForm.addEventListener("submit", validation);
/* --------------------- Function Validation STARTS HERE -------------------- */
        function validation(e) {
            let data = {};
            //To prevent the default action of submitting the form when refreshing
            e.preventDefault(); 
            errors.forEach(function (item) {
                item.classList.add("hide");
            })
            let error = false;
/* ------To grab inputs objects and loop through all of the values that are available------- */
            inputs.forEach(function (el) {
                let tempName = el.getAttribute("name"); //Setting up a temporary name variable
                if (tempName != null) {
                    el.style.borderColor = "#ddd";
/* ---- If the field is empty equals to 0 then present with error message --- */
                    if (el.value.length == 0 && required.includes(tempName)) {
                        addError(el, "Required Field", tempName);
                        error = true;
                    }
/* ----------------------- PASSWORD VALIDATION SECTION ---------------------- */
                    if (tempName == "password") {
                        let exp = /[A-Za-z0-9]+$/;
                        let result = exp.test(el.value);
                        if (!result) {
                            addError(el, "Only numbers and Letters", tempName);
                            error = true;
                        }
                        if (!(el.value.length > 4 && el.value.length < 10)) {
                            addError(el, "Needs to be between 4-10 characters", tempName);
                            error = true;
												}
                    }
/* ------------------------ EMAIL VALIDATION SECTION ------------------------ */
                    if (tempName == "email") {
                        let exp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
                        let result = exp.test(el.value);
                        if (!result) {
                            addError(el, "Invalid Email", tempName);
                            error = true;
                        }
                    }
/* ------------------------ PHONE VALIDATION SECTION ------------------------ */
                    if (tempName == "phone") {
                        let exp = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
                        let result = exp.test(el.value);
                        if (!result) {
                            addError(el, "Invalid Phone", tempName);
                            error = true;
                        }
                    }
/* -------------- If NO ERRORS FOUND THEN ADD TO DATA[TEMPLATE] ------------- */
                      data[tempName] = el.value;
                }
            })
/* --------------- To Submit form dynamically with JaVaScript --------------- */
            if (!error) {
                myForm.submit();
            }
        }
/* ----------- Function to include all online validation messages ----------- */
/* ------------------------ MESSAGE HANDLER FUNCTION ------------------------ */
            function addError(el, mes, fieldName) {
            //Temporary variable that can allow us to select the next element sibiling
            let temp = el.nextElementSibling; 
            temp.classList.remove("hide");
            temp.textContent = fieldName.toUpperCase() + " " + mes;
            el.style.borderColor = "red";
            el.focus(); //to apply focus to elements
				}
				
			
			
		