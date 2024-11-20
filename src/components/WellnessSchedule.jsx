// WellnessSchedule.jsx
import React from 'react';

const WellnessSchedule = () => {
  // Sample session data
  const sessions = [
    {
      id: 1,
      date: '2024-11-15',
      time: '6:00 AM',
      type: 'Offline',
      description: 'Morning Yoga for stress relief and flexibility.',
    },
    {
      id: 2,
      date: '2024-11-15',
      time: '8:00 AM',
      type: 'Online',
      description: 'Self-defense techniques workshop (Zoom link provided).',
    },
    {
      id: 3,
      date: '2024-11-15',
      time: '5:00 PM',
      type: 'Offline',
      description: 'Group meditation session for mental clarity.',
    },
    {
      id: 4,
      date: '2024-11-15',
      time: '6:30 PM',
      type: 'Online',
      description: 'Health and nutrition tips for a balanced lifestyle.',
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Wellness Sessions Schedule</h1>
      <div style={styles.scheduleContainer}>
        {sessions.map((session) => (
          <div key={session.id} style={styles.card}>
            <h2 style={styles.sessionTitle}>{session.type} Session</h2>
            <p>
              <strong>Date:</strong> {session.date}
            </p>
            <p>
              <strong>Time:</strong> {session.time}
            </p>
            <p>
              <strong>Description:</strong> {session.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styling
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
  },
  header: {
    textAlign: 'center',
    color: '#4CAF50',
    marginBottom: '20px',
  },
  scheduleContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  card: {
    width: '300px',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  sessionTitle: {
    color: '#333',
    marginBottom: '10px',
  },
};

export default WellnessSchedule;
