document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");
  const strengthMsg = document.getElementById("strength-msg");
  const form = document.getElementById("admissions-form");

 form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const programme = document.getElementById("programmes").value;
    const message = document.getElementById("message").value;

    if (name && email && programme && message) {
      alert ("Successful registration! \n Please pay attention to our admission notice!"); 

    } else {
      alert("Please complete the form!");
    }
  });

  passwordInput.addEventListener("input", function() {
    const val = passwordInput.value;
    let strength = "";

    if (val.length < 6) {
        strength = "Too short";
        strengthMsg.style.color = "red";
      } else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(val)) {
        strength = "Strong password";
        strengthMsg.style.color = "green";
      } else if (/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(val)) {
        strength = "Medium strength";
        strengthMsg.style.color = "orange";
      } else {
        strength = "Weak password";
        strengthMsg.style.color = "red";
      }

      strengthMsg.textContent = strength;
  });
});
