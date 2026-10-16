import { useState, useEffect } from 'react';

function App() {
    const url = 'https://dummyjson.com/products?limit=100';
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMssg, setErrorMssg] = useState('')
    const [scrollPercentage, setScrollPercentage] = useState(0)

    async function fetchData(myUrl) {
        try{
            setLoading(true)
            setErrorMssg('')
            const respond = await fetch(myUrl)
            if(!respond.ok){
                throw new Error(`HTTP error: ${respond.status}`)
            }
            const data = await respond.json()
            if(data.products){
                setData(data.products);
            }
        }catch(error){
            console.log(error)
            setErrorMssg(error.message);
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchData(url)
    }, [])

    function handleScrollPercentage() {
        const scrollTop =
            document.documentElement.scrollTop ||
            document.body.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const percentage = scrollHeight > 0
            ? (scrollTop / scrollHeight) * 100
            : 0;

        setScrollPercentage(percentage);
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScrollPercentage)
        return () => {
            window.removeEventListener('scroll', handleScrollPercentage)
        }
    }, [])

  return(
      <>
          <h1>Scroll Beyond</h1>
          <div className="top-container">
              <div className="scroll-progress-tracking-container">
                  <div className="current-progress-bar" style={{width: `${scrollPercentage}%`}}></div>
              </div>
          </div>
          {loading && <p className="status-message">Loading products...</p>}

          {errorMssg && (
              <p className="status-message error-message">
                  {errorMssg}
              </p>
          )}
          <div className="data-container">
              {
                  data.length > 0 ?
                      data.map(dataItem => <p key={dataItem.id}>{dataItem.title}</p>)
                      : null
              }
          </div>
      </>
  );
}

export default App