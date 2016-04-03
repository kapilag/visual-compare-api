# Visual-compare-api

This repository exposes endpoints for image comparison.
Backend logic for images comparison is this popular repository [resemble.js](https://github.com/Huddle/Resemble.js).

Image comparison comes quite handy doing automated css regression testing in web/mobile space.


#Motivation
There are n number of visual comparison tools available in different programming language which performs the functionality 
of comparing two images and saving the difference images if there is any.

With this approach comparison of images and sharing the difference images in abstracted out and one can concentrate on writing
client in the respective programming language in which there automation scripts are.

# Api-End point
/compare: accepts below json

* Request 

As of now option doesnot effect , anything but idea is to provided other configuration as well for resemble.js
```
{
    "options": {},
    "images": {
        "before": "data:image/png;base64,encoded String",
        "after": "data:image/png;base64,encoded String"
    }
}
```
* Response
```
 {
      misMatchPercentage : 100, // %
      isSameDimensions: true, // or false
      dimensionDifference: { width: 0, height: -1 }, // defined if dimensions are not the same
      getImageDataUrl: 
    }
```

#Clients(Selenium as a driver)
* [Java](https://github.com/kapilag/visual-compare-client)
* Ruby - coming soon

##Credits
Special thanks to [MortizPlatt](https://github.com/mplatt) for this project
