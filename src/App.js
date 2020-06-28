import React from 'react';
import './App.css';
import video from './video/video.mp4'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div > 
    <CssBaseline />
    <Container fixed maxWidth="lg">
      <video style = {{position: "absolute",
             width: "100%",
             left: "0",
             zIndex: '0',
            }} className='videoTag' autoPlay loop muted>
        <source src={video} type='video/mp4' />
    </video>
    </Container>
    </div>
  );
}

export default App;
