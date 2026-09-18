import {useEffect, useState} from "react";

function App() {
  const [colorType, setColorType] = useState('HEX')
  const [color, setColor] = useState('#dc6c18');
  function randomColorUtility(length) {
      return Math.floor(Math.random() * length)
    }
  const handleHexColor = () => {
     let hexColor = '#';
     const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
     for(let i = 1; i <= 6; i++) {
         hexColor += hexCode[randomColorUtility(hexCode.length)];
     }
     setColor(hexColor);
  }

  const handleRgbColor = () => {
      let r = randomColorUtility(255);
      let g = randomColorUtility(255);
      let b = randomColorUtility(255);

      setColor(`rgb(${r}, ${g}, ${b})`);
  }

    useEffect(() => {
        if(colorType === 'HEX') handleHexColor();
        else handleRgbColor();
    }, [colorType]);

  return (
      <div className="container">
        <div className="header">
          <button className="hex_btn" onClick={()=> setColorType('HEX')}> #️⃣ Create HEX Color</button>
          <button className="rgb_btn" onClick={()=> setColorType('RGB')}> 🎨 Create RGB Color</button>
          <button className="random_btn" onClick={colorType === 'HEX' ? handleHexColor : handleRgbColor}> 🎲 Generate Random Color</button>
        </div>

        <div className="body" style={{
          backgroundColor: color
        }}>
          <h1 className="main_text">{colorType} Color</h1>
          <h2 className="secondary_text">{color}</h2>
        </div>
      </div>
  );
}

export default App;