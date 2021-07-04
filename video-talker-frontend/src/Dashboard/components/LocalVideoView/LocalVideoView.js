import React, { useRef, useEffect } from 'react';
import './localvideo.css';
const styles = {
  videoContainer: {
    width: '100%',
    height: '100%',
    borderRadius: '8px',

  },
  videoElement: {
    width: '100%',
    height: '97%'
  }
};

const LocalVideoView = props => {
  const { localStream } = props;
  const localVideoRef = useRef();

  useEffect(() => {
    if (localStream) {
      const localVideo = localVideoRef.current;
      localVideo.srcObject = localStream;

      localVideo.onloadedmetadata = () => {
        localVideo.play();
      };
    }
  }, [localStream]);

  return (
    
    <div style={styles.videoContainer} className='background_secondary_color'>
      <video style={styles.videoElement} className='videoonmobile' ref={localVideoRef} autoPlay muted />
    </div>
    
  );
};

export default LocalVideoView;
