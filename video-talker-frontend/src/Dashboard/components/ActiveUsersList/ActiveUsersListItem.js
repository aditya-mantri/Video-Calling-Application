import React from 'react';
import userAvatar from '../../../resources/userAvatar.png';
import { callToOtherUser } from '../../../utils/webRTC/webRTCHandler';
import { callStates } from '../../../store/actions/callActions';
//import { MdVideoCall } from 'react-icons/md';
const ActiveUsersListItem = (props) => {
  const { activeUser, callState } = props;

  const handleListItemPressed = () => {
    if (callState === callStates.CALL_AVAILABLE)  {
      callToOtherUser(activeUser);
    }
  };

  return (
    <li onClick={handleListItemPressed} >
     <a><img class="icon user" /><span>{activeUser.username}</span></a> 
    </li>
  );
};

export default ActiveUsersListItem;
