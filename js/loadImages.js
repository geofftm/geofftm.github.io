randomImage()

function randomImage() {
   var images = ['js/images/IMG_9959.jpg', 'js/images/R0001152.JPG', 'js/images/R0000919.JPG', 'js/images/R0000897.JPG', 'js/images/R0001196.JPG', 'js/images/R0001142.JPG', 'js/images/R0000978.jpg', 'js/images/R0000370.JPG', 'js/images/R0000943.jpg', 'js/images/R0000968.JPG', 'js/images/R0000969.JPG', 'js/images/R0000996.JPG', 'js/images/IMG_9984.jpg', 'js/images/R0000332.JPG', 'js/images/R0001189.JPG', 'https://64.media.tumblr.com/f775700ad455f967caeeb5f07047eb7b/826d5bbec402b184-9e/s2048x3072/d6c0ccc1d6128b349ee3f6f59eb072b76000bda8.jpg',
'https://64.media.tumblr.com/69fecafc815c3ffb9186f57b05cbff1f/1a9633c40ccb504a-f9/s2048x3072/1f817892fe8e6bfb654e41dc477053e4edbb011a.jpg',
'https://64.media.tumblr.com/2cd4e52bbaa91f4d22a47d6c644ad2c9/c5c14b2ee57e5f0f-f0/s1280x1920/e86812a60b3c8a0c6f40e57bef12200d5e023d56.jpg',
'https://64.media.tumblr.com/51f8aca57f36c777b42cdf88cd4bb6cb/d841e3e1156d89f9-42/s2048x3072/49e2039c904c707e0390fc4d53b8a49d61d22bd8.jpg', 
'https://64.media.tumblr.com/14d26ae41badb419803ebbfa34813f2f/bd62caa883b1b9a7-c6/s1280x1920/c3e370e46156b3cb00dddf7eab22f1cad331cac4.jpg',
'https://64.media.tumblr.com/544bf175b190b157a260f5da6f3b61ee/tumblr_o10yy5cLIR1u7ss69o1_1280.jpg', 'https://64.media.tumblr.com/bd924166047f40f985f7db0bbf824e77/tumblr_o0z3ciG9cD1u7ss69o1_1280.jpg',
'https://64.media.tumblr.com/bed3acc057f71887b47532a8ca98bfce/tumblr_nyc4fd7GyZ1u7ss69o1_1280.jpg', 'https://64.media.tumblr.com/a6b5b8547b26b56e21eae064d900fa52/tumblr_o457t6ndAG1u7ss69o1_1280.jpg', 
'https://64.media.tumblr.com/888a9ae1930c5dc62990dd4c8e24f491/27350801936d0bda-80/s2048x3072/a4af4c9b906c00b26a0928d8092f4024edd35b29.jpg', 'https://64.media.tumblr.com/0c12dc8de4a2aeb41db5e4646ed745e6/503889ee97efdfcc-30/s2048x3072/9618d85bbf818a13b19614a6a3d6a25afd26ec88.jpg',
'https://64.media.tumblr.com/1dbf79f7c2c1a8ed1f1bfd68f081d0e4/d2c90d2bb8aca4e7-69/s2048x3072/77ce36d525d611735225860562ef9d0289272bd4.jpg', 'https://64.media.tumblr.com/232ab91a6aed279e888e39e92b2ab1e9/b3e513e21c2775e1-af/s2048x3072/174323271b448937c63ab7ad18863cf3b422b2d5.jpg',
'https://64.media.tumblr.com/8c680841c2630e0878a5eae4617bea40/tumblr_o73e02aGkq1u7ss69o1_1280.jpg', 'https://64.media.tumblr.com/b7df577f1df61bb158c356e24b165afe/tumblr_o71k84ZyEK1u7ss69o1_1280.jpg', 'https://64.media.tumblr.com/aff01de8f502967c80c919d55db938e7/tumblr_o0z65k4C2I1u7ss69o1_1280.jpg',
'https://64.media.tumblr.com/659d45451ea792738d897fc03c6e139d/tumblr_nyte2aHRw41u7ss69o1_1280.jpg']
   var randomImageSrc = images[Math.floor(Math.random() * images.length)];
     var image = "<a href='index.html'><img src='" + randomImageSrc + "'></a>";
   document.getElementById('img-load').innerHTML = image;
   window.setInterval(randomImage, 60000);
}