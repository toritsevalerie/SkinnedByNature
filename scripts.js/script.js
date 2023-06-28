// Location-Changer
// When the user clicks on the flag a drop down menu appears and they are able to select one of three countries
//Once a country is selected the placeholder image changes and so does the prices on the website

// Audio Off
// When the user clicks on the audio off it changes to audio on and reads the page for non visual readers

// Search-button
// When the user clicks on the search icon a horizontal line appears (form) to input search and products shows accordingly

//Nav
// When user clicks on nav option drop down menu comes up, when they click out of it it closes
// NEXT STEPS: **Make the fixed drop down element stay stuck to the skincare nav button
//When the user clicks on other options it takes them to seperate pages

const navigationBar = document.querySelector("nav");
const handleSkincareNavButtonClick = (event) => {
  const userClick = event.target;
  const skincareDropDownMenu = document.querySelector(
    ".skincare-drop-down-menu"
  );
  console.log(navigationBar);
  console.log(userClick);

  if (userClick.classList.contains("skincare-nav-button")) {
    skincareDropDownMenu.style.display = "block";
    skincareDropDownMenu.style.position = "fixed";
  } else if (!userClick.classList.contains("skincare-nav-button")) {
    skincareDropDownMenu.style.display = "none";
    skincareDropDownMenu.style.position = "";
  }
};

navigationBar.addEventListener("click", handleSkincareNavButtonClick);
document.addEventListener("click", handleSkincareNavButtonClick);
