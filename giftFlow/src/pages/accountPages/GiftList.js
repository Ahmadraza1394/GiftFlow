import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/GiftList.css'; 

const GiftList = ({ gifts, deleteGift, setEditingGift, childName }) => {
  return (
    <div className="gift-list">
      {gifts?.map(gift => (
        <div key={gift.id} className="card gift-card mb-3">
          <img src={gift.image} className="card-img-top" alt={gift.name} />
          <div className="card-body">
            <h5 className="card-title">{gift.name}</h5>
            <p className="card-text">{gift.price}</p>
            <p className="card-text">{gift.description}</p>
            <div className="gift-actions">
              
              <button className="btn btn-danger" onClick={() => deleteGift(childName, gift.id)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GiftList;
