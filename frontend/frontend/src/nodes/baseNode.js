import React from "react";
import { Handle, Position } from "reactflow";
import { useStore } from "../store";
const BaseNode = ({ id, title, handles, children }) => {
    const removeNode = useStore((state) => state.removeNode);
  const containerStyle = {
    border: "1px solid #00bccb",
    boxShadow: "0 0 5px #00bccb",
    borderRadius: "8px",
    padding: "16px",
    backgroundColor: "white",
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "relative",
    fontFamily: "Arial, sans-serif",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: "8px",
  };

  const titleStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#005f73",
  };

  const closeButtonStyle = {
    cursor: "pointer",
    background: "none",
    border: "none",
    fontSize: "16px",
    color: "#005f73",
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <span style={titleStyle}>{title}</span>
        <button style={closeButtonStyle} onClick={() => removeNode(id)}>&times;</button>
      </div>
      <div>{children}</div>
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
        />
      ))}
    </div>
  );
};

export default BaseNode;
