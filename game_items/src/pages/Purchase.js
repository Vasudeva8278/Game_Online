import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";  // Import useNavigate
import { FaSearch } from "react-icons/fa"; // Importing magnifying glass icon

const Purchase = () => {
  const { id } = useParams();
  const navigate = useNavigate();  // Create a navigate function
  const [quantity, setQuantity] = useState(1);
  const [otp, setOtp] = useState("");
  const [success, setSuccess] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false); // State to toggle OTP modal visibility
  const pricePerItem = 10; // Sample price per item

  const handlePurchase = () => {
    setShowOtpModal(true); // Show OTP modal after clicking Confirm Purchase
  };

  const handleOtpSubmit = () => {
    if (otp.length === 4) {
      setSuccess(true);
      setShowOtpModal(false); // Hide OTP modal and show success message

      // Redirect to home page after successful payment
      setTimeout(() => {
        navigate("/");  // Redirect to the home page (or Shop.js)
      }, 1500); // Delay to show success message before redirection
    } else {
      alert("Please enter a valid 4-digit OTP.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "black", color: "white" }}>
      <div style={{
        height: "30rem",
        width: "20rem",
        backgroundColor: "#222",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
        boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)"
      }}>
        <h2>Purchase Item #{id}</h2>
        <p>Complete your purchase here.</p>

        {/* Magnifying Glass Icon */}
        <FaSearch size={30} style={{ marginBottom: "10px", color: "white" }} />

        {/* Quantity Selection */}
        <div style={{ marginBottom: "10px" }}>
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            style={{ marginLeft: "10px", width: "50px", textAlign: "center" }}
          />
        </div>

        {/* Total Amount Calculation */}
        <h3>Total: ${(quantity * pricePerItem).toFixed(2)}</h3>

        {/* Confirm Purchase Button */}
        <button
          onClick={handlePurchase}
          style={{
            padding: "10px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px"
          }}
        >
          Confirm Purchase
        </button>

        {/* Payment Success Message */}
        {success && (
          <div style={{ backgroundColor: "green", color: "white", padding: "10px", marginTop: "20px", borderRadius: "5px" }}>
            ✅ Payment Successful! Your item has been purchased.
          </div>
        )}
      </div>

      {/* OTP Modal */}
      {showOtpModal && (
        <div style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <div style={{
            backgroundColor: "#333",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            width: "200px",
          }}>
            <h3>Enter OTP</h3>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              maxLength="4"
              style={{
                width: "100px",
                padding: "10px",
                marginBottom: "10px",
                textAlign: "center",
                fontSize: "16px",
                borderRadius: "5px",
              }}
            />
            <div>
              <button
                onClick={handleOtpSubmit}
                style={{
                  padding: "10px",
                  backgroundColor: "green",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginTop: "10px"
                }}
              >
                Submit OTP
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Purchase;
