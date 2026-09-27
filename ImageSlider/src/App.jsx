import {useState, useEffect} from 'react';

function App() {
    const url = "https://picsum.photos/v2/list";
    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [errMssg, setErrMsg] = useState(null);
    const [loading, setLoading] = useState(true);
    async function fetchImages(getUrl) {
        try {
            setLoading(true);
            setErrMsg(null);
            const response = await fetch(getUrl);
            if(!response.ok) {
                throw new Error("Failed to fetch the images");
            }
            const data = await  response.json()
            setImages(data);
        }catch(e){
            setErrMsg(e.message);
        }finally {
            setLoading(false);
        }
    }
    useEffect(()=>{
        if(url !== '') fetchImages(url);
    }, [url])
    function handlePrev() {
        setCurrentImage((prev)=>{
            return prev === 0 ? images.length - 1 : prev - 1;
        });
    }

    function handleNxt() {
        setCurrentImage((prev)=>{
           return prev === images.length - 1 ? 0 : prev + 1;
        });
    }

    if(loading) {
        return <h2 className="loading-hdr">Loading Images...</h2>
    }

    if(errMssg) {
        return <h2 className="error-hdr">Error: {errMssg}</h2>
    }
  return(
      <main className="slider-page">
        <header className="header">
          <span className="eyebrow">GALLERY</span>
          <h1>Image Slider</h1>
          <p>Explore Beautiful moments, one image at a time.</p>
        </header>

        <section className="slider-wrapper">
            <button className="slider-btn prev" aria-label="previous image" onClick={handlePrev}>
                ←
            </button>

            <div className="image-container">
                <div className="image-placeholder">
                    {
                        images.length > 0 && (
                            <img
                                src={images[currentImage].download_url}
                                alt={`Photo by ${images[currentImage].author}`}
                                className="slider-image"
                            />
                        )
                    }
                </div>

                <div className="image-overlay">
                    <div>
                        <span className="image-number">
                            {String(currentImage + 1).padStart(2, "0")} /{" "}
                            {String(images.length).padStart(2, "0")}
                        </span>
                    </div>
                </div>
            </div>

            <button className="slider-btn nxt" aria-label="next image" onClick={handleNxt}>
                →
            </button>
        </section>
      </main>
  )
}

export default App;