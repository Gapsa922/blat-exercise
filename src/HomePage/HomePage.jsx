import React from 'react'
import video from "../assets/Tube - 9005.mp4"

const HomePage = () => {
  return (
    <>
    <div>
      <video className="video" playsInline autoPlay muted loop poster="photo.jpg" src={video} />
      <div className="content-text">
        <h1 className="text">Unclear where to go ?</h1>
        <p className="text">You can spend your days switching back and forth from looking at your favorite travel photos to trying to go about your day to day life. But a few friendly reminder that the next adventure is closer than you think. We can help you put your wanderlust to rest. Pick your favorite destination.</p>
        <a href="/countries-list">
          <button className="button" type="submit">Enter</button>
        </a>
      </div>
    </div>
    </>
  )
}

export default HomePage;