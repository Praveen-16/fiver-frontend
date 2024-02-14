import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss";
import { cards } from "../../data";

function CatCard({dese, src}) {
  console.log(dese)
  return (
    // <Link to="/gigs?cat=web">
    //   <div className="catCard">
    //     <img src={card.img} alt="" />
    //     <span className="desc">{card.desc}</span>
    //     <span className="title">{card.title}</span>
    //   </div>
    // </Link>
    <div className="catCard">
        <img src={src} alt="" />
         {/* <span className="desc">{card.desc}</span> */}
         <span className="title">{dese}</span>
       </div>


  );
}
export default CatCard;
