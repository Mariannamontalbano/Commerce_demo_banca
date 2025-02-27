import React, { useState } from "react";
import "../global.css";

function Recensioni() {
    const [reviews, setReviews] = useState([]);
    const [comment, setComment] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (comment.trim() === "") return;

        const newReview = { id: Date.now(), text: comment, likes: 0 };
        setReviews([...reviews, newReview]);
        setComment("");
    };

    const handleLike = (id) => {
        const newReviews = reviews.map((review) =>
            review.id === id ? { ...review, likes: review.likes + 1 } : review
        );
        setReviews(newReviews);
    };

    return (
        <div className="reviews-container">
            <div className="review-box">
                <h2>Lascia una Recensione</h2>

                <form className="review-form" onSubmit={handleSubmit}>
                    <textarea 
                        value={comment} 
                        onChange={(e) => setComment(e.target.value)} 
                        placeholder="Scrivi la tua recensione..." 
                        className="review-input"
                    />
                    <button type="submit" className="submit-btn">Pubblica</button>
                </form>
            </div>

            <div className="review-list">
                {reviews.map((review) => (
                    <div key={review.id} className="review-post">
                        <p className="review-text">{review.text}</p>

                        <button 
                            className="like-btn" 
                            onClick={() => handleLike(review.id)}
                        >
                            👍 {review.likes}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Recensioni;

