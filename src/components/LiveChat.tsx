"use client";
import React from "react";
import { MessageCircle } from "lucide-react";

export const WhatsAppChatButton: React.FC = () => {
  const phoneNumber = "+2348166336187";
  const message = "Hello. I just visited your website. I’d like to ask a few questions.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        backgroundColor: "#111",
        border: "none",
        borderRadius: "50%",
        padding: "14px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
        cursor: "pointer",
        zIndex: 999,
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#25D366";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#111";
      }}
    >
      <MessageCircle color="#fff" size={24} />
    </button>
  );
};
