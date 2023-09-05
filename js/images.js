
var images = ["https://64.media.tumblr.com/f775700ad455f967caeeb5f07047eb7b/826d5bbec402b184-9e/s2048x3072/d6c0ccc1d6128b349ee3f6f59eb072b76000bda8.jpg",
"https://64.media.tumblr.com/69fecafc815c3ffb9186f57b05cbff1f/1a9633c40ccb504a-f9/s2048x3072/1f817892fe8e6bfb654e41dc477053e4edbb011a.jpg",
"https://64.media.tumblr.com/2cd4e52bbaa91f4d22a47d6c644ad2c9/c5c14b2ee57e5f0f-f0/s1280x1920/e86812a60b3c8a0c6f40e57bef12200d5e023d56.jpg",
"https://64.media.tumblr.com/51f8aca57f36c777b42cdf88cd4bb6cb/d841e3e1156d89f9-42/s2048x3072/49e2039c904c707e0390fc4d53b8a49d61d22bd8.jpg"
];
   
var randomImageSrc = images[Math.floor(Math.random() * images.length)];
//console.log(randomImage);

var image = "<img src='" + randomImageSrc + "'>";
// append to the div
document.getElementById("img-load").innerHTML = image;