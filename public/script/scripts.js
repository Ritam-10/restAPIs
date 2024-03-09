document.addEventListener("DOMContentLoaded", function () {
  const jokeTypeSelect = document.getElementById("jokeType");
  const singleJokeFields = document.getElementById("singleJokeFields");
  const twopartJokeFields = document.getElementById("twopartJokeFields");

  // Initial setup based on default value
  toggleJokeFields();

  // Add an event listener to the jokeType select element
  jokeTypeSelect.addEventListener("change", toggleJokeFields);

  // Function to toggle between single and twopart joke fields
  function toggleJokeFields() {
      console.log("Event listener fired!");
      const selectedJokeType = jokeTypeSelect.value;

      console.log("Selected joke type:", selectedJokeType);

      // Hide both fields initially
      singleJokeFields.style.display = "none";
      twopartJokeFields.style.display = "none";

      // Show the selected joke type field
      if (selectedJokeType === "single") {
          console.log("Displaying single joke fields");
          singleJokeFields.style.display = "block";
      } else if (selectedJokeType === "twopart") {
          console.log("Displaying twopart joke fields");
          twopartJokeFields.style.display = "block";
      }
  }
});
