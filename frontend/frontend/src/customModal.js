import React from 'react';

const CustomModal = ({ isOpen, onClose, response }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: '#1E293B', // slate-800
          color: 'white',
          borderRadius: '8px',
          boxShadow: '0 0 20px rgba(56, 189, 248, 0.6)', // border glow
          padding: '20px',
          width: '400px',
          maxWidth: '90%',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '15px',
          }}
        >
          <h2 style={{ margin: 0 }}>Response Details</h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              cursor: 'pointer',
            }}
          >
            &times;
          </button>
        </div>
        <div>
          <p>
            <strong>Number of nodes:</strong> {response.num_nodes}
          </p>
          <p>
            <strong>Number of edges:</strong> {response.num_edges}
          </p>
          <p>
            <strong>Is DAG:</strong> {response.is_dag ? 'Yes' : 'No'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
