function App() {
  return(
      <main className="slider-page">
        <header className="header">
          <span className="eyebrow">GALLERY</span>
          <h1>Image Slider</h1>
          <p>Explore Beautiful moments, one image at a time.</p>
        </header>

        <section className="slider-wrapper">
            <button className="slider-btn prev" aria-label="previous image">
                ←
            </button>

            <div className="image-container">
                <div className="image-placeholder">
                    <span>YOUR IMAGE</span>
                </div>

                <div className="image-overlay">
                    <div>
                        <span className="image-number">01 / 05</span>
                    </div>
                </div>
            </div>

            <button className="slider-btn nxt" aria-label="next image">
                →
            </button>
        </section>
      </main>
  )
}

export default App;