import React, { useState, useEffect } from "react";
import axios from "axios";
import "./review.css"; // Импорт стилей

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get("http://localhost:5000/reviews");
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/reviews", formData);
      setFormData({ name: "", email: "", message: "" });
      fetchReviews();
    } catch (error) {
      console.error("Error creating review:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/reviews/${id}`);
      fetchReviews();
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Reviews</h2>
      <form onSubmit={handleSubmit} className="reviews__form">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <li key={review.id} className="reviews__item">
            <div>
              <strong>{review.name}</strong> - {review.email}: {review.message}
            </div>
            <div>
              <button onClick={() => handleDelete(review.id)}>Delete</button>
              <button>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
