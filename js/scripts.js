function hideResultsAndError() {
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("male").setAttribute("class", "hidden");
  document.getElementById("female").setAttribute("class", "hidden");
}

window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResultsAndError();
    const age = parseInt(document.querySelector("input#age").value);
    const gender = document.querySelector("input#gender").value;

    if (!age || !gender) {
      document.getElementById("error-message").removeAttribute("class");
    } else {
      if (age >= 21 && gender == "male") {
        document.getElementById("male").removeAttribute("class");
      } else if (age >= 21 && gender == "female") {
        document.getElementById("female").removeAttribute("class");
      } else {
        document.getElementById("no").removeAttribute("class");
      }
    }
  }
}