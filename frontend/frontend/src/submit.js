import React, { useState } from "react";
import CustomModal from './customModal';

export const SubmitButton = ({ nodes, edges }) => {
  const [response, setResponse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async () => {
    try {
      console.log("nodes:", nodes);
      console.log("edges:", edges);
      const res = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      console.log(data);
      setResponse(data);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const buttonStyle = {
    backgroundColor: "#1E293B", // slate-800
    cursor: "pointer",
    position: "relative",
    boxShadow: "0 0 15px #1E293B", // shadow-zinc-900
    borderRadius: "9999px", // rounded-full
    padding: "1px",
    fontSize: "12px",
    fontWeight: "600",
    lineHeight: "1.5",
    color: "white",
    display: "inline-block",
    transition: "box-shadow 0.3s",
    border: "none",
  };

  const overlayStyle = {
    position: "absolute",
    inset: "0",
    overflow: "hidden",
    borderRadius: "9999px",
  };

  const overlayBeforeStyle = {
    content: '""',
    position: "absolute",
    inset: "0",
    borderRadius: "9999px",
    background:
      "radial-gradient(75% 100% at 50% 0%, rgba(56, 189, 248, 0.6) 0%, rgba(56, 189, 248, 0) 75%)",
    opacity: "0",
    transition: "opacity 0.5s",
  };

  const contentStyle = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    zIndex: "10",
    borderRadius: "9999px", // rounded-full
    backgroundColor: "#0F172A", // bg-zinc-950
    padding: "2px 16px", // py-0.5 px-4
    border: "1px solid rgba(255, 255, 255, 0.1)", // ring-1 ring-white/10
  };

  const bottomLineStyle = {
    position: "absolute",
    bottom: "0",
    left: "18px",
    height: "1px",
    width: "calc(100% - 36px)",
    background:
      "linear-gradient(to right, rgba(16, 185, 129, 0) 0%, rgba(16, 185, 129, 0.9) 50%, rgba(16, 185, 129, 0) 100%)",
    transition: "opacity 0.5s",
    opacity: "0",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.querySelector(".overlay-before").style.opacity = "1";
    e.currentTarget.querySelector(".bottom-line").style.opacity = "0.4";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.querySelector(".overlay-before").style.opacity = "0";
    e.currentTarget.querySelector(".bottom-line").style.opacity = "0";
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        type="button"
        onClick={handleSubmit}
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span style={overlayStyle} className="overlay">
          <span style={overlayBeforeStyle} className="overlay-before"></span>
        </span>
        <div style={contentStyle} className="content">
          <span>Submit</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.75 8.75L14.25 12L10.75 15.25"
            ></path>
          </svg>
        </div>
        <span style={bottomLineStyle} className="bottom-line"></span>
      </button>
      <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} response={response} />
    </div>
  );
};
