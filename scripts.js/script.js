


// Location-Changer

// When the user clicks on the flag a drop down menu appears
// When they click outside of the menu it goes away

const locationChanger = document.querySelector(".location-changer-drop-down");
const imagelocationChanger = locationChanger.querySelector("img");
const dropdownLocationMenu = locationChanger.querySelector(
  ".location-changer-drop-down-menu"
);

const handleLocationChange = () => {
  console.log('kkkk');
  if (dropdownLocationMenu.style.display === "block") {
    dropdownLocationMenu.style.position = "absolute";
    dropdownLocationMenu.style.display = "";
  } else {
    dropdownLocationMenu.style.display = "block";
    dropdownLocationMenu.style.position = "absolute";
  }
};

imagelocationChanger.addEventListener("click", handleLocationChange);

// Able to select one of three countries
// Once a country is selected the placeholder image changes
// NEXT STEPS: Prices on website change

const selectedFlag = document.querySelector(".selected");
const selectedFlagimage = selectedFlag.querySelector("img");
const ukFlag = document.querySelector(".uk-flag");
const usFlag = document.querySelector(".usa-flag");
const canadaFlag = document.querySelector(".canadian-flag");
const nigeriaFlag = document.querySelector(".nigerian-flag");

const handleLocationFlagClick = () => {
  usFlag.addEventListener("click", () => {
    selectedFlagimage.className = "usa-flag";
    selectedFlagimage.src = "/assets/usaFlag.png";
    selectedFlagimage.alt = "usa flag";
  });
  ukFlag.addEventListener("click", () => {
    selectedFlagimage.className = "united-kingdom-flag";
    selectedFlagimage.src = "/assets/uk.png";
    selectedFlagimage.alt = "united kingdom flag";
  });
  canadaFlag.addEventListener("click", () => {
    selectedFlagimage.className = "canadian-flag";
    selectedFlagimage.src = "/assets/canadianflag.png";
    selectedFlagimage.alt = "canada flag";
  });
  nigeriaFlag.addEventListener("click", () => {
    selectedFlagimage.className = "nigerian-flag";
    selectedFlagimage.src = "/assets/nigerianFlag.png";
    selectedFlagimage.alt = "nigerian flag";
  });
};

selectedFlag.addEventListener("click", handleLocationFlagClick);

// Audio Off
// When the user clicks on the audio off it changes to audio on and reads the page for non visual readers

/* 

Search Button
Listen for click then create a function to show horizontal line 
Listen for click so when the user clicks on the search icon it opens then closes (display:none, display:block)
Create json file with product information (push or upload?) 
listen for submit when the user presses submit to run a function that 
(HandleSubmit)
  - Set deafult so page does not refresh on submit 
(displaySearchResults)
  - No results if the search length is 0 (create an empty div.searchResults to display)
  - No results if input doesn't match any products (displaySearchResults, textContent)
  - Gets searchInput (define this and use .value) and loops through the product data to find a match (this will be out filtered results)
  - Grab search results (filtered array object) and loop through it using forEach to display it on the page using append (createElement to create a div to append it in? )


*/

//Nav

// listen for scroll on the window when its past a certain pixel make the nav fixed

// When user hovers on nav option drop down menu comes up, when they unhover click out of it it closes

// Make the fixed drop down element stay stuck to the skincare nav button

//When the user clicks on other options it takes them to seperate pages

const skincareButtonNav = document.querySelector(".skincare-nav-button");
const skincareDropDownMenu = document.querySelector(".skincare-drop-down-menu");

let isSkincareMenuHovered = false;

const handleSkinCareMouseEnter = () => {
  skincareDropDownMenu.style.display = "block";
  skincareDropDownMenu.style.position = "absolute";
};

const handleSkinCareMouseLeave = () => {
  if (!isSkincareMenuHovered) {
    skincareDropDownMenu.style.display = "none";
    skincareDropDownMenu.style.position = "";
  }
};

skincareButtonNav.addEventListener("mouseenter", () => {
  isSkincareMenuHovered = true;
  handleSkinCareMouseEnter();
});

skincareButtonNav.addEventListener("mouseleave", () => {
  isSkincareMenuHovered = false;
  setTimeout(() => {
    handleSkinCareMouseLeave();
  }, 200);
});

skincareDropDownMenu.addEventListener("mouseenter", () => {
  isSkincareMenuHovered = true;
});

skincareDropDownMenu.addEventListener("mouseleave", () => {
  isSkincareMenuHovered = false;
  handleSkinCareMouseLeave();
});

// Add to Cart
