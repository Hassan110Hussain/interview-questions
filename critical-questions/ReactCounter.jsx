import { useState } from 'react'

const styles = {
  wrapper: { display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'sans-serif', marginTop: '2rem' },
  card: { border: '1px solid #ddd', borderRadius: '12px', padding: '2rem', textAlign: 'center', width: '220px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
  value: { fontSize: '3rem', fontWeight: 'bold', display: 'block', margin: '0.5rem 0' },
  buttons: { display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' },
  btn: { padding: '0.5rem 1.2rem', fontSize: '1rem', borderRadius: '8px', border: 'none', cursor: 'pointer' },
  add: { background: '#4caf50', color: '#fff' },
  remove: { background: '#f44336', color: '#fff' },
}

function App() {
  const [counter, setCounter] = useState(10);

  const addValue = () => setCounter(prev => Math.min(prev + 1, 32));
  const removeValue = () => setCounter(prev => Math.max(prev - 1, 2));

  return (
    <div style={styles.wrapper}>
      <h1>Coffee, Cricket & Code ☕</h1>
      <div style={styles.card}>
        <p>Counter Value</p>
        <span style={styles.value}>{counter}</span>
        <div style={styles.buttons}>
          <button style={{ ...styles.btn, ...styles.add }} onClick={addValue} disabled={counter >= 32}>
            + Add
          </button>
          <button style={{ ...styles.btn, ...styles.remove }} onClick={removeValue} disabled={counter <= 2}>
            − Remove
          </button>
        </div>
        <p>Range: 2 – 32</p>
      </div>
    </div>
  )
}

export default App
