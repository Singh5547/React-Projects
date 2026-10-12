import useTheme from "./useTheme.jsx";
import {useEffect} from "react";
function App() {
    const [theme, setTheme] = useTheme('theme', "light")
    const handleToggleTheme = () =>{
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    console.log(theme)
  return (
      <div>
          <h1>Theme Changer using a custom hook</h1>
          <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
  );
}

export default App;