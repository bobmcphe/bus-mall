'use strict';

var pictureParent = document.getElementById('pictures');

// var adImagesTag = document.getElementById('adImages');
var imageLeft = document.getElementById('picLeft');
var imageCenter = document.getElementById('picCenter');
var imageRight = document.getElementById('picRight');

//Can't use zero since it's an index position.
var leftIndex = null;
var rightIndex = null;
var centerIndex = null;

// var picssArray = []

var imageVote = 0;
var totalRounds = 5;

//My constructor function--------------------------------------------------------
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
// closing comment - get a random number function-----------------------------


//Create-picture-clicking function. Must be defined before our event listener
//when you pass a function as an argument, it's called a callback
var handleClickOnImage = function(event){
    console.log(event.target.id, 'inside handle click');
    var imageClicked = event.target.id;

    if(imageClicked === 'picLeft' || imageClicked === 'picRight' || imageClicked === 'picCenter'){
        // console.log('made into the first!!');
        
        imageVote++;
        // need to increment imageVotes clicked by one
        if(imageClicked === 'picLeft'){
        // do logic to incrament the number
        AdImage.allImages[leftIndex].clicked++;
        console.log('left pic selected');

        } else if(imageClicked === 'picRight'){
        AdImage.allImages[rightIndex].clicked++;
        console.log('right pic selected');
        } else if(imageClicked === 'picCenter'){
            AdImage.allImages[centerIndex].clicked++;
            console.log('center pic selected');
            }

    } else{
        alert('you didn\'t select an image');
    } 
    
    console.log(AdImage.allImages[leftIndex]);
    console.log(AdImage.allImages[rightIndex]);
    
    if(imageVote === 5){
            // remove
            pictureParent.removeEventListener('click', handleClickOnImage);
            console.log("you completed the voting")
            // output to the browser the results
            
            for(var i=0; i < AdImage.allImages.length; i++) {
            var pix = AdImage.allImages[i];
            console.log(`${pix.name} received ${pix.clicked} votes with ${pix.views} views`);
            }
                } else{
                    renderAdImages();
                }
    }
//closing comment - Create-picture-clicking function. Must be defined before our event listener

function renderAdImages(){
  do{
    leftIndex = randomPic();
    rightIndex = randomPic();
    centerIndex = randomPic();
    } while(leftIndex === rightIndex){
        imageLeft.src = AdImage.allImages[leftIndex].image;
        imageRight.src = AdImage.allImages[rightIndex].image;
        imageCenter.src = AdImage.allImages[centerIndex].image;

    }
  AdImage.allImages[leftIndex].views++;
  AdImage.allImages[rightIndex].views++;
  AdImage.allImages[centerIndex].views++;
}


// Instantiations------------------------------------
AdImage.allImages = [];
// var thirdGoat = new Goat('third goat', "https://www.aces.edu/wp-content/uploads/2018/07/Scapie_Health.jpg");
//we actually don't need the above instantiation, but can do as follows:

new AdImage('first pic', "img/banana.jpg");
new AdImage('second pic', "img/bathroom.jpg");
new AdImage('third pic', "img/boots.jpg");
new AdImage('fourth pic', "img/breakfast.jpg");
new AdImage('fifth pic', "img/Bubblegum.jpg");
new AdImage('seventh pic', "img/chair.jpg");
new AdImage('eighth pic', "img/cthulhu.jpg");
new AdImage('ninth pic', "img/dog-duck.jpg");
new AdImage('tenth pic', "img/dragon.jpg");
new AdImage('eleventh pic', "img/pen.jpg");
new AdImage('eleventh pic', "img/pet-sweep.jpg");
new AdImage('eleventh pic', "img/scissors.jpg");
new AdImage('eleventh pic', "img/shark.jpg");
new AdImage('eleventh pic', "img/sweep.png");
new AdImage('eleventh pic', "img/tauntaun.jpg");
new AdImage('eleventh pic', "img/unicorn.jpg");
new AdImage('eleventh pic', "img/usb.gif");
new AdImage('eleventh pic', "img/water-can.jpg");
new AdImage('eleventh pic', "img/wine-glass.jpg");
new AdImage('twelfth pic', "img/bag.jpg");


renderAdImages();

pictureParent.addEventListener('click', handleClickOnImage);