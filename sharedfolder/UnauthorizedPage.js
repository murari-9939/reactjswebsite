import React from 'react';

const UnauthorizedPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>403 - Unauthorized</h1>
      <p style={styles.message}>You do not have permission to view this page.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  title: {
    fontSize: '2rem',
    color: '#FF0000',
  },
  message: {
    fontSize: '1.2rem',
    color: '#555',
  },
};

export default UnauthorizedPage;
