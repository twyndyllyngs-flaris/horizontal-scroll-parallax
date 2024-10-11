
import { useRef, useState } from 'react';
import './styling/App.css';

// assets
import logo from './assets/logo.svg';

// components
import LandingPage from './pages/landing-page';

function App() {
  const otherElementRef = useRef(null)
  const [opacity, setOpacity] = useState(1)

  const handleWheel = (event) =>{
      event.preventDefault();

      const scrollAmount = event.deltaY

      if (otherElementRef.current){
          otherElementRef.current.scrollLeft += scrollAmount

          //calculate scroll position
          const {scrollLeft, clientWidth, scrollWidth} = otherElementRef.current

          //calculate scroll percentage
          const scrollPercentage = (scrollLeft + clientWidth) / scrollWidth

          // adjust opacity when scrol lreaches 90% or beyond
          if(scrollPercentage >= 0.9){
            const newOpacity = Math.max(1 - (scrollPercentage - 0.9) * 10, 0) // decrease opacity gradually
            setOpacity(newOpacity) 
          }else{
            setOpacity(1)
            
          }
      }
  }

  return (
    <div className="App h-[500vh] w-full" onWheel={handleWheel}>
      <LandingPage scrollRef={otherElementRef} opacity={opacity} />
      <div className='w-full h-[430vh]'></div>

      <div className='w-full h-screen'>
        <img src={logo} alt='react logo' className='w-full h-full' />
      </div>
    </div>
  );
}

export default App;
