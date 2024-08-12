import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const ConsultationForm = ({ isOpen, onClose }) => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    contactNo: "",
    message: "",
    dateTime: "",
  });
  const baseurl = process.env.NEXT_PUBLIC_APP_URL || "";
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseurl}/api/consultation`, userInput);
      if (res.status === 200) {
        toast.success("Consultation request sent successfully!");
        onClose();
        setUserInput({
          name: "",
          email: "",
          contactNo: "",
          message: "",
          dateTime: "",
        });
      } else {
        toast.error("Failed to send request. Please try again.");
      }
    } catch (error) {
      toast.error(`Error: ${error.message || "Failed to send request"}`);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Book a Consultation</h2>
        <p>Need help? Fill out the form below to schedule a consultation. </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={userInput.name}
              onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={userInput.email}
              onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Contact No.</label>
            <input
              type="text"
              name="contactNo"
              value={userInput.contactNo}
              onChange={(e) => setUserInput({ ...userInput, contactNo: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={userInput.message}
              onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Date and Time</label>
            <input
              type="datetime-local"
              name="dateTime"
              value={userInput.dateTime}
              onChange={(e) => setUserInput({ ...userInput, dateTime: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="button-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
