import React, { useState } from 'react';

const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState('');

  const plans = [
    { name: 'Basic', price: 8.99, description: '1 screen, 480p' },
    { name: 'Standard', price: 13.99, description: '2 screens, 1080p' },
    { name: 'Premium', price: 17.99, description: '4 screens, 4K+HDR' },
  ];

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePaymentChange = (e) => {
    setPaymentInfo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedPlan || !paymentInfo) {
      alert('Please select a plan and enter payment info.');
    } else {
      alert(`Subscribed to ${selectedPlan.name} plan with payment: ${paymentInfo}`);
    }
  };

  return (
    <div className="subscription-page">
      <h1>Choose Your Plan</h1>
      <div className="plans">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`plan ${selectedPlan?.name === plan.name ? 'selected' : ''}`}
            onClick={() => handlePlanSelection(plan)}
          >
            <h2>{plan.name}</h2>
            <p>{plan.description}</p>
            <p>${plan.price}/month</p>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <form onSubmit={handleSubmit}>
          <h3>Payment Information</h3>
          <input
            type="text"
            placeholder="Enter Payment Info"
            value={paymentInfo}
            onChange={handlePaymentChange}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      )}

      <style jsx>{`
        .subscription-page {
          text-align: center;
          padding: 20px;
        }

        .plans {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .plan {
          padding: 20px;
          border: 1px solid #ccc;
          cursor: pointer;
          transition: all 0.3s;
        }

        .plan:hover {
          background-color: #f0f0f0;
        }

        .selected {
          border: 2px solid #333;
        }

        form {
          margin-top: 20px;
        }

        input {
          padding: 10px;
          margin: 10px;
          width: 200px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }

        button {
          padding: 10px 20px;
          background-color: #e50914;
          border: none;
          color: white;
          cursor: pointer;
        }

        button:hover {
          background-color: #b20710;
        }
      `}</style>
    </div>
  );
};

export default SubscriptionPage;
