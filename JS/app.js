'use strict';

var pictureParent = document.getElementById('pictures');
var imageLeft = document.getElementById('picLeft');
var imageCenter = document.getElementById('picCenter');
var imageRight = document.getElementById('picRight');
var currentPic = [];
var allPictureData = [];

//Can't use zero since it's an index position.
var leftIndex = null;
var rightIndex = null;
var centerIndex = null;

var imageVote = 0;
// var totalRounds = 5;

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
  do{ var randomNumber = Math.floor(Math.random() * AdImage.allImages.length);
  } while(currentPic.includes(randomNumber)) //got major help from Anthony on this.
  return randomNumber;
}
// closing comment - get a random number function-----------------------------


//Create-picture-clicking function. Must be defined before our event listener
//when you pass a function as an argument, it's called a callback
var handleClickOnImage = function(event){ //this an anonymous function attached to a variable?? normally an anonymous function runs immediatly
    var imageClicked = event.target.id; // mere functions will be hoisted to top but variables with functions do not hoist.

    if(imageClicked === 'picLeft' || imageClicked === 'picRight' || imageClicked === 'picCenter'){
        // console.log('made into the first!!');
        
        imageVote++;
        // need to increment imageVote by one
        if(imageClicked === 'picLeft'){
        // do logic to increment the number
        AdImage.allImages[leftIndex].clicked++;
        // console.log('left pic selected');

        } else if(imageClicked === 'picRight'){
        AdImage.allImages[rightIndex].clicked++;
        // console.log('right pic selected');
        } else if(imageClicked === 'picCenter'){
            AdImage.allImages[centerIndex].clicked++;
            // console.log('center pic selected');
            }

    } else{
        alert('You didn\'t select an image. ');
    } 
    
    // currentPic = [leftIndex, rightIndex, centerIndex];
    // console.log(currentPic);
    
    if(imageVote === 25){
            pictureParent.removeEventListener('click', handleClickOnImage);
            //console.log("you completed the voting")
            // output to the browser the results
            
            for(var i=0; i < AdImage.allImages.length; i++) {
            var pix = AdImage.allImages[i];
            // console.log(`${pix.name} received ${pix.clicked} votes with ${pix.views} views`);
            // var node = document.createElement("li");                 // Create a <li> node ---taken from w3 schools
            // var textnode = document.createTextNode(`${pix.name} received ${pix.clicked} votes with ${pix.views} views`);         // Create a text node
            // node.appendChild(textnode);                              // Append the text to <li>
            // document.getElementById("outputList").appendChild(node);     // Append <li> to <ul> with id="myList"
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

    } while(leftIndex === rightIndex || leftIndex === centerIndex || rightIndex === centerIndex){
        imageLeft.src = AdImage.allImages[leftIndex].image;
        imageRight.src = AdImage.allImages[rightIndex].image;
        imageCenter.src = AdImage.allImages[centerIndex].image;

        }
        AdImage.allImages[leftIndex].views++;
        AdImage.allImages[rightIndex].views++;
        AdImage.allImages[centerIndex].views++;

        currentPic = [leftIndex, rightIndex, centerIndex];
        //console.log(currentPic);
    }



//===================LOCAL STORAGE============================


function storeData(){
var convertedData = JSON.stringify(AdImage.allImages);
localStorage.setItem('practice-data', convertedData);
// console.log(convertedData)
}

function getStoredDataAndPush(){
    // if(localStorage.length > 0){
    //retrieve data from localStorage
    //then convert - de-stringify with parse
    //then push to either chart or store object

    var retDataVariable = localStorage.getItem('practice-data');
    var deconvertedData = JSON.parse(retDataVariable);
  
    // for(var i = 0; i < deconvertedData.length; i++){
    //    new AdImage(deconvertedData[i].name, deconvertedData[i].image);
    //    AdImage.allImages[i].clicked = deconvertedData[i].clicked;
    //    AdImage.allImages[i].views = deconvertedData[i].views;
       AdImage.allImages = deconvertedData;
    }
    
// }
// }




//===============================================================

// Instantiations------------------------------------------------
AdImage.allImages = [];

// if(localStorage < 1) {
new AdImage('banana-pic', "img/banana.jpg");
new AdImage('bathroom-pic', "img/bathroom.jpg");
new AdImage('boots-pic', "img/boots.jpg");
new AdImage('breakfast-pic', "img/breakfast.jpg");
new AdImage('bubblegum pic', "img/Bubblegum.jpg");
new AdImage('wine-glass pic', "img/wine-glass.jpg");
new AdImage('chair pic', "img/chair.jpg");
new AdImage('cthulhu pic', "img/cthulhu.jpg");
new AdImage('dog-duck pic', "img/dog-duck.jpg");
new AdImage('dragon pic', "img/dragon.jpg");
new AdImage('pen pic', "img/pen.jpg");
new AdImage('pet sweep pic', "img/pet-sweep.jpg");
new AdImage('scissors pic', "img/scissors.jpg");
new AdImage('shark pic', "img/shark.jpg");
new AdImage('sweep pic', "img/sweep.png");
new AdImage('tauntaun pic', "img/tauntaun.jpg");
new AdImage('unicorn pic', "img/unicorn.jpg");
new AdImage('usb pic', "img/usb.gif");
new AdImage('water-can pic', "img/water-can.jpg");
new AdImage('bag pic', "img/bag.jpg");
// }else{ 
// getStoredDataAndPush();
// }


//==================================================
//===================CHART===========================
//===================================================

function renderChart() {

    var labelData = [];
    var clickData = [];
    var viewData = [];

  for (var i= 0; i< AdImage.allImages.length; i++){
    labelData.push(AdImage.allImages[i].name);
    clickData.push(AdImage.allImages[i].clicked);
    viewData.push(AdImage.allImages[i].views);
     }
    //   var ctx = document.getElementById('whiteboard').getContext('2d');
    

var ctx = document.getElementById('whiteboard').getContext('2d');
// console.log(clickData, viewData);
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labelData,
        datasets: [{
            label: '# of Votes',
            data: clickData,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',      
            borderWidth: 1
        }, {
            label: '# of Views',
            data: viewData,
            backgroundColor: 
                'rgba(54, 162, 235, 0.2)',
            borderColor: 
                'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }],        
    },
    
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    
});
}


//create click data and passes that into a chart.JS constructor
var button = document.getElementById('button');
button.addEventListener('click', renderChart);
button.addEventListener('click', storeData);
// button.addEventListener('click', updateChart);
var ctx = document.getElementById('whiteboard').getContext('2d');




//======================EXECUTABLE CODE=============================================
renderAdImages();
getStoredDataAndPush();
pictureParent.addEventListener('click', handleClickOnImage);
