randomImage()

function randomImage() {
   var images = ['js/images/IMG_9959.jpg', 'js/images/R0001152.JPG', 'js/images/R0000919.JPG', 'js/images/R0000897.JPG', 'js/images/R0001196.JPG', 'js/images/R0001142.JPG', 'js/images/R0000986.JPG', 'js/images/R0000978.jpg', 'js/images/R0000370.JPG', 'js/images/R0000943.jpg', 'js/images/R0000968.JPG', 'js/images/R0000969.JPG', 'js/images/R0000996.JPG', 'js/images/IMG_9984.jpg', 'js/images/R0000332.JPG', 'js/images/R0001189.JPG']
   var randomImageSrc = images[Math.floor(Math.random() * images.length)];
     var image = "<a href='index.html'><img src='" + randomImageSrc + "' style='width: 80%; height: auto;'></a>";
   document.getElementById('img-load').innerHTML = image;
   window.setInterval(randomImage, 60000);
}