import React, { useState, useEffect } from "react";
import api from "../services/api";
import "../global.css";

function Recensioni() {
  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    api.get("/reviews")
      .then((res) => setReviews(res.data))
      .catch((err) => {
        console.error("Errore nel caricamento recensioni:", err);
        alert("Errore nel caricamento delle recensioni.");
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.trim() === "") return;

    try {
      const res = await api.post("/reviews", { content: comment });
      setReviews([...reviews, res.data]);
      setComment("");
    } catch (err) {
      console.error("Errore durante l'invio recensione:", err);
      alert("Errore durante l'invio della recensione.");
    }
  };

  const handleLike = async (reviewId) => {
    try {
      const res = await api.post(`/reviews/${reviewId}/like`);
      const updated = res.data;

      setReviews(reviews.map((r) => (r.id === updated.id ? updated : r)));
    } catch (err) {
      console.error("Errore nel mettere mi piace:", err);
      alert("Errore nel mettere mi piace.");
    }
  };

  const handleDelete = async (reviewId) => {
    if (!window.confirm("Sei sicuro di voler eliminare questa recensione?")) return;

    try {
      await api.delete(`/reviews/${reviewId}`);
      setReviews(reviews.filter((r) => r.id !== reviewId));
    } catch (err) {
      console.error("Errore durante l'eliminazione:", err);
      alert("Errore durante l'eliminazione della recensione.");
    }
  };

  return (
    <div className="reviews-container" style={{ padding: "30px", maxWidth: "800px", margin: "0 auto" }}>
      <div className="review-box" style={{ marginBottom: "30px" }}>
        <h2>Lascia una Recensione</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Scrivi la tua recensione..."
            style={{
              width: "100%",
              height: "100px",
              padding: "10px",
              fontSize: "16px",
              marginBottom: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "6px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Pubblica
          </button>
        </form>
      </div>

      <div className="review-list">
        {reviews.map((review) => (
          <div
            key={review.id}
            style={{
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              marginBottom: "20px",
              boxShadow: "0px 2px 5px rgba(0,0,0,0.05)",
            }}
          >
            <p style={{ fontSize: "16px", marginBottom: "15px" }}>{review.content}</p>

            {/* Bottoni separati con flex */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <button
                onClick={() => handleLike(review.id)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#e63946",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                ❤️ {review.likes || 0}
              </button>

              <button
                onClick={() => handleDelete(review.id)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#6c757d",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                🗑️ Elimina
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recensioni;
