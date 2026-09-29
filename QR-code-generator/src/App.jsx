import { QRCode } from 'react-qr-code';
import { useState } from 'react';
function App() {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState('');
  function handleQrGenerator() {
    setQrCode(input);
  }
  return (
    <div className="container">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        name="qr-code"
        onChange={(e)=> setInput(e.target.value)}
        value={input}
        placeholder='Enter any value for QR'
      />
      <button
        disabled={!input.trim()}
        onClick={handleQrGenerator}>Generate QR</button>
      <QRCode id="qr-code" value={qrCode}/>
    </div>
  );
}

export default App;
