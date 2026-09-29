import { useState } from "react";
import { menuData } from "./Data.js";
import MenuList from "./Components/MenuList.jsx";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                className="hamburger"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <span className={isOpen ? "line open" : "line"}></span>
                <span className={isOpen ? "line open" : "line"}></span>
                <span className={isOpen ? "line open" : "line"}></span>
            </button>

            <div
                className={`sidebar-overlay ${isOpen ? "show" : ""}`}
                onClick={() => setIsOpen(false)}
            />

            <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
                <div className="sidebar-header">
                    <div>
                        <span className="sidebar-badge">MENU</span>
                        <h2>Navigation</h2>
                    </div>

                    <button
                        className="close-button"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close menu"
                    >
                        ×
                    </button>
                </div>

                <div className="sidebar-content">
                    <MenuList list={menuData} />
                </div>
            </aside>
        </>
    );
}

export default App;
