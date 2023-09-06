import os

dir_name = "/Users/geoffreymatis/personal_github_page/geofftm.github.io/js/images/Archive"
images_path = os.listdir(dir_name)
img_ext = '.jpg'

image_list = ['js/images/Archive/' + i for i in images_path if img_ext in i.lower()]

with open("/Users/geoffreymatis/personal_github_page/geofftm.github.io/js/loadImages.js", "w") as f:
    f.write("randomImage()\n")
    f.write("\n")
    f.write("function randomImage() {")
    f.write("\n")
    f.write("   var images = [")
    for index, i in enumerate(image_list):
        if index != (len(image_list) - 1):
            f.write(f"'{i}', ")
        else:
            f.write(f"'{i}'")
    f.write("]")
    f.write("\n")
    f.write("   var randomImageSrc = images[Math.floor(Math.random() * images.length)];")
    f.write("\n")
    f.write('''     var image = "<a href='index.html'><img src='" + randomImageSrc + "'></a>";''')
    f.write("\n")
    f.write("   document.getElementById('img-load').innerHTML = image;")
    f.write("\n")
    f.write("   window.setInterval(randomImage, 60000);")
    f.write("\n")
    f.write("}")
    f.close()

    