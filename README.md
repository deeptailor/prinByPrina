# PrinByPrina

[PrinByPrina live][prodlink]

PrinByPrina is a single page website made for a fashion designer based in Chicago. Technologies used for this website include Javascript, React, React-Router, HTML5 and CSS3.   

![PrinByPrina home page: http://www.deeptailor.com/prinByPrina/#/][home page]

## Features & Implementation

###Custom Carousel for Collections

I used Slick Carousel to implement custom versions of the carousel to show of respective collection images. The carousel component was created with reusability in mind. An array with respective image url's is passed to the component as props to render different collections depending on the URL.

![PrinByPrina collections page: http://www.deeptailor.com/prinByPrina/#/main/ss17][carousel]


###Hand Rolled Modal component

I created my own version of a modal to allow users to view enlarged images of the collection. I used a boolean value stored in the components state to allow rendering of the respective image on the modal. The modal allows users to scroll to next and previous images. I passed along the index value for the respective images to keep track of which image the modal was currently on, and clicking the previous and next arrows would update the modal accordingly.

![PrinByPrina modal page: http://www.deeptailor.com/prinByPrina/#/main/ss17][modal]

###Shop

Users can view available collections that are for sale. They can add the respective items to cart and check out using the Shopify Buy API.

![PrinByPrina shop page: http://www.deeptailor.com/prinByPrina/#/main/shop][shop]

###Add to Cart and Check Out

Users can add the shop collection to a cart, and check out using the Shopify API. The cart element persists on all the pages allowing users to quickly view their cart and check out from any page.

![PrinByPrina shop page: http://www.deeptailor.com/prinByPrina/#/main/shop][cart]


###User Experience

User experience was an important part of the project. With help from Prina, we were able to design the website for maximum usability and ease of understanding.

User testing was carried out to fine tune the design of the website.

###Mobile responsive design

The website is designed with media queries to change the look and feel of the website when users are browsing from non desktop devices.

[prodlink]: http://deeptailor.com/prinByPrina/#/
[home page]: ./docs/screenshots/homepage-screenshot.jpeg "PrinByPrina home page"
[carousel]: ./docs/screenshots/carousel-screenshot.jpeg "PrinByPrina Carousel"
[modal]: ./docs/screenshots/modal-screenshot.jpeg "PrinByPrina Modal"
[shop]: ./docs/screenshots/shop-screenshot.jpeg "PrinByPrina shop page"
[cart]: ./docs/screenshots/cart-screenshot.jpeg "PrinByPrina cart"
