
//Select all drop down buttton elements
var dropdownBtnArray = document.querySelectorAll(".dropdown-btn");

//Add event listener for clicks to show or hide drop down menus
for (let i = 0; i<dropdownBtnArray.length; i++){
  dropdownBtnArray[i].addEventListener("click", function(elem){
    this.nextElementSibling.classList.toggle("show");
  })
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//Get next sibling that matches html querySelector

function getNextSibling(elem, selector) {

	// Get the next sibling element
	var sibling = elem.nextElementSibling;

	// If the sibling matches our selector, use it
	// If not, jump to the next sibling and continue the loop
	while (sibling) {
		if (sibling.matches(selector)) return sibling;
		sibling = sibling.nextElementSibling;
	}
};


// When clicking the drop down content, add that selection to the input field
var dropdownContent = document.querySelectorAll(".dropdown-content p");

for (let i = 0; i<dropdownContent.length; i++){
  dropdownContent[i].addEventListener("click", function(){
    var parentElem = this.parentElement;
    var selection = this.innerText;
    var formField = getNextSibling(parentElem, '.form-field');
    formField.value = selection;
    formField.style.color = '#647b7b';
    formField.style.fontSize = '1em'
  })
}

// Conditional Label logic

var categoryDict = {'Financial Services': ['Credit Cards', 'Loans', 'Taxes', 'Budgeting']};

console.log(categoryDict['Financial Services'][0]);
