import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner"
        className="home__image"
      />

      <div className="home__row">
        <Product
          id={12312}
          title="The lean Startup: How Constant  Innovation Creates Radically Successful Bussinesses Paperback"
          price={29.99}
          rating={3}
          image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394265182l/12969026.jpg"
        />
        <Product
          id={12312}
          title="Kenwood Kmix-Stand MIxer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Water Glass Bowl"
          price={239.99}
          rating={3}
          image="data:image/jpeg;base64,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"
        />
      </div>
      <div className="home__row">
        <Product
          id="23445930"
          title="Amazon Echo (3rd Generation) | Smart Speaker with Alexa, Charcoal Fabric"
          price={98.99}
          image="https://m.media-amazon.com/images/I/61T1XpnFnQL._AC_SX679_.jpg"
          rating={5}
        />
        <Product
          id="23445930"
          title="Kasa Smart Plug Power Strip KP303, Surge Protector with 3 Individually Controlled Smart Outlets and 2 USB Ports, Works with Alexa & Google Home, No Hub Required , White"
          price={24.99}
          image="https://m.media-amazon.com/images/I/61yUqv7M9VL._AC_SX466_.jpg"
          rating={4}
        />
        <Product
          id="3254354345"
          title="GSM Fitness Hex Dumbbell, 7.5 kgs, Pack of 2, Rubber Coatedo"
          price={4051.0}
          image="https://images-na.ssl-images-amazon.com/images/I/417wp10uSeL.jpg"
          rating={3}
        />
      </div>
      <div className="home__row">
        <Product
          id={12312}
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={199.99}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/81rus0UFhsL.__AC_SY300_SX300_QL70_ML2_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
