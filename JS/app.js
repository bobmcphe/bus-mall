'use strict';

var pictureParent = document.getElementById('pictures');
var imageLeft = document.getElementById('picLeft');
var imageCenter = document.getElementById('picCenter');
var imageRight = document.getElementById('picRight');
var currentPic = ['our', 'place', 'holder'];
var allPictureData = [];
AdImage.allProducts = [];


//Can't use zero since it's an index position.
var leftIndex = 0;
var rightIndex = 0;
var centerIndex = 0;

var imageVote = 0;
// var totalRounds = 5;

//My constructor function--------------------------------------------------------
function AdImage(name, image){
  this.name = name;
  this.image = image;
  this.views = 0;
  this.clicked = 0;

  AdImage.allProducts.push(this); 
}
if(localStorage.getItem('practice-data')){
    getStoredDataAndPush();
} else {
new AdImage('banana', "img/banana.jpg");
new AdImage('bathroom', "img/bathroom.jpg");
new AdImage('boots', "img/boots.jpg");
new AdImage('breakfast', "img/breakfast.jpg");
new AdImage('bubblegum', "img/Bubblegum.jpg");
new AdImage('wine-glass', "img/wine-glass.jpg");
new AdImage('chair', "img/chair.jpg");
new AdImage('cthulhu ', "img/cthulhu.jpg");
new AdImage('dog-duck', "img/dog-duck.jpg");
new AdImage('dragon', "img/dragon.jpg");
new AdImage('pen', "img/pen.jpg");
new AdImage('pet-sweep', "img/pet-sweep.jpg");
new AdImage('scissors', "img/scissors.jpg");
new AdImage('shark', "img/shark.jpg");
new AdImage('sweep', "img/sweep.png");
new AdImage('tauntaun', "img/tauntaun.jpg");
new AdImage('unicorn', "img/unicorn.jpg");
new AdImage('usb', "img/usb.gif");
new AdImage('water-can', "img/water-can.jpg");
new AdImage('bag', "img/bag.jpg");
}    

//get a random number function-----------------------------
function randomPic(){
  //inclusive to 0 exclusive to length, so, it's ok
  var randomNumber = Math.floor(Math.random() * AdImage.allProducts.length);
    currentPic.push(randomNumber)
  if(currentPic.includes(randomNumber)){
    randomNumber = Math.floor(Math.random() * AdImage.allProducts.length);
    }
    if(currentPic.length > 6) {
        currentPic.shift();
    }
  return AdImage.allProducts[randomNumber];
}

// closing comment - get a random number function-----------------------------


//Create-picture-clicking function. Must be defined before our event listener
//when you pass a function as an argument, it's called a callback
function handleClickOnImage (event){ 
    if(imageVote === 25){
        pictureParent.removeEventListener('click', handleClickOnImage);
    }

    var imageClicked = event.target.id;

    if(imageClicked === 'pictures'){
        alert('You didn\'t select an image. ');
    }
        imageVote++;
        // need to increment imageVote by one
        // if(imageClicked === 'picLeft'){
        // allImages[leftIndex].clicked++;

        // } else if(imageClicked === 'picRight'){
        // allImages[rightIndex].clicked++;
        
        // } else if(imageClicked === 'picCenter'){
        //     allImages[centerIndex].clicked++;
        //     }

        for(var i = 0; i < AdImage.allProducts.length; i++){
            if(imageClicked === AdImage.allProducts[i].name){
                AdImage.allProducts[i].clicked++;
                console.log(AdImage.allProducts[i].clicked);
            }
        }
        renderAdImages();
    }
    
    // currentPic = [leftIndex, rightIndex, centerIndex];
    
    // if(imageVote === 25){
    //         pictureParent.removeEventListener('click', handleClickOnImage);
            // output to the browser the results
            
            // for(var i=0; i < AdImage.allImages.length; i++) {
            // var pix = AdImage.allImages[i];
            // console.log(`${pix.name} received ${pix.clicked} votes with ${pix.views} views`);
            // var node = document.createElement("li");                 // Create a <li> node ---taken from w3 schools
            // var textnode = document.createTextNode(`${pix.name} received ${pix.clicked} votes with ${pix.views} views`);         // Create a text node
            // node.appendChild(textnode);                              // Append the text to <li>
            // document.getElementById("outputList").appendChild(node);     // Append <li> to <ul> with id="myList"
            // }
            //     } else{
            //         renderAdImages();
            //     }
    
//closing comment - Create-picture-clicking function. Must be defined before our event listener

function renderAdImages(){
//   do{
    leftIndex = randomPic();
    rightIndex = randomPic();
    centerIndex = randomPic();

    imageLeft.src = leftIndex.image;
    imageRight.src = rightIndex.image;
    imageCenter.src = centerIndex.image;

    imageLeft.id = leftIndex.name;
    imageRight.id = rightIndex.name;
    imageCenter.id = centerIndex.name;


    leftIndex.views++;
    rightIndex.views++;
    centerIndex.views++;


    // } while(leftIndex === rightIndex || leftIndex === centerIndex || rightIndex === centerIndex){
    //     imageLeft.src = allImages[leftIndex].image;
    //     imageRight.src = allImages[rightIndex].image;
    //     imageCenter.src = allImages[centerIndex].image;

    //     }
    //     allImages[leftIndex].views++;
    //     allImages[rightIndex].views++;
    //     allImages[centerIndex].views++;

    //     currentPic = [leftIndex, rightIndex, centerIndex];
    //     //console.log(currentPic);
    }



//===================LOCAL STORAGE============================


function storeData(){
var convertedData = JSON.stringify(AdImage.allProducts);
localStorage.setItem('practice-data', convertedData);

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
       AdImage.allProducts = deconvertedData;
    
    }
    
// }
// }




//===============================================================

// Instantiations------------------------------------------------

// new AdImage('banana', "img/banana.jpg");
// new AdImage('bathroom', "img/bathroom.jpg");
// new AdImage('boots', "img/boots.jpg");
// new AdImage('breakfast', "img/breakfast.jpg");
// new AdImage('bubblegum', "img/Bubblegum.jpg");
// new AdImage('wine-glass', "img/wine-glass.jpg");
// new AdImage('chair', "img/chair.jpg");
// new AdImage('cthulhu ', "img/cthulhu.jpg");
// new AdImage('dog-duck', "img/dog-duck.jpg");
// new AdImage('dragon', "img/dragon.jpg");
// new AdImage('pen', "img/pen.jpg");
// new AdImage('pet-sweep', "img/pet-sweep.jpg");
// new AdImage('scissors', "img/scissors.jpg");
// new AdImage('shark', "img/shark.jpg");
// new AdImage('sweep', "img/sweep.png");
// new AdImage('tauntaun', "img/tauntaun.jpg");
// new AdImage('unicorn', "img/unicorn.jpg");
// new AdImage('usb', "img/usb.gif");
// new AdImage('water-can', "img/water-can.jpg");
// new AdImage('bag', "img/bag.jpg");



//==================================================
//===================CHART===========================
//===================================================

function renderChart() {

    var labelData = [];
    var clickData = [];
    var viewData = [];

  for (var i= 0; i< AdImage.allProducts.length; i++){
    labelData.push(AdImage.allProducts[i].name);
    clickData.push(AdImage.allProducts[i].clicked);
    viewData.push(AdImage.allProducts[i].views);
     }
    //   var ctx = document.getElementById('whiteboard').getContext('2d');
    

var ctx = document.getElementById('whiteboard').getContext('2d');
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

// getStoredDataAndPush();
pictureParent.addEventListener('click', handleClickOnImage);
renderAdImages();