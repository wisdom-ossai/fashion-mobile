import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="btn-text-primary text-dark rounded"
      onClick={() => navigate(-1)}
    >
      <i className="ri-arrow-left-s-line"></i>
    </button>
  );
};

export default BackButton;
