export default function Home() {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', 
        fontFamily: 'serif' 
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Margaux’s Darling Flight Deals ✈️
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', textAlign: 'center' }}>
          She doesn’t chase bookings. She curates whispers of opportunity and lets them come to her.
        </p>
        <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>Coming Soon...</p>
      </div>
    );
  }
