const registrationForm = document.getElementById("registrationForm");
const displayData = document.getElementById("displayData");

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const userData = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;

    displayData.innerHTML += userData;
    registrationForm.reset();
});
