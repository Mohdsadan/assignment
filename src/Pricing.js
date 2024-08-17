import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing-container" aria-label="Pricing Section">
      <h2>Pricing Plans</h2>
      <div className="pricing-cards" role="list">
        <div className="card" role="listitem">
          <h3>Basic Plan</h3>
          <p>$19.99/month</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button aria-label="Select Basic Plan">Select Plan</button>
        </div>
        <div className="card" role="listitem">
          <h3>Standard Plan</h3>
          <p>$39.99/month</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
          <button aria-label="Select Standard Plan">Select Plan</button>
        </div>
        <div className="card" role="listitem">
          <h3>Premium Plan</h3>
          <p>$59.99/month</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
          </ul>
          <button aria-label="Select Premium Plan">Select Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;