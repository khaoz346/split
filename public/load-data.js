//Create class for offer details

function OfferDetails (id, brandImage, brandName, referralTitle, splitAmount, postDate) {
  this.id = id;
  this.brandImage = brandImage;
  this.brandName = brandName;
  this.referralTitle = referralTitle;
  this.splitAmount = splitAmount,
  this.postDate = postDate
}

//Initialize offer panel object

var offerPanel1 = new OfferDetails (1, "chase-ink-business-preferred.png", "Chase", "20,000 Bonus Point Reward for Referring Approved Business", 100, "Feb 2019");

//Create div for offer panel
function createOfferPanel (offerPanelObject) {
var div = document.createElement('div');
div.className = "offer-panel";
div.innerHTML =
    '<div class="blur">\
      <a href="index.html" class="view-details">View More</a>\
    </div>\
    <a href="index.html">\
      <div class="panel-image-box">\
        <img class = "panel-image" src="images/' + offerPanel1.brandImage + '" alt="">\
      </div>\
      <div class="panel-text-box">\
        <hr class="panel-hr">\
        <div class="panel-brand-name">'+ offerPanel1.brandName +'</div>\
        <div class="panel-referral-title">'+ offerPanel1.referralTitle +'</div>\
        <div class="split-box">\
          <h2 class="split-amount">'+ offerPanel1.splitAmount +'</h2>\
          <span class="split-text">split</span>\
        </div>\
        <span class="post-date">'+ offerPanel1.postDate +'</span>\
      </div>\
    </a>';

div.addEventListener('mouseover', function() {
  this.firstElementChild.style.display = 'block';
});

div.addEventListener('mouseout', function() {
  this.firstElementChild.style.display = 'none';
});
return div;
};

//Function to load panel object

function addOfferPanel() {
  document.querySelector(".main-content").prepend(createOfferPanel());
};

addOfferPanel();
addOfferPanel();
addOfferPanel();
addOfferPanel();
addOfferPanel();
addOfferPanel();
addOfferPanel();
addOfferPanel();

// When near bottom of document, add more offer panels
//Gets height needed to scroll to top PLUS current window height and see if that's close to the total document height
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
     var currentHeight = $(window).scrollTop();

     addOfferPanel();
     addOfferPanel();
     addOfferPanel();
     addOfferPanel();
     addOfferPanel();
     addOfferPanel();
     addOfferPanel();
     addOfferPanel();
     window.scrollTo(0,currentHeight);
   }
});
