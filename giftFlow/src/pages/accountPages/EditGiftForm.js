import React, { useState } from 'react';

const EditGiftForm = ({ gift, updateGift, setEditingGift, childName }) => {
  const [formData, setFormData] = useState(gift);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateGift(childName, formData);
    setEditingGift(null);
  };

  return (
    <div className="edit-gift-form">
      <h2>Edit Gift</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Gift Name</label>
          <input 
            type="text" 
            className="form-control" 
            value={formData.name} 
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input 
            type="text" 
            className="form-control" 
            value={formData.price} 
            onChange={(e) => setFormData({ ...formData, price: e.target.value })} 
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea 
            className="form-control" 
            value={formData.description} 
            onChange={(e) => setFormData({ ...formData, description: e.target.value })} 
          ></textarea>
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input 
            type="text" 
            className="form-control" 
            value={formData.image} 
            onChange={(e) => setFormData({ ...formData, image: e.target.value })} 
          />
        </div>
        <button type="submit" className="btn btn-primary">Save Changes</button>
        <button type="button" className="btn btn-secondary" onClick={() => setEditingGift(null)}>Cancel</button>
      </form>
    </div>
  );
};

export default EditGiftForm;