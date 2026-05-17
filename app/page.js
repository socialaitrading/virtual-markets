export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'black',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          color: '#22c55e',
          fontSize: '60px',
          fontWeight: 'bold',
          marginBottom: '20px',
        }}
      >
        Virtual Markets
      </h1>

      <p
        style={{
          maxWidth: '600px',
          marginBottom: '30px',
          color: '#cccccc',
        }}
      >
        AI-powered social trading simulator.
      </p>

      <button
        style={{
          background: '#22c55e',
          color: 'black',
          padding: '15px 30px',
          borderRadius: '16px',
          border: 'none',
          fontWeight: 'bold',
          fontSize: '18px',
        }}
      >
        Launch App
      </button>
    </main>
  );
}
