import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import fakeData from './fakeData';
import Course from './Components/Course/Course';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';


function App() {
  // console.log(fakeData);
  const [cart, setCart] = useState([]);

  const handleAddCourse = (course) => {
    console.log('course added', course);
    const newCart = [...cart, course];
    setCart(newCart);
  }

  return (
    <div>
      <Header></Header>
      <div className="full-area">
        <div className="course-area">
          {
            fakeData.map(data => <Course course={data} handleAddCourse={handleAddCourse}></Course>)
          }
        </div>
        <div className="cart-area">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
