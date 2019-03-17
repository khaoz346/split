
// On mouse over, add blur and view-details link
var panelArray = document.querySelectorAll('.offer-panel');

// for (var i = 0; i<panelArray.length; i++){
//   panelArray[i].addEventListener('mouseover', function() {
//     if($(this).find('.blur').length == 0) {
//       var blur = document.createElement('div');
//       blur.className = 'blur';
//       blur.innerHTML =
//       '<a href=index.html class="view-details">View Details<a>'
//       console.log($(this));
//       $(this).prepend(blur);
//     }
//     else {
//       $(this).find('.blur').show();
//     }
//   });};

  // for (var i = 0; i<panelArray.length; i++){
  //   panelArray[i].addEventListener('mouseout', function() {
  //     this.children[0].style.display = 'none'});
// }
//
// $('.offer-panel').on( "mouseover", function() {
//   if($(this).find('.blur').length == 0) {
//     var blur = document.createElement('div');
//     blur.className = 'blur';
//     blur.innerHTML =
//     '<a href=index.html class="view-details">View Details<a>'
//     console.log($(this));
//     $(this).prepend(blur);
//   }
//   else {
//     $(this).find('.blur').show();
//   }
// });
//
// $('.offer-panel').on( "mouseout", function() {
//   $(this).find('.blur').hide();
// });

// On mouse over for search icon, change color
function searchIconMouseOver() {
  searchIcon = document.getElementsByClassName("nav-li-primary-form")[0];
  searchIcon.classList.toggle("nav-li-primary-form-special");
}

function searchIconMouseOut() {
  searchIcon = document.getElementsByClassName("nav-li-primary-form")[0]
  searchIcon.classList.toggle("nav-li-primary-form-special");
}
