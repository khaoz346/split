//Create class for offer panels

function OfferInfo (id, brandImage, brandName, referralTitle, splitAmount, postDate) {
  this.id = id;
  this.brandImage = brandImage;
  this.brandName = brandName;
  this.referralTitle = referralTitle;
  this.splitAmount = splitAmount,
  this.postDate = postDate
}

//Initialize offer panel object

var offerPanel1 = new OfferInfo (1, "chase-logo.png", "Chase", "20,000 Bonus Point Reward for Referring Approved Business", 100, "Feb 2019");

//Load panels



function searchIconMouseOver() {
  searchIcon = document.getElementsByClassName("nav-li-primary-form")[0];
  searchIcon.classList.toggle("nav-li-primary-form-special");
}

function searchIconMouseOut() {
  searchIcon = document.getElementsByClassName("nav-li-primary-form")[0]
  searchIcon.classList.toggle("nav-li-primary-form-special");
}
