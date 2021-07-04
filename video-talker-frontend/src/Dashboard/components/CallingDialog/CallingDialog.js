import React from 'react';
import './CallingDialog.css';
import { hangUp } from '../../../utils/webRTC/webRTCHandler';
import { MdCallEnd } from 'react-icons/md';

const styles = {
  buttonContainer: {
    marginTop: '10px',
    width: '40px',
    height: '40px',
    borderRadius: '40px',
    border: '2px solid #e6e5e8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

const CallingDialog = () => {
  const handleHangUpButtonPressed = () => {
    hangUp();
  };

  return (
    <div className='direct_calling_dialog btn--wut.is-active dialogcolor'>
      <div class="call-animation">
      <img class="img-circle" src="https://image.flaticon.com/icons/png/512/3014/3014736.png" alt="" width="135"/>
      </div>
      <br/>
      <span>Calling</span>
      <div style={styles.buttonContainer} class="hoverred" onClick={handleHangUpButtonPressed}>
        <MdCallEnd style={{ width: '20px', height: '20px', fill: '#e6e5e8' }} />
      </div>
    </div>
  );
};

export default CallingDialog;
