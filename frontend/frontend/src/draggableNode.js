// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={{
        cursor: 'grab',
        minWidth: '80px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '8px',
        backgroundColor: '#FFFFFF', // white background color
        justifyContent: 'center',
        flexDirection: 'column',
        border: '2px solid #D1D5DB', // light gray border
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)', // slight shadow
        transition: 'box-shadow 0.2s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)')}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)')}
      draggable
    >
      
      {/* <svg
        width="24"
        height="24"
        fill="#6B7280" // medium gray icon color
        style={{ marginBottom: '5px' }}
      >
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg> */}
      <span style={{ color: '#6B7280', fontSize: '12px', fontWeight: '500' }}>{label}</span> {/* medium gray text color */}
    </div>
  );
};
