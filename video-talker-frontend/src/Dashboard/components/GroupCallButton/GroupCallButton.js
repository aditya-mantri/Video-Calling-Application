import React from 'react';

import './GroupCallButton.css';

const GroupCallButton = ({ onClickHandler, label }) => {
  return (
    <button
     onClick={onClickHandler} className='group_call_button'> {label}
    </button>
  );
};

export default GroupCallButton;
