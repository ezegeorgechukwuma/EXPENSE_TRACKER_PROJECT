
function Dashboard() {
  // Add global styles to ensure no conflicts FOR the dashboard page
  // and to set a consistent background color and padding.
  const globalStyles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body, html {
      background-color: #f9fafb !important;
      margin: 0 !important;
      padding: 0 !important;
    }
  `
  return (
    <>
      <style>{globalStyles}</style>
      <div style={{
        height: 'calc(100vh - 100px)', // leave space for navbar
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9fafb',
        padding: '1rem',
        boxSizing: 'border-box',
        position: 'absolute',
        top: '70px',
        left: '0'
      }}>
        <div style={{
          maxWidth: '700px',
          width: '100%',
          padding: '2rem',
          borderRadius: '12px',
          background: 'white',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            color: '#16a34a',
            marginBottom: '1rem',
            margin: '0 0 1rem 0' // ensure proper centering
          }}>
            Welcome to your Dashboard
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#555',
            margin: '0' // remove default margins
          }}>
            What do you want to add today?
          </p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;