import React, { useEffect } from 'react';

import './CallRejectedDialog.css';

const CallRejectedDialog = ({ reason, hideCallRejectedDialog }) => {
  useEffect(() => {
    setTimeout(() => {
      hideCallRejectedDialog({
        rejected: false,
        reason: ''
      });
    }, [4000]);
  }, []);

  return (
    <div className='call_rejected_dialog dialogcolor'>
      <span>
        {reason}
      </span>
    </div>
  );
};

export default CallRejectedDialog;
