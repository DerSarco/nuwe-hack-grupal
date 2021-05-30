import React, { useState } from "react";
import Visa from './images/visa.svg';
import MasterCard from './images/MasterCard_early_1990s_logo.svg';
import AmericanExpress from './images/american_express.svg';
import './styles/displayCard.css';


const DisplayCard = ({card}) => {
  
    console.log(card);

    if (card.name === "Visa") {
        card.src = Visa;
    } else if (card.name === "Master Card") { 
        card.src = MasterCard;
    } else if (card.name === "American Express") { 
        card.src = AmericanExpress;
    }
    
    
    const convertDate = (string) => {
        let date = new Date(string);

        let month = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
        let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

        return `${day}/${month}/${date.getFullYear()}`;
        
    }

    card.exp_date = convertDate(card.exp_date);

  return (
    
      <div>
        {card && (
            <div className="center-card">
                <div className="card-container">

                    <div className="image-container">
                    <img className="card-logo" src={card.src} alt="Card" />
                    </div>
                    
                    <div className="card-info">
                        <p>Total Credits</p>
                        <h2>{card.credits}</h2>
                        <p>{card.number}</p>
                        <p>Expiration Date: {card.exp_date}</p>
                    </div>
                    
                </div>
            </div>
        )}
      </div>
  )
}

export default DisplayCard;