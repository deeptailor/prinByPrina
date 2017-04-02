const shopifyOptions = {
"product": {
"variantId": "all",
"contents": {
"imgWithCarousel": false,
"variantTitle": false,
"description": false,
"buttonWithQuantity": false,
"quantity": false
},
"styles": {
"product": {
"@media (min-width: 601px)": {
  "max-width": "calc(25% - 20px)",
  "margin-left": "20px",
  "margin-bottom": "50px"
}
},
"button": {
"background-color": "#000000",
"padding-left": "20px",
"padding-right": "20px",
":hover": {
  "background-color": "#000000"
},
"border-radius": "5px",
":focus": {
  "background-color": "#000000"
}
},
"variantTitle": {
"font-weight": "normal"
},
"description": {
"font-weight": "normal"
},
"price": {
"font-weight": "normal"
},
"compareAt": {
"font-family": "Helvetica Neue, sans-serif",
"font-weight": "normal",
"font-size": "11.9px"
}
}
},
"cart": {
"contents": {
"button": true
},
"styles": {
"button": {
"background-color": "#000000",
":hover": {
  "background-color": "#000000"
},
"border-radius": "5px",
":focus": {
  "background-color": "#000000"
}
},
"footer": {
"background-color": "#ffffff"
}
}
},
"modalProduct": {
"contents": {
"img": false,
"imgWithCarousel": true,
"variantTitle": false,
"buttonWithQuantity": true,
"button": false,
"quantity": false
},
"styles": {
"product": {
"@media (min-width: 601px)": {
  "max-width": "100%",
  "margin-left": "0px",
  "margin-bottom": "0px"
}
},
"button": {
"background-color": "#000000",
"padding-left": "20px",
"padding-right": "20px",
":hover": {
  "background-color": "#000000"
},
"border-radius": "5px",
":focus": {
  "background-color": "#000000"
}
},
"variantTitle": {
"font-weight": "normal"
},
"description": {
"font-weight": "normal"
},
"price": {
"font-weight": "normal"
},
"compareAt": {
"font-family": "Helvetica Neue, sans-serif",
"font-weight": "normal"
}
}
},
"toggle": {
"styles": {
"toggle": {
"background-color": "#000000",
":hover": {
  "background-color": "#000000"
},
":focus": {
  "background-color": "#000000"
}
},
"count": {
"color": "#ffffff",
":hover": {
  "color": "#ffffff"
}
},
"iconPath": {
"fill": "#ffffff"
}
}
},
"productSet": {
"styles": {
"products": {
"@media (min-width: 601px)": {
  "margin-left": "-20px"
}
}
}
}
};

export const shopifyInit = (function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'deeptailor.myshopify.com',
      apiKey: 'ca6ac2940956aad91de4cf2b38689ead',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        id: 381014726,
        node: document.getElementById('collection-component-424ce9c77e8'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: shopifyOptions
      });
    });
  }
});
