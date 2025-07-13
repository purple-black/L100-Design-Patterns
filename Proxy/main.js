"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ImageProxy_1 = require("./proxy/ImageProxy");
// Creating proxy object — real image isn't loaded yet
var image1 = new ImageProxy_1.ImageProxy("photo1.jpg");
var image2 = new ImageProxy_1.ImageProxy("photo2.jpg");
console.log("Image proxies created. Displaying images now...");
// Image loads only when display method is called
image1.display();
image2.display();
// Image already loaded, so no reloading
image1.display();
