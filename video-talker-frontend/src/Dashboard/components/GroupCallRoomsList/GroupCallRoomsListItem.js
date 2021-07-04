import React, { useState } from 'react';
import * as webRTCGroupCallHandler from '../../../utils/webRTC/webRTCGroupCallHandler';
import './GroupCallRoomsListItem.css';
import { callStates } from '../../../store/actions/callActions';

const GroupCallRoomsListItem = ({ room , callState}) => {

  const handleListItemPressed = () => {
    if (callState === callStates.CALL_AVAILABLE) {
    webRTCGroupCallHandler.joinGroupCall(room.socketId, room.roomId);
    }
  };

  return (
    <li onClick={handleListItemPressed} >
      
     <a><img class="icon home" /><span>{room.hostName}'s Room</span> </a> 
      
    </li>
  );
};

export default GroupCallRoomsListItem;





