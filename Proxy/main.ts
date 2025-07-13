import { ImageProxy } from "./proxy/ImageProxy";

// Creating proxy object — real image isn't loaded yet
const image1 = new ImageProxy("photo1.jpg");
const image2 = new ImageProxy("photo2.jpg");

console.log("Image proxies created. Displaying images now...");

// Image loads only when display method is called
image1.display();
image2.display();

// Image already loaded, so no reloading
image1.display();
