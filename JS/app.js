'use strict';

var pictureParent = document.getElementById('pictures');

var adImagesTag = document.getElementById('adImages');
var imageLeft = document.getElementById('picLeft');
var imageCenter = document.getElementById('picCenter');
var imageRight = document.getElementById('picRight');

//Can't use zero since it's an index position.
var leftIndex = null;
var rightIndex = null;
var centerIndex = null;

// var picssArray = []

var goatVotes = 0;
var totalRounds = 10;

function AdImage(name, image){
  this.name = name;
  this.image = image;
  this.views = 0;
  this.clicked = 0;

  AdImage.allImages.push(this); // basically like a global array, but can only be called through the constructor function
}


//get a random number function-----------------------------
function randomPic(){
  //inclusive to 0 exclusive to length, so, it's ok
  var randomNumber = Math.floor(Math.random() * AdImage.allImages.length);
  return randomNumber;
}



//Create our picture clicking function. Must be defined before our event listener
//when you pass a function as an argument, it's called a callback
var handleClickOnImage = function(event){
console.log(event.target.id);
var imageClicked = event.target.id;

if(imageClicked === 'imageLeft' || imageClicked === 'imageRight'){

    imageVote++;
    // need to incrament goat clicked by one
    if(imageClicked === 'imageLeft'){
      // do logic to incrament the number
      Goat.allImages[leftGoatIndex].clicked++;
    } else if(imageClicked === 'imageRight'){
      Goat.allImages[rightGoatIndex].clicked++;
    }
  } else{
    alert('you didn\'t select an image');
  }

   if(imageVote === 5){
    // remove
    adImagesTag.removeEventListener('click', handleClickOnGoat);
    console.log("you completed the voting")
    // output to the browser the results
    // "Sassy Goat received 4 votes with 5 views"
    for(var i=0; i < AdImage.allImages.length; i++)
    {
      var goat = AdImage.allImages[i];
      console.log(`${goat.name} received ${AdImage.clicked} votes with ${AdImage.views} views`);
    }
  } else{
    renderAdImages();
  }

}




function renderAdImages(){
  do{
    leftIndex = randomPic();
    rightIndex = randomPic();
  } while(leftIndex === rightIndex){
    imageLeft.src = AdImage.allImages[leftIndex].image;
    imageRight.src = AdImage.allImages[rightIndex].image;
  }
  AdImage.allImages[leftIndex].views++;
  AdImage.allImages[rightIndex].views++;
}


pictureParent.addEventListener('click', handleClickOnImage)


// Instantiations------------------------------------
AdImage.allImages = [];
// var thirdGoat = new Goat('third goat', "https://www.aces.edu/wp-content/uploads/2018/07/Scapie_Health.jpg");
//we actually don't need the above instantiation, but can do as follows:

new AdImage('fourth pic', "img/breakfast.jpg");

new AdImage('fifth pic', "img/Bubblegum.jpg");

new AdImage('sixth pic', "img/chair.jpg");

// new AdImage('seventh pic', "https://images2.minutemediacdn.com/image/upload/c_crop,h_843,w_1500,x_0,y_10/f_auto,q_auto,w_1100/v1555172614/shape/mentalfloss/iStock-177369626_1.jpg");

renderAdImages();



