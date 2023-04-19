import React from 'react';
import { render } from "react-dom";
import Navbar from './Navbar';
import Hero from './Hero-section';
import '/styles/index.css';


import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [tweetUrl, setTweetUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const downloadVideo = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3001/downloadTwitterVideo', {
        params: {
          tweetUrl: tweetUrl
        },
        responseType: 'blob'
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'my_video.mp4');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div>
      <input type="text" value={tweetUrl} onChange={e => setTweetUrl(e.target.value)} />
      <button onClick={downloadVideo} disabled={loading}>Download Video</button>
    </div>
  );
}

export default App;

/* 
function App() {
  return (
   <>
   <h2>he</h2>
   <Navbar/>
   <Hero/>
   
    </>
  );
}

export default App; */
