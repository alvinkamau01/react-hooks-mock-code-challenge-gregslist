import React from "react";
import {useEffect,useState} from 'react'


function ListingCard() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <ul>
     {cards.map((card) => (
    <li key={card.id} className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={card.image} alt={"description"} />
      </div>
      <div className="details">
        {true ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{card.description}</strong>
        <span> · {card.location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
))}
    </ul>
  );
}

export default ListingCard;
