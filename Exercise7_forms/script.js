const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
      
    //clearErrors();

    let firstName = document.getElementById("first-name").value.trim();
    let lastName = document.getElementById("last-name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    try {
        if (firstName === "") {
            throw new Error("The first name is required");
        };

        if (lastName === "") {
            throw new Error("The last name is required");
        };

        if (email === "" || !email.match(/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/)){
            throw new Error("The email address you entered is invalid.");
        }

        if (phone === "" || !email.match(/^(0[1-9]\d{8}|(\+33|0033)[1-9]\d{8})$/)) {
            throw new Error("The phone number you entered is invalid.");
        }

    } catch (error) {
        displayError(error.message);

    } finally {
        console.log("All checks completed");
    }
})

function displayError(message) {
    alert(message);
}