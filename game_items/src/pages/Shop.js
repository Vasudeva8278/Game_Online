import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    name: "Diamond Pack",
    image: "https://i.ytimg.com/vi/mXmVY3QQxW4/maxresdefault.jpg", // Replace with actual image URL
    price: "$9.99",
  },
  {
    id: 2,
    name: "Gold Coins",
    image: "https://images.ctfassets.net/pjshm78m9jt4/5WsVP6b8MJ6RzRI0LGKLyw/1d07451b0ca3072d7d31da2999f3baf2/Screenshot_2022-09-01_at_10.56.46.png?fm=jpg&fit=fill&w=1600&q=80",
    price: "$4.99",
  },
  {
    id: 3,
    name: "AK-47 Skin",
    image: "https://wstatic-prod.pubg.com/web/live/static/game-info/weapons/images/viewer/img-weapons-akm.png",
    price: "$12.99",
  },
  {
    id: 4,
    name: "Sniper Rifle",
    image: "https://e7.pngegg.com/pngimages/450/391/png-clipart-sniper-rifle-crossfire-point-blank-accuracy-international-awm-sniper-rifle-gold-airsoft.png",
    price: "$14.99",
  },
  {
    id: 5,
    name: "Fuel Pack",
    image: "https://e7.pngegg.com/pngimages/1002/317/png-clipart-jerrycan-gasoline-tin-can-coating-fuel-jerrycan-diesel-fuel-technic-thumbnail.png",
   price: "$6.99",
  },
  
  {
    id: 6,
    name: "Elite Guns",
    image: "https://i.ytimg.com/vi/JzglhuY7m5g/maxresdefault.jpg",  price: "$19.99",
  },
  {
    id: 7,
    name: "M416 - THE FOOL",
    image: "https://hackernoon.imgix.net/images/Q2qCHpOJjIY79YADj7J5XxLwfRy2-xz930i0.jpeg",
    price: "$19.99",
  },
  {
    id: 8,
    name: "Elite parachute",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlWlbEwNr3OrQz4bbYP17kCk7g3kq_H8V74w&s",
    price: "$19.99",
  },
  {
    id: 9,
    name: "MP5k",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL19qNisCLQRj4gGNNXeoiR0ArZV8UxuYwEE18ZsB-oXgL0J5QrFytkHOT3nADieDd4zk&usqp=CAU",
    price: "$19.99",
  },
  {
    id: 10,
    name: "Ump4",
    image: "https://d.newsweek.com/en/full/1369467/pubg-mp5k.png?w=1200&f=20939b325661ad36dc53e35bffadf22a" , price: "$19.99",
  },
  {
    id: 11,
    name: "Flare Gun",
    image: "https://media.sketchfab.com/models/6b92ab60292e4c69b59dca3f7102ce94/thumbnails/ebf64cd7d1ba469d92782da193fa2f77/b0c1c25b793a43f9a3e94fba84196eef.jpeg",
    price: "$19.99",
  },
];

const Shop = () => {
  return (
    <div
      style={{
        padding: "20px",
    
        minHeight: "100vh", // Ensures the page takes full height
        color: "white",
        backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Wr8wzVnNXqGFESxdp4DeTwq599U7uZEGUA&s')", // Adding background image
        backgroundSize: "cover", // Ensures the background image covers the entire screen
        backgroundPosition: "center", // Centers the background image
      }}
    >
      <h2>Gaming Items</h2>
      <hR></hR>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px" }}>
        {items.map((item) => (
          <div key={item.id} style={{ padding: "10px", textAlign: "center" }}>
            <img src={item.image} alt={item.name} width="100" />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <Link to={`/purchase/${item.id}`}>
              <button
                style={{
                  padding: "10px",
                  backgroundColor: "green",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Buy Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;