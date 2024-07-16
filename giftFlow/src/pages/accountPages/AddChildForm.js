import React, { useState } from 'react';

const AddChildForm = ({ addChild, setAddingChild }) => {
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      addChild({ name, questions: [  { question: 'What is the age of the child?', answer: '' },
        { question: 'What kinds of games does he like to play the most?', answer: '' },{ question: "What are your child's favorite movies or series?", answer: '' }
        ,{ question: 'How does he like to spend time during vacations or on weekends?', answer: '' },{ question: 'What types of books does he like to read?', answer: '' }
        ,{ question: 'Is there something important for us to know?', answer: '' }],gifts:[{
          id: 1,
          image: 'https://toysrus.co.il/media/catalog/product/cache/55a044f927b05bedf296cf15120d7cf4/6/9/693677_1.jpg',
          name: 'Hermiz',
          price: '80',
          description: 'box game'
        },{
          id:2,
          image: 'https://toysrus.co.il/media/catalog/product/cache/55a044f927b05bedf296cf15120d7cf4/1/7/17450_1.jpg',
          name: 'monopoly',
          price: '99',
          description: 'Social Games'
        },{
          id: 3,
          image: 'https://itsplaytime.co.il/wp-content/uploads/2020/03/IMG_4758.jpg',
          name: 'Lego',
          price: '30',
          description: 'Lego Games'
        },{
          id:4,
          image: 'https://www.kodkod.co.il/images/itempics/1341.jpg',
          name: 'Talesman',
          price: '120',
          description: 'Social Games'
        },{
          id: 5,
          image: 'https://th.bing.com/th/id/OIP.00_yuNxck1mqMzXxnQhTaQHaHa?rs=1&pid=ImgDetMain',
          name: 'Art',
          price: '80',
          description: 'Art Games'
        }] });
        
        
      setAddingChild(false);
    }
  };

  return (
    <div className="add-child-form">
      <h2>Add Child</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Child Name</label>
          <input 
            type="text" 
            className="form-control" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Child</button>
        <button type="button" className="btn btn-secondary" onClick={() => setAddingChild(false)}>Cancel</button>
      </form>
    </div>
  );
};

export default AddChildForm;
