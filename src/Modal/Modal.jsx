import { useState } from "react";
import "./Modal.css"; // Import CSS here

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    dob: "",
    phone: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\d{10}$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      alert("Invalid email. Please check your email address.");
      return;
    }
    if (!validatePhone(formData.phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }
    if (!formData.dob) {
      alert("Invalid date of birth. Please enter a valid date.");
      return;
    }

    alert("Form submitted successfully!");
    onClose();
  };

  // ✅ Close modal when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="close">✖</button>
        <h2>Fill the Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={formData.username} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" value={formData.dob} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input type="text" id="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
