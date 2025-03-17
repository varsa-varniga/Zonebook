import React, { useState } from 'react';
import './swipe.css';
import Yoga1 from '../../assets/yoga1.jpg'; // Import yoga1.jpg
import Yoga2 from '../../assets/yoga2.jpg'; // Import yoga2.jpg

const Swipe = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 2);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 2) % 2);
  };

  return (
    <div className="swipe-container">
      <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {/* Slide 1 */}
        <div className="slide">
          <div className="text-content">
            <h2>What is ZoneBook?</h2>
            <p>ClassPass is a credit-based membership that grants you access to thousands of studios, gyms, salons, & spas near you.</p>
            <button onClick={nextSlide}>Next</button>
            <button onClick={() => console.log('Sign up')}>Skip straight to sign up</button>
          </div>
          <div className="image-content">
            <img src={Yoga1} alt="Yoga 1" />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="slide">
          <div className="text-content">
            <h2>How do credits work?</h2>
            <p>Our plans include credits to use for booking classes & appointments. The credit value of a reservation varies by things like location, popularity, & time.</p>
            <button onClick={prevSlide}>Continue</button>
            <button onClick={() => console.log('Sign up')}>Skip straight to sign up</button>
          </div>
          <div className="image-content">
            <img src={Yoga2} alt="Yoga 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swipe;