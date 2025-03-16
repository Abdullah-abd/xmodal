import { useState } from "react";

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

  return (
    <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal-content bg-white p-6 rounded-lg shadow-lg w-1/3 relative">
        <button className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl" onClick={onClose}>
          ✖
        </button>
        <h2 className="text-lg font-bold mb-4">Fill the Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="block">Email:</label>
            <input type="email" id="email" className="border p-2 w-full" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="block">Username:</label>
            <input type="text" id="username" className="border p-2 w-full" value={formData.username} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="dob" className="block">Date of Birth:</label>
            <input type="date" id="dob" className="border p-2 w-full" value={formData.dob} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="block">Phone Number:</label>
            <input type="text" id="phone" className="border p-2 w-full" value={formData.phone} onChange={handleChange} required />
          </div>
          <button type="submit" className="submit-button bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
